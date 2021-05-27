//elementi per popUp login/Registrazione
var log = document.getElementById("logincon");
var reg = document.getElementById("registrazione");
var spanLog = document.getElementsByClassName("close")[0];
var spanReg = document.getElementsByClassName("close")[1];

//Azioni da eseguire dopo aver caricato l'html
$(document).ready(function () {
  //Controlla se una sessione è già presente
  checkSessione();
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

function checkSessione() {
  if (sessionStorage.getItem("email") != null) {
    $("#loginNav").html(
      '<a class="Avatar" href="Profilo.html" class="dropbtn"><img src="Contenuti/avatar.png"></a><div class="dropdown-content"><a style="text-align:justify;padding-left: 1.7vw" href="index.html" onClick="LogOut()">Esci</a></div>'
    );

    log.style.display = "none";
    reg.style.display = "none";
  }
}

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
  var funzione = 6; //funzione login in php
  //alert("cawoujcaw");
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

      checkSessione();
    },
    error: function (xhr, ajaxOptions, thrownError, data) {
      alert("Server errors:", thrownError, data);
    },
  });
<<<<<<< HEAD
  
  document.getElementById("avvisoLog").innerHTML = "";
=======
	document.getElementById("avvisoLog").innerHTML="";
>>>>>>> 4dd659592e83b2ebd620dcd2da245de121480061
}

function LogOn() {
  if ($("#passwordUtenteReg").val() === $("#checkPUtente").val()) {
    var nome = $("#NomeUtente").val();
    var cognome = $("#CognomeUtente").val();
    var email = $("#emailUtenteReg").val();
    var password = $("#passwordUtenteReg").val();
    var tipoDocumento = $("#tipoDocumento").val();
    var codDocumento = $("#codDocumento").val();
    var ddn = $("#nascita").val();
    var nTel = $("#nTel").val();
    var indirizzo = $("#indirizzo").val();
    var numeroCivico = $("#numeroCivico").val();
    var patentenautica = "NO";

    if (tipoDocumento == "Patente nautica") patentenautica = "SI";

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
        if (data == "0") {
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

          checkSessione();
        } else {
          alert("Errore: " + data);
        }
      },
      error: function (xhr, ajaxOptions, thrownError, data) {
        alert("Errore nel server:", thrownError, data);
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
function LoadInformation() {
  //Funzione che permette il caricamento delle informazioni dell'utente
  $(".Nome").append(sessionStorage.getItem("nome"));
  $(".Cognome").append(sessionStorage.getItem("cognome"));
  $(".Email").append(sessionStorage.getItem("email"));
  $(".Documento").append(
    sessionStorage.getItem("tipoDocumento") +
      ", " +
      "COD." +
      sessionStorage.getItem("codDocumento")
  );
  $(".nTel").append(sessionStorage.getItem("nTel"));
  $(".Indirizzo").append(
    sessionStorage.getItem("indirizzo") +
      " N°" +
      sessionStorage.getItem("numeroCivico")
  );
  InfoNoleggi();
}
function InfoNoleggi(){
  var codDocumento = sessionStorage.getItem("codDocumento");
  var funzione = 8;
  $.ajax({
    url: "../BackEnd/insert.php",
    method: "POST",
    data: {
        funzione,
        codDocumento
    },
    success: function(data) {        
        document.getElementById("Tabella_Noleggi").innerHTML= data;
        //alert(data);
    },
  });
}; 