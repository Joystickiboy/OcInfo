"use strict";

let nbPerte = 0;
let nbGagne = 0;
let limitePerte = 8;
let wtf = true;

function setLettre(i){
	let x = $$(i);
	x.innerHTML += tdNomChoisi[i];
	tdNomChoisi[i] = "!";
}

function addPerte(){
	if (wtf){
		console.log(nbPerte);
		nbPerte++;
		let nb = $$("nb");
		nb.innerHTML = nbPerte;
		if (nbPerte == limitePerte){
			let footer = $$("footer");
			footer.innerHTML = "<p>VOUS AVEZ PERDU HAHAHAHA</p>";
		}
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

let max = $$("max");
max.innerHTML = limitePerte;

function btnClicked(x){
	for (let i = 0; i< tdNomChoisi.length; i++){
		if (x == tdNomChoisi[i]){
			setLettre(i);
			wtf = false;
			nbGagne++;
			break;
		}
	}
	addPerte();
	if (nbGagne == tdNomChoisi.length){
		let footer = $$("footer");
		footer.innerHTML = "Vous avez GAGNÉ !!!";
	}
	wtf = true;
}