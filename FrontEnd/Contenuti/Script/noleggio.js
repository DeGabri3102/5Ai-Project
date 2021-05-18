$(document).ready(function () {
  $("#noleggia").click(function () {
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
      },
      success: function (data) {
        $("#barche").append(data);
      },
    });
  });
});
