//elementi per popUp login/Registrazione
var log = document.getElementById("logincon");
var reg = document.getElementById("registrazione");
var spanLog = document.getElementsByClassName("close")[0];
var spanReg = document.getElementsByClassName("close")[1];


//Mostra login
function MostraLogin() {
  log.style.display = "block";
  reg.style.display = "none";
};
//mostra registrazione
function MostraRegistrazione() {
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

$(document).ready(function () {
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
