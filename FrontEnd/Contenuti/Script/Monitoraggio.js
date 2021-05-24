// JavaScript Document

//var titolo = document.getElementsByTagName("title")[0].innerHTML;
$(document).ready(function (){
	$("Tirreno").style.display="none";
	$("Ionio").style.display="none";
	$("Adriatico").style.display="none";
	$("Ligure").style.display="none";
})			  

function mostratir(){
	document.getElementById("tirreno").style.display ="block";
	document.getElementById("ionio").style.display ="none";
	document.getElementById("adriatico").style.display ="none";
	document.getElementById("ligure").style.display ="none";	
}
function mostraion(){
	document.getElementById("tirreno").style.display ="none";
	document.getElementById("ionio").style.display ="block";
	document.getElementById("adriatico").style.display ="none";
	document.getElementById("ligure").style.display ="none";
}
function mostraadr(){
	document.getElementById("tirreno").style.display ="none";
	document.getElementById("ionio").style.display ="none";
	document.getElementById("adriatico").style.display ="block";
	document.getElementById("ligure").style.display ="none";
}
function mostralig(){
	document.getElementById("tirreno").style.display ="none";
	document.getElementById("ionio").style.display ="none";
	document.getElementById("adriatico").style.display ="none";
	document.getElementById("ligure").style.display ="block";
}
