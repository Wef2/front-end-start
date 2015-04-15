var divBox = document.getElementById("divBox");
var x = 1;


function moveBox(){
	x = x + 1;
	divBox.style.left = x + "px";
}

window.setInterval(moveBox, 1);