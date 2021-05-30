//$(document).ready(function () {
//Funzione ricerca barche
function InserisciBarche() {
  var funzione = 1;
  var documento = sessionStorage.getItem("codDocumento");
  var dataInizio = $("#dataInizio").val();
  var dataFine = $("#dataFine").val();
  var caparra = $("#caparra").val();
  var nomeBarca = $(".showBarche").val();
  nomeBarca += "";
  nomeBarca = nomeBarca.split("-");
  nomeBarca = nomeBarca[0];

  $.ajax({
    url: "../BackEnd/querys_db.php",
    method: "POST",
    data: {
      documento,
      dataInizio,
      dataFine,
      funzione,
      caparra,
      nomeBarca,
    },
    success: function (data) {
      //$("#informazioni").append(data); //inserire i dati calcolati dentro insert.php dentro il div barche nella pagina noleggio
      alert(data);
    },
  });
}
function CercaBarche(porto) {
  //il valore della variabile funzione determina la funzione da usare nel file insert.php
  var funzione = 2;

  $.ajax({
    url: "../BackEnd/querys_db.php",
    method: "POST",
    data: {
      funzione,
      porto,
    },
    success: function (data) {
      $("#barche").append(data); //inserire i dati calcolati dentro insert.php dentro il div barche nella pagina noleggio
    },
  });
}
//});

//visualizzazione informazioni barca
function InfoBarche(barca) {
  //var documento = $("#documento").val();
  barca += "";
  var nomeBarca = barca.split("-");
  nomeBarca = nomeBarca[0];

  //alert(nomeBarca);
  //il valore della variabile funzione determina la funzione da usare nel file insert.php
  var funzione = 3;
  //Visualizzare le barche
  $.ajax({
    url: "../BackEnd/querys_db.php",
    method: "POST",
    data: {
      funzione,
      nomeBarca,
    },
    success: function (data) {
      $("#informazioni").val(data); //inserire i dati calcolati dentro insert.php dentro la textarea info nella pagina noleggio
      //alert(data);
    },
  });

  AggiornaDate(nomeBarca);
  ControlloPantente(nomeBarca);
  document.getElementById("dataInizio").disabled = false;
}

function AggiornaDate(nomeBarca) {
  //Modifica calendari e giorni disponibili

  var funzione = 4;
  $.ajax({
    url: "../BackEnd/querys_db.php",
    method: "POST",
    data: {
      funzione,
      nomeBarca,
    },
    success: function (data) {
      Aggiorna(data);
      //alert(data);
    },
  });
}

function ControlloPantente(nomebarca) {
  var patenteUser = sessionStorage.getItem("patentenautica");
  var codDocumento = sessionStorage.getItem("codDocumento");
  var funzione = 7;

  $.ajax({
    url: "../BackEnd/querys_db.php",
    method: "POST",
    data: {
      funzione,
      patenteUser,
      codDocumento,
      nomebarca,
    },
    success: function (data) {
      alert(data);
    },
  });
}
