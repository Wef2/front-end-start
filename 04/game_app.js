var divGame = document.getElementById("divGame");
var divBox = document.getElementById("divBox");
divBox.style.left = Math.floor(Math.random() * 470) + "px";
divBox.style.top = Math.floor(Math.random() * 470) + "px";

var scoreText = document.getElementById("scoreText");
var timeText = document.getElementById("timeText");

var score = 0;
scoreText.innerHTML = "점수 : " + score; 
var remainTime = 60;
timeText.innerHTML = "남은 시간 : " + remainTime; 

function game(){
	divBox.style.left = Math.floor(Math.random() * 470) + "px";
	divBox.style.top = Math.floor(Math.random() * 470) + "px";
	divBox.addEventListener("click",getScore);
	divGame.appendChild(divBox);

	remainTime = remainTime - 1;
	timeText.innerHTML = "남은 시간 : " + remainTime; 

	if(remainTime == 0){
		clearInterval(timer);
	}
}

function getScore(){
	if(remainTime > 0){
	score = score + 1;
	scoreText.innerHTML = "점수 : " + score; 		
	}	
}


var timer = window.setInterval(game, 1000);
