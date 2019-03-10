let cols,rows;
let scl = 20;
let w = 2500;
let h = 2000;
let flying = 0;
let terrain = [];

function setup(){
  createCanvas(600, 600);
  cols = w / scl;
  rows = h/ scl;
  terrain = [cols][rows];
}

function draw(){
  flying -= 0.05;
  let yoff = flying;
  for (let y = 0; y < rows; y++){
    let xoff = 0;
    for (let x = 0; x < cols; x ++){
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -70, 70);
      xoff += 0.1;
    }
    yoff += 0.1;
  }
  
  background(0);
  stroke(255);
  noFill();
  translate(width/2,height/2 +50);
  rotateX(PI/2.5);
  translate(-w/2, -h/2);
  
    for (let y = 0; y < rows -1; y++){
      	beginShape(TRIANGLE_STRIP);
      	for (let x = 0; x < cols; x ++){
        vertex(x*scl, y*scl, terrain[x][y]);
        vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
        //rect(x*scl, y*scl, scl, scl);
    }
    endShape();
  	}
}
