function toggleNavPanel(x){
	let panel = document.getElementById(x);
	let navarrow = document.getElementById("navarrow");
	let maxH="135px";
	
	if(panel.style.height == maxH){
		panel.style.height = "0px";
		navarrow.innerHTML = "&#9662;";
	} else {
		panel.style.height = maxH;
		navarrow.innerHTML = "&#9652;";
	}
}