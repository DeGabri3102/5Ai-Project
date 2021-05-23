//elementi per popUp login/Registrazione
var log = document.getElementById("logincon");
var reg = document.getElementById("registrazione");
var spanLog = document.getElementsByClassName("close")[0];
var spanReg = document.getElementsByClassName("close")[1];

//Azioni da eseguire dopo aver caricato l'html
$(document).ready(function () {
  //Controlla se una sessione è già presente
  if (sessionStorage.getItem("email") != null) {
    $("#testoLogin").html(
      sessionStorage.getItem("nome") + " " + sessionStorage.getItem("cognome")
    );
    log.style.display = "none";
    reg.style.display = "none";
  }

  //Modifica la visualizzazione della password
  $(".show-password-toggle").each(function () {
    var eye = $(this);
    eye.on("click", function () {
      eye.toggleClass("icon-eye-open icon-eye-close fa-eye-slash");
      eye.siblings("input").each(function () {
        if (eye.hasClass("icon-eye-open")) {
          $(this).attr("type", "text");
        } else if (eye.hasClass("icon-eye-close")) {
          $(this).attr("type", "password");
        }
      });
    });
  });
});

//Mostra login
function MostraLogin() {
  if (sessionStorage.getItem("email") != null) {
    $("#testoLogin").html(
      sessionStorage.getItem("nome") + " " + sessionStorage.getItem("cognome")
    );
    // LogOut();
  } else {
    log.style.display = "block";
    reg.style.display = "none";
  }
}
//mostra registrazione
function MostraRegistrazione() {
  reg.style.display = "block";
  log.style.display = "none";
}
//Cliudi popup
spanLog.onclick = function () {
  log.style.display = "none";
};
spanReg.onclick = function () {
  reg.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == log || event.target == reg) {
    log.style.display = "none";
    reg.style.display = "none";
  }
};

function LogIn() {
  var email = $("#emailUtente").val();
  var password = $("#passwordUtente").val();
  var funzione = 4; //funzione login in php

  $.ajax({
    type: "POST",
    url: "../BackEnd/insert.php",
    data: {
      funzione,
      email,
      password,
    },
    success: function (data) {
      //console.log(data);
      data = JSON.parse(data.replace("result: ", ""));
      //Impostando la sessione dell'utente
      sessionStorage.setItem("nome", data.nome);
      sessionStorage.setItem("cognome", data.cognome);
      sessionStorage.setItem("email", data.email);
      sessionStorage.setItem("codDocumento", data.codDocumento);
      sessionStorage.setItem("tipoDocumento", data.tipoDocumento);
      sessionStorage.setItem("ddn", data.ddn);
      sessionStorage.setItem("nTel", data.nTel);
      sessionStorage.setItem("indirizzo", data.indirizzo);
      sessionStorage.setItem("numeroCivico", data.numeroCivico);
      sessionStorage.setItem("patentenautica", data.patentenautica);

      $("#testoLogin").html(
        sessionStorage.getItem("nome") + " " + sessionStorage.getItem("cognome")
      );
      log.style.display = "none";
      reg.style.display = "none";
    },
    error: function (xhr, ajaxOptions, thrownError, data) {
      alert("Server errors:", thrownError, data);
    },
  });
}

function LogOn() {
  if ($("#passwordUtenteReg").val() === $("#checkPUtente").val()) {
    var nome = $("#NomeUtente").val();
    var cognome = $("#CognomeUtente").val();
    var email = $("#emailUtenteReg").val();
    var password = $("#passwordUtenteReg").val();

    //##############################################
    //LE RIGHE CON STRINGHE A CASO SONO DA SISTEMARE
    //##############################################
    var codDocumento = "codDocumento";
    var tipoDocumento = "tipoDocumento";
    var ddn = "ddn";
    var nTel = "nTel";
    var indirizzo = "indirizzo";
    var numeroCivico = "numeroCivico";
    var patentenautica = "patentenautica";
    //##############################################
    //LE RIGHE CON STRINGHE A CASO SONO DA SISTEMARE
    //##############################################

    var funzione = 5; //funzione logon in php

    $.ajax({
      type: "POST",
      url: "../BackEnd/insert.php",
      data: {
        funzione,
        email,
        password,
        nome,
        cognome,
        codDocumento,
        tipoDocumento,
        ddn,
        nTel,
        indirizzo,
        numeroCivico,
        patentenautica,
      },
      success: function (data) {
        //Impostando la sessione dell'utente
        sessionStorage.setItem("nome", nome);
        sessionStorage.setItem("cognome", cognome);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("codDocumento", codDocumento);
        sessionStorage.setItem("tipoDocumento", tipoDocumento);
        sessionStorage.setItem("ddn", ddn);
        sessionStorage.setItem("nTel", nTel);
        sessionStorage.setItem("indirizzo", indirizzo);
        sessionStorage.setItem("numeroCivico", numeroCivico);
        sessionStorage.setItem("patentenautica", patentenautica);

        $("#testoLogin").html(
          sessionStorage.getItem("nome") +
            " " +
            sessionStorage.getItem("cognome")
        );
        log.style.display = "none";
        reg.style.display = "none";
      },
      error: function (xhr, ajaxOptions, thrownError, data) {
        alert("Server errors:", thrownError, data);
      },
    });
  } else {
    alert("Le password non corrispondono.");
  }
}

function LogOut() {
  if (window.confirm("Vuoi davvero uscire?")) {
    sessionStorage.clear();
    $("#testoLogin").html("Login");
  }
}
