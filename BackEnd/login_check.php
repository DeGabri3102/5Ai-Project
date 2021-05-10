<?php
//session_start();
//ob_start();

// Connessione al server ed apertura del database
mysql_connect("localhost", "root", "") or die("Connessione impossibile");
mysql_select_db("utenti") or die("Impossibile aprire database");

// Definizione di $myusername e $mypassword
$myusername = $_POST["email"];
$mypassword = $_POST["password"];

$sql = "SELECT * FROM login WHERE username='" . $myusername . "' and password='" . $mypassword . "'";
$result = mysql_query($sql);

// mysql_num_row conta il numero di tuple lette
$count = mysql_num_rows($result);

// Se l'autenticazione è corretta, ci deve essere un'unica corrispondenza nella tabella login
if ($count == 1) {
  // Login effettuato e redirect verso main.php
  //$_SESSION["logged"] = "ok";
  //header("Location:main.php");
  echo "Autenticazione riuscita.";
} else {
  echo "Autenticazione fallita.";
  //$_SESSION["logged"] = "";
}

   //ob_end_flush();
