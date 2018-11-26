/* Deklarasjon av variabler for knappene. */
var btnAccessibilityOnOff = document.querySelector(".accessOnOff");
var btnPlayPause = document.querySelector(".playpause");
var btnStop = document.querySelector(".stop");
var btnRestart = document.querySelector(".restart");
var btnSubtitles = document.querySelector(".subtitles");
var btnTranscript = document.querySelector(".transcript");

/* Deklarasjon av variabler for DOM elementene */
var vidAccControls = document.getElementById("videoAccessibilityControls");
var videoPlayer = document.querySelector("video");
var videoControls = document.getElementById("videoControls");
var videoTranscript = document.getElementById("videoTranscript");

/* Sikrer funksjonalitet ved deaktivert Javascript */
videoControls.style.display = "block";
vidAccControls.style.display = "block";
videoPlayer.controls = false;
videoTranscript.style.display = "none";
/*------------------------------------------------*/


btnAccessibilityOnOff.onclick = function() {
  if(videoPlayer.controls == true){
    videoPlayer.controls = false;
    btnAccessibilityOnOff.textContent = "Accessible controls: off"
    videoControls.style.display = "block";

  } else {
    videoPlayer.controls = true;
    btnAccessibilityOnOff.textContent = "Accessible controls: on"
    videoControls.style.display = "none";
  }
}

btnPlayPause.onclick = function() {
  if(videoPlayer.paused) {
    videoPlayer.play();
    btnPlayPause.textContent = "Pause";
  } else {
    videoPlayer.pause();
    btnPlayPause.textContent = "Play";
  }
}
btnStop.onclick = function() {
  videoPlayer.pause();
  btnPlayPause.textContent = "Play";
  videoPlayer.currentTime = 0;
}
btnRestart.onclick = function() {
  videoPlayer.currentTime = 0;
}
btnSubtitles.onclick = function() {
  if(videoPlayer.textTracks[0].mode == "disabled"){
    videoPlayer.textTracks[0].mode = "showing";
    btnSubtitles.textContent = "Turn off subtitles"
  } else {
    videoPlayer.textTracks[0].mode = "disabled";
    btnSubtitles.textContent = "Turn on subtitles"
  }
}
btnTranscript.onclick = function() {
  if(videoTranscript.style.display === "none") {
    videoTranscript.style.display = "block";
    btnTranscript.textContent = "Hide video transcript"
  } else {
    videoTranscript.style.display = "none";
    btnTranscript.textContent = "Show video transcript";
  }
}
