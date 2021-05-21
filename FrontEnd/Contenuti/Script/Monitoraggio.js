// JavaScript Document


function mostratir(){
	alert("ciao");
	window.open("MonitoraggioAmbiente.html", "_self");
	document.getElementById("tirreno").style.display ="block";
	document.getElementById("ionio").style.display ="none";
	document.getElementById("adriatico").style.display ="none";
	document.getElementById("ligure").style.display ="none";	
}
function mostraion(){
	document.getElementById("tirreno").style.visibility ="hidden";
	document.getElementById("ionio").style.visibility ="visible";
	document.getElementById("adriatico").style.visibility ="hidden";
	document.getElementById("ligure").style.visibility ="hidden";
}
function mostraadr(){
	document.getElementById("tirreno").style.visibility ="hidden";
	document.getElementById("ionio").style.visibility ="hidden";
	document.getElementById("adriatico").style.visibility ="visible";
	document.getElementById("ligure").style.visibility ="hidden";
}
function mostralig(){
	document.getElementById("tirreno").style.visibility ="hidden";
	document.getElementById("ionio").style.visibility ="hidden";
	document.getElementById("adriatico").style.visibility ="hidden";
	document.getElementById("ligure").style.visibility ="visible";
}

