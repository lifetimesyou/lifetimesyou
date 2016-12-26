var audioPlayer = document.getElementById("player")
var isPlaying = false

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

var tweetables = document.getElementsByClassName("tweetable")
var tweetablesLength = tweetables.length

for (var i = 0; i < tweetablesLength; i++) {
	tweetables[i].setAttribute("href", "https://twitter.com/intent/tweet?text=%22" + tweetables[i].innerHTML + "%22 - read full story at&url=" + window.location.href)
	
	var tweetIcon = document.createElement("span")
	tweetIcon.setAttribute("class", "tweet-icon")
	
	var dimmer = document.createElement("span")
	dimmer.setAttribute("class", "dimmer")
	
	tweetables[i].insertBefore(tweetIcon, tweetables[i].childNodes[0])
	tweetables[i].insertBefore(dimmer, tweetables[i].childNodes[0])
}

/* Footer share link setup --------------------------- */

document.getElementById("twitter-share").setAttribute("href", "https://twitter.com/intent/tweet?url=" + window.location.href)
document.getElementById("facebook-share").setAttribute("href", "https://www.facebook.com/sharer.php?u=" + window.location.href)