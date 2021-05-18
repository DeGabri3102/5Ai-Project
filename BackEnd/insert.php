<?php
$scegliFunzione = $_POST['funzione'];

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
    $sql = "SELECT idOrmeggio,IDPorto,iDImb,dataOrmeggio FROM ormeggi";
    //$risultato = $conn->query($sql);
    $output = "";
    if ($risultato = $conn->query($sql)) {
        echo("funziona");
        // $result is an object and can be used to fetch row here
        if ($risultato->num_rows) {
            // output data of each row
            while($row = $risultato->fetch_assoc()) {
              $output .= "id: " . $row["idOrmeggio"]. " - iD Porto: " . $row["iDPorto"]. "Id barca: " . $row["iDImb"]. "Data Ormeggio: " . $row["dataOrmeggio"] ."<br>";
            }
          } else {
            echo "0 results";
          }
    }
    else {
        echo("Query failed: ". $conn->error);
    }
     echo $output;
    
      $conn->close();
}
?>