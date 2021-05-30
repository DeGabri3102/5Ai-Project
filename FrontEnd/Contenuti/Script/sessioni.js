//elementi del popUp login/Registrazione
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

//Permette di controllare se una sessione è aperta
function checkSessione() {
  if (sessionStorage.getItem("email") != null) {
    $("#loginNav").html(
      '<a class="Avatar" href="Profilo.html" class="dropbtn"><img src="Contenuti/avatar.png"></a><div class="dropdown-content"><a style="text-align:justify;padding-left: 1.7vw" href="index.html" onClick="LogOut()">Esci</a></div>'
    );

    log.style.display = "none";
    reg.style.display = "none";
  }
}

//Mostra modulo per l'accesso
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

//Mostra modulo per la registrazione
function MostraRegistrazione() {
  reg.style.display = "block";
  log.style.display = "none";
}

//Eventi per la chiusura moduli accesso/registrazione
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

//Funzione per accedere e impostare la sessione recuperando le info dal database
function LogIn() {
  var email = $("#emailUtente").val();
  var password = $("#passwordUtente").val();
  var funzione = 6; //Il numero indica la funzione da richiamare nello script php

  $.ajax({
    type: "POST",
    url: "../BackEnd/querys_db.php",
    data: {
      //Dati da passare al php attraverso il post con ajax
      funzione,
      email,
      password,
    },
    success: function (data) {
      //console.log(data);
      if (data.split("#")[1] != "1") {
        data = JSON.parse(data.replace("result: ", ""));
        //Impostando la sessione dell'utente
        sessionStorage.setItem("nome", data.nome);
        sessionStorage.setItem("cognome", data.cognome);
        sessionStorage.setItem("email", data.email);

        if (data.email.split("@")[1] != "bhor.it") {
          sessionStorage.setItem("codDocumento", data.codDocumento);
          sessionStorage.setItem("tipoDocumento", data.tipoDocumento);
          sessionStorage.setItem("ddn", data.ddn);
          sessionStorage.setItem("nTel", data.nTel);
          sessionStorage.setItem("indirizzo", data.indirizzo);
          sessionStorage.setItem("numeroCivico", data.numeroCivico);
          sessionStorage.setItem("patentenautica", data.patentenautica);
        } else {
          sessionStorage.setItem("idAdmin", data.iDAmministratore);
          sessionStorage.setItem("admin", true);
        }

        checkSessione();
      } else {
        alert(data.split("#")[0]); //Errore delle credenziali utente non combaciano
      }
    },
    error: function (xhr, ajaxOptions, thrownError, data) {
      alert("Server errors:", thrownError, data);
    },
  });

  document.getElementById("avvisoLog").innerHTML = "";
}

//Funzione per registrarsi e impostare la sessione (a differenza dell'accesso non è possibile immettere i dati degli amministratori)
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
      url: "../BackEnd/querys_db.php",
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
        if (data == "0" && data.email.split("@")[1] != "bhor.it") {
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

//Funzione che elimina la sessione e "disconnette l'utente"
function LogOut() {
  if (window.confirm("Vuoi davvero uscire?")) {
    sessionStorage.clear();
    $("#testoLogin").html("Login");
  }
}

//Funzione che permette il caricamento delle informazioni dell'utente nella pagina Profilo
function LoadInformation() {
  if (sessionStorage.getItem("email") == null) {
    $(".desc").html(
      '<h1>Devi accedere per vedere le tue informazioni.<br/><a href="index.html">Torna alla Home</a></h1>'
    );
  } else {
    if (sessionStorage.getItem("admin")) {
      $(".dati").html(
        '<p class="Nome">Nome: </p><p class="Cognome">Cognome: </p><p class="Email">Email: </p>'
      );
      $(".Nome").append(sessionStorage.getItem("nome"));
      $(".Cognome").append(sessionStorage.getItem("cognome"));
      $(".Email").append(sessionStorage.getItem("email"));
      $(".dati").append(
        '<p class="idAdmin">ID Admin: ' +
          sessionStorage.getItem("idAdmin") +
          " </p>"
      );
    } else {
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
    }
    InfoNoleggi();
  }
}

//Funzione che permette il recupero delle informazioni sui noleggi dal database
function InfoNoleggi() {
  var codDocumento = sessionStorage.getItem("codDocumento");
  var funzione = 8;
  $.ajax({
    url: "../BackEnd/querys_db.php",
    method: "POST",
    data: {
      funzione,
      codDocumento,
    },
    success: function (data) {
      document.getElementById("Tabella_Noleggi").innerHTML = data;
      //alert(data);
    },
    error: function (xhr, ajaxOptions, thrownError, data) {
      alert("Errore nel server:", thrownError, data);
    },
  });
  // }
}
