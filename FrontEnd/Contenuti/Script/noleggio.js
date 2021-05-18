//$(document).ready(function () {
  //Funzione ricerca barche
  function CercaBarche(porto){
    var documento = $("#documento").val();
    var dataInizio = $("#dataInizio").val();
    var dataFine = $("#dataFine").val();
    var caparra = $("#caparra").val();

    //il valore della variabile funzione determina la funzione da usare nel file insert.php
    var funzione = 2;
    
    $.ajax({
      url: "../BackEnd/insert.php",
      method: "POST",
      data: {
        documento,
        dataInizio,
        dataFine,
        caparra,
        funzione,
        porto
      },
      success: function (data) {
        $("#barche").append(data);//inserire i dati calcolati dentro insert.php dentro il div barche nella pagina noleggio
      },
    });
  }
//});

