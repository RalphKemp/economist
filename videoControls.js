const video = document.getElementById('video');
const playButton = document.getElementById('play-pause');
const muteButton = document.getElementById('mute');
const fullScreenButton = document.getElementById('full-screen');
const seekBar = document.getElementById('seek-bar');
const volumeBar = document.getElementById('volume-bar');

// controls
playButton.addEventListener('click', function() {
  if (video.paused == true) {
    video.play();
    playButton.innerHTML = 'Pause';
  } else {
    video.pause();
    playButton.innerHTML = 'Play';
  }
});

muteButton.addEventListener("click", function() {
  if (video.muted == false) {
    video.muted = true;
    muteButton.innerHTML = "Unmute";
  } else {
    video.muted = false;
    muteButton.innerHTML = "Mute";
  }
});
