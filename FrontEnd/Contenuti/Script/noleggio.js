//$(document).ready(function () {
//Funzione ricerca barche
function CercaBarche(porto) {
    //il valore della variabile funzione determina la funzione da usare nel file insert.php
    var funzione = 2;

    $.ajax({
        url: "../BackEnd/insert.php",
        method: "POST",
        data: {
            funzione,
            porto
        },
        success: function(data) {
            $("#barche").append(data); //inserire i dati calcolati dentro insert.php dentro il div barche nella pagina noleggio
        },
    });
};
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

    $.ajax({
        url: "../BackEnd/insert.php",
        method: "POST",
        data: {
            funzione,
            nomeBarca
        },
        success: function(data) {

            $("#informazioni").val(data); //inserire i dati calcolati dentro insert.php dentro la textarea info nella pagina noleggio
            //alert(data);
        },
    });
};