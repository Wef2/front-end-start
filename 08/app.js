$(document).ready(function(){

	var cards = [1,2,3,4,5,1,2,3,4,5];

	shuffle(cards);
	shuffle(cards);
	console.log(cards);

	var $divBoard = $('.divBoard');
	var $imgCard = $('.imgCard');

	for(i=0; i<10; i++){
		$($imgCard[i]).attr("src","images/basic.jpg");
		$($imgCard[i]).attr("id",i);
		$($imgCard[i]).attr("status", "closed");
	}

	var remainTime = 20;
	var $timeP = $('#time');
	$timeP.text("남은 시간 : "+remainTime);

	var score = 0;
	var $scoreP = $('#score');

	var correct = 0;
	var clickCount = 0;
	var firstCard; 
	var secondCard;
	var gameStatus = "unfinished";

	$(".imgCard").click(function(){
		if($(this).attr("status") === "closed" && gameStatus == "unfinished"){
		console.log(this);
		$(this).attr("src", "images/"+cards[this.id]+".jpg");
		$(this).attr("status", "opened");
		clickCount++;	
		console.log("Click : "+clickCount);

		if(clickCount==1){
			firstCard = this;
			console.log("First Card : "+firstCard);
		}

		else if(clickCount==2){
			secondCard = this;			
			console.log("Second Card : "+secondCard);
			if(firstCard.src == secondCard.src){
				$(firstCard).attr("status","clear");
				$(secondCard).attr("status","clear");
				console.log("correct");
				score = score + 3;
				correct = correct + 1;
				$scoreP.text("점수 : "+score);
				if(correct == 5){
					score = score + remainTime;
					$scoreP.text("점수 : "+score);
					alert("성공! 점수 : "+score);
					gameStatus = "finished";
					clearInterval(interval);
				}
			}
			else{
				score = score - 1;
				$scoreP.text("점수 : "+score);
				$(firstCard).fadeOut(400);
				$(secondCard).fadeOut(400);
				$(firstCard).fadeIn(50);
				$(secondCard).fadeIn(50);
				$(firstCard).attr("status","closed");
				$(secondCard).attr("status","closed");
				setTimeout(function(){
					$(firstCard).attr("src","images/basic.jpg");
					$(secondCard).attr("src","images/basic.jpg");
				 }, 400);;
			}
			clickCount = 0;
			}
		}
		else if(gameStatus == "finished"){
			alert("게임은 종료되었습니다. 새로 시작하려면 새로 고침 해주세요.")
		}

		else{
			alert("다른 카드를 선택하세요!");
		}

	});

	var interval = setInterval(function(){ timer() }, 1000);

	function timer() {
		if(remainTime>0){
			remainTime = remainTime - 1;
			$timeP.text("남은 시간 : "+remainTime);
		}
		else if(remainTime == 0){
			clearInterval(interval);
			gameStatus = "finished";
			$scoreP.text("점수 : "+score);
		}
	}

});


