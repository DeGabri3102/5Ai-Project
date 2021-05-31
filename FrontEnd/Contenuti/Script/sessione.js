//elementi del popUp login/Registrazione
var log;
var reg;
var spanLog;
var spanReg;

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
  //elementi del popUp login/Registrazione
  log = document.getElementById("logincon");
  reg = document.getElementById("registrazione");
  spanLog = document.getElementsByClassName("close")[0];
  spanReg = document.getElementsByClassName("close")[1];

  if (log != null && reg != null) {
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
  }
});

//Permette di controllare se una sessione è aperta
function checkSessione() {
  if (sessionStorage.getItem("email") != null) {
    $("#loginNav").html(
      '<a class="Avatar" href="Profilo.html" class="dropbtn"><img src="Contenuti/avatar.png"></a><div class="dropdown-content"><a style="cursor:pointer;text-align:justify;padding-left: 1.7vw" onClick="LogOut()">Esci</a></div>'
    );
    if (log != null && reg != null) {
      log.style.display = "none";
      reg.style.display = "none";
    }
  } else {
    $("#formAccesso").html(
      '<!--popup per il login--> <div id="logincon" class="logcont"> <div class="log"> <span class="close">&times;</span> <h1>Accedi</h1> <!--Inserimento email utente--> <label for="emailUtente" class="loglab">Email utente</label><br /> <input type="text" id="emailUtente" class="Inslog" placeholder="Inserisci email utente" /><br /> <!--Inserimento password utente--> <div> <label for="passwordUtente" class="loglab">Password utente</label><br /> <input type="password" id="passwordUtente" class="Inslog" placeholder="Inserisci password" /> <i class="far fa-eye show-password-toggle icon-eye-close icon-align-confirm"></i> </div><br /><br /> <button id="confermaLog" class="Inslog" onclick="LogIn()">Accedi</button><br /> <a href="#" onclick="MostraRegistrazione()">Non hai un account? Creane uno subito!</a> </div> </div> <!--popUp per la registrazione--> <div id="registrazione" class="logcont"> <div class="log"> <span class="close">&times;</span> <h1>Registrati</h1> <div style="display: flex;"> <div> <!--Inserimento nome utente--> <label for="nomeUtente" class="loglab">Nome</label><br /> <input type="text" id="NomeUtente" class="Inslog" placeholder="Inserisci nome" /><br /> <!--Inserimento cognome utente--> <label for="cognomeUtente" class="loglab">Cognome</label><br /> <input type="text" id="CognomeUtente" class="Inslog" placeholder="Inserisci cognome" /><br /> <!--Inserimento tipoDocumento utente--> <label for="tipoDocumento" class="loglab">Tipo Documento</label><br /> <select name="Tipo Documento" id="tipoDocumento" class="Inslog"> <option value="Patente nautica">Patente nautica</option> <option value="Passaporto">Passaporto</option> <option value="Carta d identità">Carta d\'identità</option> </select><br /> <!--Inserimento codDocumento utente--> <label for="codDocumento" class="loglab">Codice Documento</label><br /> <input type="text" id="codDocumento" class="Inslog" placeholder="Codice Documento" /><br /> <!--Inserimento nascita utente--> <label for="nascita" class="loglab">Data di Nascita</label><br /> <input type="date" id="nascita" class="Inslog" placeholder="Data di Nascita" /><br /> <!--Inserimento nTel utente--> <label for="nTel" class="loglab">Numero di telefono</label><br /> <input type="text" id="nTel" class="Inslog" placeholder="Numero di telefono" /><br /> </div> <div style="margin-left: 15px;"> <!--Inserimento indirizzo utente--> <label for="indirizzo" class="loglab">Indirizzo</label><br /> <input type="text" id="indirizzo" class="Inslog" placeholder="Inserisci indirizzo" /><br /> <!--Inserimento numeroCivico utente--> <label for="numeroCivico" class="loglab">Numero civico</label><br /> <input type="text" id="numeroCivico" class="Inslog" placeholder="N°" /><br /> <!--Inserimento email utente--> <label for="emailUtenteReg" class="loglab">Email</label><br /> <input type="text" id="emailUtenteReg" class="Inslog" placeholder="Inserisci email" /><br /> <!--Inserimento password utente--> <div> <label for="passwordUtenteReg" class="loglab">Password</label><br /> <input type="password" id="passwordUtenteReg" class="Inslog" placeholder="Inserisci password" /> <i class="far fa-eye show-password-toggle icon-eye-close icon-align-confirm"></i> </div> <!--Reinserimento password utente--> <div> <label for="checkPUtente" class="loglab">Conferma password</label><br /> <input type="password" id="checkPUtente" class="Inslog" placeholder="Reinserisci password" /> <i class="far fa-eye show-password-toggle icon-eye-close icon-align-confirm"></i> </div> <br /> </div> </div><br /> <button id="ConfermaLog" class="Inslog" onclick="LogOn()">Crea</button><br /> <a href="#" onclick="MostraLogin()">Hai un account? Accedi subito!</a> </div> </div>'
    );
  }
}

//Mostra modulo per l'accesso
function MostraLogin() {
  log.style.display = "block";
  reg.style.display = "none";
}

//Mostra modulo per la registrazione
function MostraRegistrazione() {
  reg.style.display = "block";
  log.style.display = "none";
}

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

        location.reload();
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
        if (data == "0" && email.split("@")[1] != "bhor.it") {
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

          location.reload();
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
    location.reload();
  }
}

//Funzione che permette il caricamento delle informazioni dell'utente nella pagina Profilo
function LoadInformation() {
  if (sessionStorage.getItem("email") == null) {
    $(".desc").html(
      '<h1>Devi accedere per vedere le tue informazioni.<br/><a href="#" onclick="MostraLogin()">Login</a></h1>'
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
