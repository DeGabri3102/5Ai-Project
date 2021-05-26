<?php

$scegliFunzione = $_POST['funzione'];
//error_reporting(0);
switch ($scegliFunzione) {
    case 1:
        InserisciNoleggio();
        break;
    case 2:
        VisualizzaNavi();
        break;
    case 3:
        VisualizzaInfoNavi();
        break;
    case 4:
        DateNoleggio();
        break;
    case 5:
        LogOn();
        break;
    case 6:
        LogIn();
        break;
    case 7:
        ControllaPatente();
        break;

}


function InserisciNoleggio() //Inserimento noleggio nel database
{
    include_once("db_connect.php");
    $documento = $_POST['documento'];
    $dataNol = date("Y/m/d");
    $dataInizio = $_POST['dataInizio'];
    $dataInizio = date("Y-m-d", strtotime($dataInizio));
    $dataFine = $_POST['dataFine'];
    $dataFine = date("Y-m-d", strtotime($dataFine));
    $caparra = $_POST['caparra'];
    $nomeBarca = $_POST['nomeBarca'];
    //cerca id barca 
    $cercaIdBarca = "SELECT iDImb FROM imbarcazioni where nome = '$nomeBarca'";
    $idBarca = $conn->query($cercaIdBarca);
    $idBarca->num_rows;
    $row = $idBarca->fetch_assoc();



    $idBarca = ($row["iDImb"]);
    //cerca id prenotazione sistemare con autoincrement
    $cercaIdPrenotazione = "SELECT iDPrenotazione FROM prenotazioninoleggi ORDER BY iDPrenotazione DESC LIMIT 1";
    $idpren = $conn->query($cercaIdPrenotazione);
    $idpren->num_rows;

    $sql = "INSERT INTO prenotazioninoleggi (iDPrenotazione, codDocumento,iDImb, dataPrenotazione, inizioNoleggio, fineNoleggio, caparra,noleggiata) 
    VALUES 
    (NULL, '$documento', '$idBarca','$dataNol', '$dataInizio', '$dataFine', '$caparra','SI')";

    if ($conn->query($sql) === TRUE) {
        echo "Noleggio effettuato";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}

function VisualizzaNavi()
{
    include_once("db_connect.php");
    $porto = $_POST['porto'];
    $sql = "SELECT imbarcazioni.nome,imbarcazioni.marca FROM imbarcazioni JOIN ormeggi on imbarcazioni.iDImb = ormeggi.IDImb JOIN porti on porti.iDPorto = ormeggi.iDPorto where porti.iDPorto = '$porto'";
    //$risultato = $conn->query($sql);
    $output = '<select id = "showBarche" onchange="InfoBarche(this.value)" >
    <option disabled="true" selected="selected">Nome-Marca</option> ';
    if ($risultato = $conn->query($sql)) {
        //echo("funziona");
        // $result is an object and can be used to fetch row here
        if ($risultato->num_rows) {
            // output data of each row
            while ($row = $risultato->fetch_assoc()) {

                $output .= '<option >' . $row["nome"] . '-' . $row["marca"] . "</option>";
            }
        } else {
            //echo "In questo porto non si trova nessuna nostra barca";
            $output .= '<option disabled="true">In questo porto non si trova nessuna nostra barca</option>';
        }
    } else {
        echo ("Query failed: " . $conn->error);
    }
    $output .= "</select>";
    echo $output;

    $conn->close();
}


function VisualizzaInfoNavi()
{
    include_once("db_connect.php");
    $nomeBarca = $_POST['nomeBarca'];
    $sql = "SELECT nome,marca,modello,prezzonoleggio_al_giorno,lunghezza,potenza_cv,nPostiLetto,obbligoPatenteNautica FROM imbarcazioni  where nome = '$nomeBarca'";

    $output = "";

    if ($risultato = $conn->query($sql)) {
        //echo("funziona");
        // $result is an object and can be used to fetch row here
        if ($risultato->num_rows) {
            // output data of each row
            while ($row = $risultato->fetch_assoc()) {
                $output .= 'La barca ' . $row["nome"] . ', modello ' . $row["modello"] . "(" . $row["marca"] . ")" . " ha una lunghezza di: " . $row["lunghezza"] . "m.\n" .
                    " La sua capienza arriva fino a " . $row['nPostiLetto'] . " posti letto, con una potenza di :" . $row["potenza_cv"] . " CV.\n"
                    . "Prezzo affitto giornaliero: " . $row["prezzonoleggio_al_giorno"] . "€ \n" .
                    "Obbligo patente nautica: " . $row["obbligoPatenteNautica"];
            }
        } else {
            //echo "In questo porto non si trova nessuna nostra barca";
            $output .= 'Nessuna informazione trovata';
        }
    } else {
        echo ("Query failed: " . $conn->error);
    }
    echo $output;

    $conn->close();
}


function LogIn()
{
    include_once("db_connect.php");

    $email = $_POST['email'];
    $password = $_POST['password'];

    // Protezione mySQL injection
    $email = stripslashes($email);
    $password = stripslashes($password);
    $email = mysqli_real_escape_string($conn, $email);
    $password = mysqli_real_escape_string($conn, $password);

    //hashing della password
    //$password = hash_hmac('sha512', 'salt' . $password, $_SERVER['site_key']);

    $sql = "SELECT codDocumento,tipoDocumento,nome,cognome,ddn,email,nTel,indirizzo,numeroCivico,patentenautica FROM clienti  where email = '$email'";
    $passwordCheck = $conn->query("SELECT password FROM clienti where email = '$email'");

    if ($risultato = $conn->query($sql)) {
        // $risultato contiene tutto cioò che viene "visualizzato" con la nostra query $sql
        if ($risultato->num_rows == 1 && $password == $passwordCheck->fetch_assoc()["password"]) {
            $output = json_encode($risultato->fetch_assoc());
            echo "result: " . $output;
        } else {
            //echo "nessun utente";
            echo ("Nessun utente corrisponde con l'email o la password");
        }
    } else {
        echo ("Query fallita: " . $conn->error);
    }

    $conn->close();
}

function DateNoleggio()
{
    include_once("db_connect.php");
    $nomeBarca = $_POST['nomeBarca'];
    $cercaIdBarca = "SELECT iDImb FROM imbarcazioni where nome = '$nomeBarca'";
    $idBarca = $conn->query($cercaIdBarca);
    $idBarca->num_rows;
    $row = $idBarca->fetch_assoc();

    $idBarca = $row["iDImb"];
    $output = "";
    $sql = "SELECT inizioNoleggio,fineNoleggio FROM prenotazioninoleggi where iDimb = '$idBarca'";
    if ($risultato = $conn->query($sql)) {
        if ($risultato->num_rows) {
            while ($row = $risultato->fetch_assoc()) {
                $output .= $row["inizioNoleggio"] . ":" . $row["fineNoleggio"] . "@";
            }
        } else {
            //echo "In questo porto non si trova nessuna nostra barca";
            $output .= 'NO';
        }
    } else {
        echo ("Query failed: " . $conn->error);
    }

    echo $output;

    $conn->close();
}

function LogOn()
{
    include_once("db_connect.php");

    $nome = $_POST['nome'];
    $cognome = $_POST['cognome'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $codDocumento = $_POST['codDocumento'];
    $tipoDocumento = $_POST['tipoDocumento'];
    $ddn = $_POST['ddn'];
    $nTel = $_POST['nTel'];
    $indirizzo = $_POST['indirizzo'];
    $numeroCivico = $_POST['numeroCivico'];
    $patentenautica = $_POST['patentenautica'];

    // Protezione mySQL injection
    $email = stripslashes($email);
    $password = stripslashes($password);
    $email = mysqli_real_escape_string($conn, $email);
    $password = mysqli_real_escape_string($conn, $password);

    //hashing della password
    //$password = hash_hmac('sha512', 'salt' . $password, $_SERVER['site_key']);
    $sql = "SELECT email FROM clienti  where email = '$email'";

    if (($conn->query($sql)->num_rows) == 0) {
        $sql = "INSERT INTO `clienti` (`codDocumento`, `tipoDocumento`, `nome`, `cognome`, `ddn`, `email`, `password`, `nTel`, `indirizzo`, `numeroCivico`, `patentenautica`)
        VALUES ('$codDocumento', '$tipoDocumento', '$nome', '$cognome', '$ddn', '$email', '$password', '$nTel', '$indirizzo', '$numeroCivico', '$patentenautica');";
        if ($risultato = $conn->query($sql)) {
            echo 0; // Per confermare la buona riuscita
        } else {
            echo ("Query fallita: " . $conn->error);
        }
    } else {
        echo ("Utente già registrato");
    }

    $conn->close();
}

function ControllaPatente()
{
    $patenteUser = $_POST['patenteUser'];
    $codDocumento = $_POST['codDocumento'];
    $nomeBarca = $_POST['nomebarca'];
    include_once("db_connect.php");

    $cercaPatente = "SELECT obbligoPatenteNautica FROM imbarcazioni where nome = '$nomeBarca'";
    $patente = $conn->query($cercaPatente);
    $patente->num_rows;
    $row = $patente->fetch_assoc();

    if($row['obbligoPatenteNautica'] == "SI" && $patenteUser == "NO")
    {
        echo "Non puoi noleggiare questa barca";
    }
 
    $conn->close();
}
