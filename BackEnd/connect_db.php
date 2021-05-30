<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "charternautico";

//In questo file viene inizializzato l'oggetto per connettersi al database, che verrà usato per gestire e interrogare il database
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connessione fallita: " . $conn->connect_error);
  }
