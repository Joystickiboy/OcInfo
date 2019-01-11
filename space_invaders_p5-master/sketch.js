let ship;
let flowers = [];
let drops = [];
let lost = false;
let btn;

function setup(){
    createCanvas(600, 400);
    resetSketch();
    //drop = new Drop(width/2, height/2);
}

function draw(){
    background(250, 128, 114);
    ship.show();
    ship.move();
    let edge = false;
    for (var i = 0; i < flowers.length; i++){
        flowers[i].show();
        flowers[i].move();

        if (flowers[i].x > width || flowers[i].x < 0) {
            edge = true;
        }

        if (flowers[i].y > height){
            lost = true;
        }
    }
    if (edge) {
        for (var i = 0; i < flowers.length; i++){
            flowers[i].shiftDown();
        }
    }
    
    if (flowers.length == 0){
        btn = createElement("h2", "YOU WIN");
    }

    for (var i = 0; i < drops.length; i++){
        drops[i].show();
        drops[i].move();
        for (var j = 0; j < flowers.length; j++){
            if (drops[i].hits(flowers[j])) {
                flowers[j].bye();
                // console.log("YOHOO");
            }
            if (flowers[j].toDelete){
                flowers.splice(j, 1);
            }
        }
    }
    if (lost){
        flowers.splice(0, flowers.length);
        delete ship.show;
        delete ship.move;
        delete ship.setDir;
        txt = createElement("h1", "YOU LOSE");
        resetSketch();
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
        var drop = new Drop(ship.x, height);
        drops.push(drop);
    }
    if (keyCode == RIGHT_ARROW){
        ship.setDir(1);
    } else if (keyCode == LEFT_ARROW) {
        ship.setDir(-1);
    }
    
}