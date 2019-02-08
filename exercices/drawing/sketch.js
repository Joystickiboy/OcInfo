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
}
function getColour(){
    colour1 = document.getElementById("R").value;
    colour2 = document.getElementById("G").value;
    colour3 = document.getElementById("B").value;
}

let colour1 = 255;
let colour2 = 255;
let colour3 = 255;

let fr = 144;

function setup(){
    frameRate(fr);
    createCanvas(600,600);
    background(255);
}

function draw(){
    if (mouseIsPressed){
        fill(colour1, colour2, colour3);
        noStroke();
        ellipse(mouseX, mouseY, 20, 20);
    }
}