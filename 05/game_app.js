$(document).ready(function(){

	$("#startButton").click(function(){

		var divGame = $("#divGame");
		var divBox = $("#divBox");
		var scoreText = $("#scoreText");
		var timeText = $("#timeText");
		var levelText = $("#levelText");

		$("#startButton").hide();		
		divBox.css("width","30px");
		divBox.css("height","30px");
		divBox.css("top", Math.floor(Math.random() * 470) + "px");
		divBox.css("left", Math.floor(Math.random() * 470) + "px");

		var score = 0;
		var remainTime = 60;
		
		scoreText.html("점수 : " + score); 
		timeText.html("남은 시간 : " + remainTime); 

	    divBox.click(function(){
	    	if(remainTime > 0){
				score = score + 1;
				scoreText.html("점수 : " + score); 		
			}
	    });

	    function game(){
			divBox.css("top", Math.floor(Math.random() * 470) + "px");
			divBox.css("left", Math.floor(Math.random() * 470) + "px");
			remainTime = remainTime - 1;
			timeText.html("남은 시간 : " + remainTime); 
			if(remainTime == 0){
				clearInterval(gameTimer);
				alert("최종 점수 : "+score);
			}
		}

		var gameTimer = window.setInterval(game, 1000);
	});

});

