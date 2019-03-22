"use strict";

let nbPerte = 0;
let nbGagne = 0;

function setLettre(i){
	let x = $$(i);
	x.innerHTML += tdNomChoisi[i];
	tdNomChoisi[i] = "!";
}

function addPerte(){
	console.log(nbPerte);
	nbPerte++;
	if (nbPerte == 8){
		let footer = $$("footer");
		footer.innerHTML = "<p>VOUS AVEZ PERDU HAHAHAHA</p>";
	}
}

function $$(x){
	return document.getElementById(x);
}

let s = noms.length;

let r = Math.floor(Math.random()* s) + 1;

let textEdit = $$("textEdit");


let nomChoisi = noms[r];
console.log(nomChoisi);

for (let i = 0; i<nomChoisi.length; i++){
	textEdit.innerHTML += "<div class='td' id='"+i+"'></div>";
}

let tdNomChoisi = nomChoisi.split('');

function btnClicked(x){
	for (let i = 0; i< tdNomChoisi.length; i++){
		if (x == tdNomChoisi[i]){
			setLettre(i);
			nbGagne++;
			break;
		} else {
			null;
		}
	}
	if (nbGagne == tdNomChoisi.length){
		let footer = $$("footer");
		footer.innerHTML = "Vous avez GAGNÉ !!!";
	}
	addPerte();
}