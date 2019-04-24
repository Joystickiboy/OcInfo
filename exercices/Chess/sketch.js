

function setup(){
	createCanvas(600, 600);
	dessinerTerrain();
	pion1 = new Pion(40, 40);
}

function draw(){
	pion1.show();
}

function dessinerTerrain(){
	
	for (let i = 0; i <= 8; i++){
		let k = i;
		for (let j = 0; j <=8; j++){
			if (k%2 == 0){
				fill(125);
			} else{
				fill(255);
			}
			if (j <= 8){
				k++;
			}
			rect(i*75, j*75, 75, 75);
		}
	}
}