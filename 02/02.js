
var board = document.getElementById("board");

board.style.width = "500px";
board.style.height = "500px";
board.style.border = "10px solid #DDDDDD";

for(var i=0; i<4; i++){
	for(var j=0; j<4; j++){
		var newSpan = document.createElement("span");
		newSpan.style.width = "125px";
		newSpan.style.height = "125px";
		newSpan.style.float = "left";
		newSpan.addEventListener("click", changeColor);
		if((i+j)%2==1){
			newSpan.setAttribute("class","white");
		}            
		else if((i+j)%2==0){
			newSpan.setAttribute("class","black");
		}
		board.appendChild(newSpan);
	}
}

var allWhiteClass = document.querySelectorAll(".white");
var allBlackClass = document.querySelectorAll(".black");

for(i=0; i<allBlackClass.length; i++){
	allBlackClass[i].style.backgroundColor = "black";
}

function changeColor(){
	for(i=0; i<allWhiteClass.length; i++){
		allWhiteClass[i].style.backgroundColor = "white";
	}
	for(i=0; i<allBlackClass.length; i++){
		allBlackClass[i].style.backgroundColor = "black";
	}
	this.style.backgroundColor = "red";
}