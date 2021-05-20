// JavaScript Document
var Tirreno = document.getElementById("tirreno");
var Ionio = document.getElementById("ionio");
var Adriatico= document.getElementById("adriatico");
var Ligure = document.getElementById("ligure");

function mostratir(){
	window.location("MonitoraggioAmbiente.html#Tirreno");
	Tirreno.style.display ="block";
	Ionio.style.display ="none";
	Adriatico.style.display ="none";
	Ligure.style.display ="none";
}
function mostraion(){
	window.location("MonitoraggioAmbiente.html#Ionio");
	Tirreno.style.display ="none";
	Ionio.style.display ="block";
	Adriatico.style.display ="none";
	Ligure.style.display ="none";
}
function mostraadr(){
	window.location("MonitoraggioAmbiente.html#Adriatico");
	Tirreno.style.display ="none";
	Ionio.style.display ="none";
	Adriatico.style.display ="block";
	Ligure.style.display ="none";
}
function mostralig(){
	window.location("MonitoraggioAmbiente.html#Ligure");
	Tirreno.style.display ="none";
	Ionio.style.display ="none";
	Adriatico.style.display ="none";
	Ligure.style.display ="block";
}

