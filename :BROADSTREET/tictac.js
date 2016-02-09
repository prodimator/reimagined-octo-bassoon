
function init(){
	

	var isBlurred = false;
	var blurredVal = 0;

	$(document).click(function() {
		$( ".content" ).fadeToggle( 3500, function() {
    // Animation complete
  		});
		/*if (isBlurred == false){
			$('.content').animate({
	   			fontSize : "80px"
   			}, 3500)
		}
		else{
			$('.content').animate({
				fontSize : "0px"
			}, 3500)
		}*/
   		
	});	


	$(document).click(function(){
		//blur the background
		if (isBlurred == false){
			isBlurred = true;
			$({blurRadius: blurredVal}).animate({blurRadius: blurredVal + 7}, {
		        duration: 3500,
		        step: function() {
		            $('.background').css({
		                "-webkit-filter": "blur("+this.blurRadius+"px)",
		                "filter": "blur("+this.blurRadius+"px)"
		            });
		            $('.content').css({
		            	//fontSize : "60px"
		            });
		        blurredVal = this.blurRadius;
		        }
		    });
		}
		else{
			isBlurred = false;
			$({blurRadius: blurredVal}).animate({blurRadius:blurredVal - 7}, {
		        duration: 3500,
		        step: function() {
		            $('.background').css({
		                "-webkit-filter": "blur("+this.blurRadius+"px)",
		                "filter": "blur("+this.blurRadius+"px)"
		            });
		        blurredVal = this.blurRadius;
		        }
		    });
		}
	    
	});



}
onload=init;