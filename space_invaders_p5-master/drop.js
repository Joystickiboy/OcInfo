// WATERDROP OBJECT
function Drop(x, y, v){
    this.x = x;
    this.y = y;
    this.r = 4;
    this.bye = false;
    this.alwaysTrue;

    this.show = function(){
        noStroke();
        fill(50, 0, 200);
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }

    this.hits = function(flower){
        var d = dist(this.x, this.y, flower.x, flower.y);
        if (d < this.r + flower.r){
            return true;
        } else {
            return false;
        }
    }

    this.move = function() {
        this.y = this.y -2;
    }
    
    this.bye = function(){
        this.toDelete = true;
    }
    this.alwaysOn = function(){
        this.alwaysTrue = true;
    }
}