const video = document.getElementById('video');
const playButton = document.getElementById('play-pause');
const muteButton = document.getElementById('mute');
const fullScreenButton = document.getElementById('full-screen');
const seekBar = document.getElementById('seek-bar');
const volumeBar = document.getElementById('volume-bar');
const vidClickContainer = document.querySelector('.vid-click-container');
const pauseButton = document.getElementById('pause-button');

// function setHover(elem, button) {
//   elem.addEventListener('mousemove', () => {
//     button.style.display = 'block';
//   });
//   elem.addEventListener('mouseout', () => {
//     button.style.display = 'none';
//   });
// }

pauseButton.style.display = 'none';
playButton.style.opacity = 0;

// initial fade in
TweenMax.to('#video, #play-pause', 1.5, { opacity: 0.8 });
// controls
vidClickContainer.addEventListener('click', function() {
  // playButton.style.display = "none";
  if (video.paused == true) {
    video.play();
    playButton.style.display = 'none';
    // pauseButton.style.opacity = 'none';
    // setHover(vidClickContainer, pauseButton);
  } else {
    video.pause();
    // pauseButton.style.display = 'none';
    playButton.style.display = 'block';
  }
});

muteButton.addEventListener('click', function() {
  if (video.muted == false) {
    video.muted = true;
    muteButton.innerHTML = 'Unmute';
  } else {
    video.muted = false;
    muteButton.innerHTML = 'Mute';
  }
});
