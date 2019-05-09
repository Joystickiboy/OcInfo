function Pion(x, y){
	this.show = function(){
		ellipseMode(CENTER);
		fill(255, 255, 0);
		ellipse(x, y, 25, 25);
	}
}