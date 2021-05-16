<?php

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

?>