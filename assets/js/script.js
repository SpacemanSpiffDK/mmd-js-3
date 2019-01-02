// JS by Dan Høegh
// UCN MMD 2018

// function for putting stuff on the TV
function onTV(txt) {
	var elm = document.querySelector('#output');
	elm.innerHTML = elm.innerHTML + txt + ' ';
}

// function for clearing the TV
function clearTV() {
	var elm = document.querySelector('#output');
	elm.innerHTML = "";
}

// what happens when we write a new function with the same name?
function clearTV() {
	alert('This doesn\'t work!');
}


function submitMyForm(){
	var n1 = document.querySelector('#no1').value;
	var n2 = document.querySelector('#no2').value;

	
	onTV('n1');		// Ups! this returns a text string with the value "no1"
	onTV(n1);		// This is the shizzle! 
	onTV(n1 + n2); 	// nope, nope, nope 

	n1 = parseInt(n1);	// parse as integer (what is an integer?)
	n2 = parseInt(n2);

	onTV(n1 + n2); 	
	onTV(n1 - n2);	
	onTV(n1 * n2);	
	onTV(n1 / n2);	
}

function countUp(){
	for (var i=1; i<11; i++) {
		onTV(i);
	}
}

function countDown(){
	for (var i=10; i>0; i--) {
		onTV(i);
	}
}

function squared(){
	var a = 0;
	for (var i=0; i<8; i++) {
		a = Math.pow(i, 2);
		onTV(a);
	}
}

function exponential(){
	var a = 0;
	for (var i=0; i<8; i++) {
		a = Math.pow(2, i);
		onTV(a);
	}
}

function fibonacci(){
	var a = 0;
	var b = 1;
	var c;
	for (var i=0; i<80; i++) {
		c = a + b;
		onTV(c);
		a = b;
		b = c;
	}	
}
