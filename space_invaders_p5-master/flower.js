function Flower(x, y){
    this.x = x;
    this.y = y;
    this.r = 15;
    this.xdir = 1.5;
    this.toDelete = false;

    this.show = function(){
        noStroke();
        fill(255, 0, 200);
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }

    this.shiftDown = function(){
        this.xdir *= -1;
        this.y += this.r*2.5;
    }

    this.move = function(){
        this.x = this.x + this.xdir;
    }

    this.bye = function(){
        this.toDelete = true;
    }
}