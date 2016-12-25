var audioPlayer = document.getElementById("player")

var playingEventWasCalled = false
audioPlayer.addEventListener("playing", boom)

var volumeVariable = 0.5
audioPlayer.volume = volumeVariable

var isPlaying = false

function boom() {
	if (playingEventWasCalled == false) {
	
		isPlaying = true
		togglePlayIcon()
		
		playingEventWasCalled = true
		
		if (audioPlayer.volume != 1) {
		
			var myInterval = setInterval( function() {
				
				volumeVariable = volumeVariable + 0.01
				audioPlayer.volume = volumeVariable
				console.log(audioPlayer.volume)
			
				if (audioPlayer.volume > 0.99) {
					clearInterval(myInterval)
				}
				
			}, 100)
			
		}
	
	} else {
		return
	}
}

function switchPlayback() {
	if (isPlaying) {
		document.getElementById("player").pause()
		isPlaying = false
		togglePlayIcon()

	} else {
		document.getElementById("player").play()
		isPlaying = true
		togglePlayIcon()
	}
}

function togglePlayIcon() {
	if (isPlaying) {
		document.getElementById("play").style.opacity = 0
		document.getElementById("pause").style.opacity = 1
	} else {
		document.getElementById("play").style.opacity = 1
		document.getElementById("pause").style.opacity = 0
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