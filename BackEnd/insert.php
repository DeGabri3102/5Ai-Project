<?php
$scegliFunzione = $_POST['funzione'];
//error_reporting(0);
switch ($scegliFunzione)
{
    case 1:InserisciNoleggio();break;
    case 2:VisualizzaNavi();break;
}

 





function InserisciNoleggio()//Inserimento noleggio nel database
{
    include_once("db_connect.php");
    $documento=$_POST['documento'];
    $dataNol = date("Y/m/d");
    $dataInizio=$_POST['dataInizio'];
    $dataFine=$_POST['dataFine'];
    $caparra=$_POST['caparra'];

    $sql="INSERT INTO noleggio (idnol, documento, dataNol, dataInizio, dataFine, caparra) 
    VALUES 
    (NULL, '$documento', '$dataNol', '$dataInizio', '$dataFine', '$caparra')";

    if ($conn->query($sql) === TRUE) {
        echo "data inserted";
    }
    else 
    {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}

function VisualizzaNavi()
{
    include_once("db_connect.php");
    $sql = "SELECT porti.citta,imbarcazioni.nome,imbarcazioni.marca,dataOrmeggio FROM ormeggi JOIN porti on porti.iDPorto = ormeggi.IDporto JOIN imbarcazioni on imbarcazioni.iDImb = ormeggi.iDImb " ;
    //$risultato = $conn->query($sql);
    $output = '<table style="font-weight: normal; border: 1px solid black; border-collapse: collapse;">';
    if ($risultato = $conn->query($sql)) {
        echo("funziona");
        // $result is an object and can be used to fetch row here
        if ($risultato->num_rows) {
            // output data of each row
            while($row = $risultato->fetch_assoc()) {
                $output .= "<tr>";
                $output .= "<td> citta: " . $row["citta"]. "</td>"; 
                $output .=  "<td> nome: " . $row["nome"]. "</td>";
                $output .= "<td> marca: " . $row["marca"]. "</td>"; 
                $output .= "<td> Data Ormeggio: " . $row["dataOrmeggio"] ."</td>";
            }
          } else {
            echo "0 results";
          }
    }
    else {
        echo("Query failed: ". $conn->error);
    }
    $output .="</table>";
     echo $output;
    
      $conn->close();
}
?>