$(document).ready(function() {
	
	/* Function playMusic: play the music by the given input key */
	function playMusic (inputKey) {
		const musicId = "music" + inputKey;
		console.log("Id: " + musicId);
		var toPlay = document.getElementById(musicId);
		toPlay.currentTime = 0;
		toPlay.play();
	};

	/* Listener for key pressed. When key is valid, call playMusic */
	document.addEventListener('keyup', function (event) {
		var validKeys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
		var key = event.key;
		key = key.toUpperCase();
		
		if (validKeys.indexOf(key) != -1) {
			/* Call the click-event of the key (button) */
			document.getElementById(key).click();
		};
	});

	/* Listener for button pressed. When button is pressed, call playMusic */
	$('button').click(function() {
		var input = $(this).attr("value");
		playMusic (input);
	});
})