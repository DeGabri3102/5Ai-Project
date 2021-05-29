// JavaScript Document


// $(document).ready(function (){
// 	$("Tirreno").style.display="none";
// 	$("Ionio").style.display="none";
// 	$("Adriatico").style.display="none";
// 	$("Ligure").style.display="none";
// })
function scegliMare(mare)
{
	sessionStorage.setItem("mare",mare);
}


function Mostra ()
{
	switch (sessionStorage.mare){
		case "1" :tir();break;
		case "2" :ion();break;
		case "3" :adr();break;
		case "4" :lig();break;
	}
}
function tir(){
	document.getElementById("tirreno").style.display ="block";
	document.getElementById("ionio").style.display ="none";
	document.getElementById("adriatico").style.display ="none";
	document.getElementById("ligure").style.display ="none";	
	VisualizzaMonitoraggi(1)
}
function ion(){
	document.getElementById("tirreno").style.display ="none";
	document.getElementById("ionio").style.display ="block";
	document.getElementById("adriatico").style.display ="none";
	document.getElementById("ligure").style.display ="none";
	VisualizzaMonitoraggi(2)
}
function adr(){
	document.getElementById("tirreno").style.display ="none";
	document.getElementById("ionio").style.display ="none";
	document.getElementById("adriatico").style.display ="block";
	document.getElementById("ligure").style.display ="none";
	VisualizzaMonitoraggi(3)
}
function lig(){
	document.getElementById("tirreno").style.display ="none";
	document.getElementById("ionio").style.display ="none";
	document.getElementById("adriatico").style.display ="none";
	document.getElementById("ligure").style.display ="block";
	VisualizzaMonitoraggi(4)
}


function VisualizzaMonitoraggi(zona) {
	var funzione = 9;
	$.ajax({
		url: "../BackEnd/insert.php",
		method: "POST",
		data: {
			zona,
			funzione
		},
		success: function (data) {
		
		  $(".tabMonitoraggi").html(data); //inserire i dati calcolati dentro insert.php dentro il div barche nella pagina noleggio
		  //alert(data);
		},
	  });
}