const video = document.getElementById('video');
const playButton = document.getElementById('play-pause');
const muteButton = document.getElementById('mute');
const fullScreenButton = document.getElementById('full-screen');
const seekBar = document.getElementById('seek-bar');
const volumeBar = document.getElementById('volume-bar');
const vidClickContainer = document.querySelector('.vid-click-container');

// first add logic to show and hide play image and pause image. Then
// add hover logic. change the images for mute too.

TweenMax.to('#video, #play-pause', 1.5, { opacity: 0.9 });

// controls
  vidClickContainer.addEventListener('click', function() {
    // playButton.style.display = "none";
    if (video.paused == true) {
      video.play();
      playButton.style.display = 'none';

      // show on hover
      vidClickContainer.addEventListener('mouseover', () => {
        playButton.style.display = 'block';
      });
      vidClickContainer.addEventListener('mouseout', () => {
        playButton.style.display = 'none';
      });
    } else {
      video.pause();
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
