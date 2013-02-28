;(function() {
	// append the konamiSoundBite span
	konamiSpan = document.createElement('span')
	konamiSpan.id = 'konamiSoundBite'
	document.body.appendChild(konamiSpan);

	// load the soundbite to class="play"
	var clip = document.createElement('audio');
	clip.src = "http://api.soundcloud.com/tracks/59839123/stream?client_id=72325d0b84c6a7f4bbef4dd86c0a5309";

	document.getElementById('konamiSoundBite').addEventListener("click", function () {
		clip.play() }, false
	);

	// check to make sure that the browser can handle window.addEventListener
	if (window.addEventListener) {
		// create the keys and konami variables
		var keys = [],
		konamiString = "83,84,69,65,75,77,79,78,69,89"

		// bind the keydown event
		window.addEventListener("keydown", function(e) {
			// push the keycode to the 'keys' array
			keys.push(e.keyCode);

			// and check to see if the user has entered the desired code
			if (keys.toString().indexOf(konamiString) >= 0) {
				document.getElementById('konamiSoundBite').click();

				// and finally clean up the keys array
				keys = [];
			};
		}, true);
	};
})()
