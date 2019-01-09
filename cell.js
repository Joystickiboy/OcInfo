function Cell(pos, r, c){
    
    if (pos) {
        this.pos = pos.copy();
    } else {
        this.pos = createVector(random(150,650), random(150,650));
    }

	// this.pos = pos.copy() || createVector(random(width), random(height));
    this.r = r || 80;
    this.c = c || color(random(100,255), 0, random(100, 255));

    this.clicked = function(x, y) {
        var d = dist(this.pos.x, this.pos.y, x, y);
        if (d < this.r) {
            return true;
        } else {
            return false;
        }
    }

    this.mitosis = function (){
        this.pos.x += random(-this.r,this.r);
        var cellA = new Cell(this.pos, this.r*0.8, this.c);
        // var cellB = new Cell(this.pos, this.r/2, this.c);
        return cellA;
    }

	this.move = function() {
        var vel = p5.Vector.random2D();
        this.pos.add(vel);
	}
	this.show = function(){
        noStroke();
        fill(this.c);
        ellipse(this.pos.x, this.pos.y, this.r, this.r)
        fill(0);
        ellipse(this.pos.x, this.pos.y, this.r/4, this.r/4)
	}
}