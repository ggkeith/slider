sliderInt = 1;
sliderNext = 2;

$(document).ready(function() {
	$('#slider > img#1').fadeIn(300);
	startSlider();
});

//Function to start the photo slider
function startSlider() {
	count = $("#slider > img").size();

	loop = setInterval(function() {
		if (sliderNext > count) {
			sliderNext = 1;
			sliderInt = 1;
		}

		$('#slider > img').fadeOut(300);
		$('#slider > img#' + sliderNext).fadeIn(300);

		sliderInt = sliderNext;
		sliderNext = sliderNext + 1;

	}, 3000)

}

//Previous button functionality
function prev() {
	newSLide = sliderInt - 1;
	showSlide(newSlide);
}

//Next button functionality
function next() {
	newSlide = sliderInt +1;
	showSlide(newSlide);
}

//function to stop the photo loop
function stopLoop() {
	window.clearInterval(loop);

}

function showSlide(id) {
	if (id > count) {
			id = 1;
		}else if(id < 1) {
			id = count;
		}

		$('#slider > img').fadeOut(300);
		$('#slider > img#' + sliderNext).fadeIn(300);

		sliderInt = id;
		sliderNext = id + 1;
		startSlider();

}

//stops slideshow when mouse hovers over photo
$('#slider > img').hover(
	function() {
		stopLoop();
	},
	function() {
		startSlider();
	}
);