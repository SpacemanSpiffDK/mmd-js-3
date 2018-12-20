// JS by Dan Høegh
// UCN MMD 2018



function submitMyForm(){
	var n1 = document.querySelector('#no1').value;
	var n2 = document.querySelector('#no2').value;

	
	onTV('n1');	// Ups! this returns a text string with the value "no1"
	onTV(n1);				// This is the shizzle! 
	onTV(n1 + n2); 	// nope, nope, nope 

	n1 = parseInt(n1);	// parse as integer (what is an integer?)
	n2 = parseInt(n2);

	onTV(n1 + n2); 	
	onTV(n1 - n2);	
	onTV(n1 * n2);	
	onTV(n1 / n2);	
}


function onTV(txt) {
	var elm = document.querySelector('#output');
	elm.innerHTML = txt + '<br>' + elm.innerHTML;
}

function clearTV() {
	var elm = document.querySelector('#output');
	elm.innerHTML = "";
}
