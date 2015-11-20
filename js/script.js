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

	$('#instructions').delay(1000).animate({
		top: "18%",
		color: "#fff"
		}, 800
	);
	$('#instructions').delay(3000).animate({
		top: "-100px"
	}, 800);

});

$(".photo-miniature").click(function(){
	var imageCliquee = $(this).find("img").attr("src");
	var imageBig = $(".photo-big").find("img").attr("src");
	var temp = $(this).find("img").attr("src");

	$(this).find("img").attr("src", imageBig);
	$(".photo-big").find("img").attr("src", temp);
});

$("#mentions-legales-link").click(function(){
	$(".mentions-legales").fadeIn();
})

$(".close").click(function(){
	$(".mentions-legales").fadeOut();
})