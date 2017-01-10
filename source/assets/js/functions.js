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