let ship;
let flowers = [];
let drops = [];
let lost = false;
let btn;
perdu.playMode('restart');

function preload(){
	soundFormats('wav', 'm4a');
	mySound = loadSound("pchiou.m4a");
	boom = loadSound("boom.m4a");
	victoire = loadSound("victoire.m4a");
	perdu = loadSound("perdu.m4a");
}

function setup(){
    createCanvas(600, 400);
	resetSketch();
	//mySound.setVolume(0.2);
    //drop = new Drop(width/2, height/2);
}

function draw(){
    background(250, 128, 114);
    ship.show();
	ship.move();
    let edge = false;
    for (var i = drops.length-1; i >= 0; i--) {
        drops[i].alwaysTrue;
    }
    for (var i = 0; i < flowers.length; i++){
        flowers[i].show();
        flowers[i].move();

        if ((flowers[i].x + flowers[i].r) > width || (flowers[i].x - flowers[i].r)< 0) {
            edge = true;
        }

        if ((flowers[i].y + flowers[i].r) > height){
            lost = true;
        }
    }
    if (edge) {
        for (var i = 0; i < flowers.length; i++){
            flowers[i].shiftDown();
        }
    }

    for (var i = drops.length-1; i >= 0; i--){
        drops[i].show();
        drops[i].move();
        for (var j = 0; j < flowers.length; j++){
            if (drops[i].hits(flowers[j])) {
                flowers[j].bye();
                drops[i].bye();
            }
        
            if (flowers[j].toDelete){
				flowers.splice(j, 1);
				boom.play();
				if (flowers.length == 0){
					victoire.play();
					btn = createElement("h2", "YOU WIN");
				}
            }
        }
    }
    if (ship.x > width){
        ship.x = width;
    } else if (ship.x < 0){
        ship.x = 0;
    }
    
    for (var i = 0; i < drops.length; i++){
        if (drops[i].toDelete){
            drops.splice(i, 1);
        }
	}

    if (lost){
        flowers.splice(0, flowers.length);
        delete ship.show;
        delete ship.move;
		delete ship.setDir;
		perdu.play();
		perdu = 0;
		txt = createElement("h1", "YOU LOSE");
        resetSketch();
	}
	
	for (let i = 0; i < drops.length; i++){
		if (drops[i].y < 0){
			drops.splice(i, 1);
		}
	}
}

function resetSketch(){
    ship = new Ship();
    for (var i = 0; i < 6; i++){
        flowers[i] = new Flower(i*80 + 60, 20);
    }
}

function keyReleased() {
    if (key != " "){
        ship.setDir(0);
    }
}

function keyPressed(){
    if (key === ' '){
        var drop = new Drop(ship.x, height-26);
		drops.push(drop);
		mySound.play();
    }
    if (keyCode == RIGHT_ARROW){
        ship.setDir(1);
    }
    if (keyCode == LEFT_ARROW) {
        ship.setDir(-1);
    }
    
}