var audioPlayer = document.getElementById("player")
var isPlaying = true

var playButton = document.getElementById("play-button")
var pauseButton = document.getElementById("pause-button")

audioPlayer.addEventListener("playing", togglePlayIcon)

function switchPlayback() {
	if (isPlaying) {
		audioPlayer.pause()
		isPlaying = false
		togglePlayIcon()

	} else {
		audioPlayer.play()
		isPlaying = true
		togglePlayIcon()
	}
}

function togglePlayIcon() {
	if (isPlaying) {
		playButton.style.display = "none"
		pauseButton.style.display = "block"
	} else {
		playButton.style.display = "block"
		pauseButton.style.display = "none"
	}
}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-79560925-1', 'auto');
ga('send', 'pageview');