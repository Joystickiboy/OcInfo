let r = 20;

function setBlue(){
	colour1 = 0;
	colour2 = 0;
	colour3 = 255;
}
function setRed(){
	colour1 = 255;
	colour2 = 0;
	colour3 = 0;
}
function setWhite(){
	colour1 = 255;
	colour2 = 255;
	colour3 = 255;
	r = 50;
}
function getColour(){
	colour1 = document.getElementById("R").value;
	colour2 = document.getElementById("G").value;
	colour3 = document.getElementById("B").value;
}
function getWidth(){
	r = document.getElementById("Width").value;
}

let colour1 = 0;
let colour2 = 0;
let colour3 = 0;

let fr = 60;

function setup(){
	frameRate(fr);
	createCanvas(600,600);
	background(255);
}

function draw(){
	if (mouseIsPressed){
		makeDraw();
	}
}

function makeDraw(){
	console.log(r);
	noStroke();
	rectMode(CENTER);
	fill(colour1, colour2, colour3);
	rect(mouseX, mouseY, r, r);
}