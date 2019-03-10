function Ship(){
    this.x = width/2;
    this.y = height;
    this.xdir = 0;

    this.show = function(){
        fill(255);
        triangle(this.x-20, this.y, this.x+20, this.y, this.x, this.y-25);
    }

    this.setDir = function(dir){
        this.xdir = dir;
    }

    this.move = function(dir) {
        this.x += this.xdir *8;
    }
}