$(function() {
	var containmentLeft = $(".video-container").position().left;
		var containmentRight = $(".video-container").position().left + $(".video-container").width();
	 	$( "#btn-drag" ).draggable({ 
		    axis: "x",
		    containment: [containmentLeft, 0 , containmentRight, 0],
		    drag: function(){
		    	coordinate("#btn-drag")
		    },
			stop: function(){
				coordinate("#btn-drag")
			},
		});

	$(window).on('resize', function(){
		var containmentLeft = $(".video-container").position().left;
		var containmentRight = $(".video-container").position().left + $(".video-container").width();
		coordinate("#btn-drag");
	 	$( "#btn-drag" ).draggable({ 
		    axis: "x",
		    containment: [containmentLeft, 0 , containmentRight, 0],
		    drag: function(){
		    	coordinate("#btn-drag")
		    },
			stop: function(){
				coordinate("#btn-drag")
			}
		});
	})

	function coordinate(element) {
	    element = $(element);
	    var left = element.position().left;
	    var right = ($(".video-container").width() - left);
	    var firstVideo = $(".video-wrapper").first();
	    var secondVideo = $(".video-wrapper").last();
	    firstVideo.width(Math.ceil(left));
	    secondVideo.width(Math.ceil(right));
	}

	/*$( "#btn-drag" ).delay(3000).animate({left: 0}, 4000);*/

	$('#instructions').delay(1000).animate({
		top: "18%",
		color: "#fff"
		}, 1800
	);
	/*$('#instructions').delay(3000).animate({
		top: "-100px"
	}, 1800);
	/*
	this.resized = function(h){
	moduleH = h;
	//Set video size
	videoW = BeoGlobal.sw;
	videoH = videoW / (16/9);
	if(!BeoGlobal.isTouch){
		if(_videoH < BeoGlobal.reliableSh){
			videoH = BeoGlobal.reliableSh;
			videoW = videoH * 16/9;
		}
	}

	videoA.style.width = videoB.style.width = _videoW + "px";
	videoA.style.height = videoB.style.height = _videoH + "px";
	//Set video wrappers size
	videoWrapA.style.height = _videoWrapB.style.height = Math.min(BeoGlobal.reliableSh, videoH) + "px";
	videoWrapB.style.width = BeoGlobal.sw + "px";
	if(BeoGlobal.isTouch) 
		videoWrapA.style.width = BeoGlobal.sw + "px";
	if(BeoGlobal.isTouch) 
		me.style.height = "auto";
	else
		me.style.height = BeoGlobal._reliableSh + "px";
	}
	*/
});