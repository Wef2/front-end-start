$(document).ready(function(){

	var imgUp = $("#imgUp");
	var body = $("body");

	$(window).scroll(function() {

	    var posY = body.scrollTop();

	    if (posY > 200) {
	    	imgUp.css("width","200px");
	    	imgUp.css("height","200px");
	      	imgUp.show();
	    }
	    else {
	      	imgUp.hide();
	    }
	});


	imgUp.click(function(){
	   	 body.animate({scrollTop: 0});
	});

});
