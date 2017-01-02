var audioPlayer = document.getElementById("player")
var isPlaying = true

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
		document.getElementById("play-button").style.display = "none"
		document.getElementById("pause-button").style.display = "block"
	} else {
		document.getElementById("play-button").style.display = "block"
		document.getElementById("pause-button").style.display = "none"
	}
}