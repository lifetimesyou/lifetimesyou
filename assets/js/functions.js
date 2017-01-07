var audioPlayer = document.getElementById("player")
var isPlaying = true

if (getCookie("font_setting") == "uppercase") {
	document.getElementById("font-button").innerHTML = "Switch to Titlecase"
	var titles = document.getElementsByTagName("h1")
	for (var i = 0; i < titles.length; i++) {
	    titles[i].style.textTransform = "uppercase"
		titles[i].style.fontWeight = 100
	}
} else {
	document.getElementById("font-button").innerHTML = "Switch to UPPERCASE"
}

function switchFont() {
	var titles = document.getElementsByTagName("h1")
	
	if (getCookie("font_setting") == "uppercase") {
		document.getElementById("font-button").innerHTML = "Switch to UPPERCASE"
		document.cookie = "font_setting=titlecase; path=/"

		for (var i = 0; i < titles.length; i++) {
		    titles[i].style.textTransform = "none"
		    titles[i].style.fontWeight = 900
		}
		
	} else {
		document.getElementById("font-button").innerHTML = "Switch to Titlecase"
		document.cookie = "font_setting=uppercase; path=/"
		
		for (var i = 0; i < titles.length; i++) {
		    titles[i].style.textTransform = "uppercase"
		    titles[i].style.fontWeight = 100
		}	
	}
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

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