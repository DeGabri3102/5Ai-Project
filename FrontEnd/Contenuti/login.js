//elementi per popUp login/Registrazione
var log = document.getElementById("logincon");
var reg = document.getElementById("registrazione");
var spanLog = document.getElementsByClassName("close")[0];
var spanReg = document.getElementsByClassName("close")[1];

//Mostra login
function Login() {
  log.style.display = "block";
  reg.style.display = "none";
};
//mostra registrazione
function Registrazione() {
  reg.style.display = "block";
  log.style.display = "none";
};
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
