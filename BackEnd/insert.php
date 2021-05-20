<?php
$scegliFunzione = $_POST['funzione'];
//error_reporting(0);
switch ($scegliFunzione)
{
    case 1:InserisciNoleggio();break;
    case 2:VisualizzaNavi();break;
    case 3:VisualizzaInfoNavi();break;
}


function InserisciNoleggio()//Inserimento noleggio nel database
{
    include_once("db_connect.php");
    $documento=$_POST['documento'];
    $dataNol = date("Y/m/d");
    $dataInizio=$_POST['dataInizio'];
    $dataFine=$_POST['dataFine'];
    $caparra=$_POST['caparra'];
    $nomeBarca =$_POST['nomeBarca'];
    
    $cercaIdBarca = "SELECT iDImb FROM imbarcazioni where nome = '$nomeBarca'";
    $idBarca = $conn->query($cercaIdBarca);
    $idBarca->num_rows;
    $row = $idBarca->fetch_assoc();



    echo ($row["iDImb"]);



    // if ($conn->query($cercaIdBarca) === TRUE) {
    //     echo "Noleggio effettuato";
    // }
    // else 
    // {
    //     echo "Error: " . $sql . "<br>" . $conn->error;
    // }


    // $sql="INSERT INTO noleggio (idnol, documento, dataNol, dataInizio, dataFine, caparra) 
    // VALUES 
    // (NULL, '$documento', '$dataNol', '$dataInizio', '$dataFine', '$caparra')";

    // if ($conn->query($sql) === TRUE) {
    //     echo "Noleggio effettuato";
    // }
    // else 
    // {
    //     echo "Error: " . $sql . "<br>" . $conn->error;
    // }

    $conn->close();
}

function VisualizzaNavi()
{
    include_once("db_connect.php");
    $porto = $_POST['porto'];
    $sql = "SELECT imbarcazioni.nome,imbarcazioni.marca FROM imbarcazioni JOIN ormeggi on imbarcazioni.iDImb = ormeggi.IDImb JOIN porti on porti.iDPorto = ormeggi.iDPorto where porti.iDPorto = '$porto'" ;
    //$risultato = $conn->query($sql);
    $output = '<select id = "showBarche" onchange="InfoBarche(this.value)" >
    <option disabled="true" selected="selected">Nome-Marca</option> ';
    if ($risultato = $conn->query($sql)) {
        //echo("funziona");
        // $result is an object and can be used to fetch row here
        if ($risultato->num_rows) {
            // output data of each row
            while($row = $risultato->fetch_assoc()) {

                $output.= '<option >'. $row["nome"].'-'.$row["marca"]. "</option>";
            }
          } else {
            //echo "In questo porto non si trova nessuna nostra barca";
            $output .= '<option disabled="true">In questo porto non si trova nessuna nostra barca</option>';
          }
    }
    else {
        echo("Query failed: ". $conn->error);
    }
    $output .="</select>";
     echo $output;
    
      $conn->close();
}


function VisualizzaInfoNavi()
{
    include_once("db_connect.php");
    $nomeBarca = $_POST['nomeBarca'];
    $sql = "SELECT nome,marca,modello,prezzonoleggio_al_giorno,lunghezza,potenza_cv,nPostiLetto,obbligoPatenteNautica FROM imbarcazioni  where nome = '$nomeBarca'" ;

    $output = "";
    
    if ($risultato = $conn->query($sql)) {
        //echo("funziona");
        // $result is an object and can be used to fetch row here
        if ($risultato->num_rows) {
            // output data of each row
            while($row = $risultato->fetch_assoc()) {
                $output.= 'La barca '. $row["nome"].', modello '.$row["modello"]. "(".$row["marca"]. ")". " ha una lunghezza di: ".$row["lunghezza"]."m.\n".
                " La sua capienza arriva fino a ".$row['nPostiLetto']. " posti letto, con una potenza di :".$row["potenza_cv"]." CV.\n"
                ."Prezzo affitto giornaliero: ".$row["prezzonoleggio_al_giorno"]."€ \n".
                "Obbligo patente nautica: ".$row["obbligoPatenteNautica"];
            }
          } else {
            //echo "In questo porto non si trova nessuna nostra barca";
            $output .= 'Nessuna informazione trovata';
          }
    }
    else {
        echo("Query failed: ". $conn->error);
    }
     echo $output;
    
      $conn->close();

}
?>