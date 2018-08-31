const video = document.getElementById('video');
const playButton = document.getElementById('play-pause');
const muteButton = document.getElementById('mute');
const fullScreenButton = document.getElementById('full-screen');
const seekBar = document.getElementById('seek-bar');
const volumeBar = document.getElementById('volume-bar');
const vidClickContainer = document.querySelector('.vid-click-container');
const pauseButton = document.getElementById('pause-button');

video.muted = true;
pauseButton.style.display = 'none';
playButton.style.display = 'none';


// initial fade in
TweenMax.to('#video', 1.5, { opacity: 0.8 });

// controls

vidClickContainer.addEventListener('mousemove', () => {
  if (video.paused === true) {
    playButton.style.display = 'block'
    pauseButton.style.display = 'none';
  } else {
    pauseButton.style.display = 'block';
  }
});
vidClickContainer.addEventListener('mouseout', () => {
  pauseButton.style.display = 'none';
});



vidClickContainer.addEventListener('click', () => {
  if (video.paused === true) {
    video.play();
    pauseButton.style.display = 'none';
    playButton.style.display = 'none';
  } else {
    pauseButton.style.display = 'block';
    video.pause();
  }
});

muteButton.addEventListener('click', function() {
  if (video.muted == false) {
    video.muted = true;
    muteButton.innerHTML = '<i class="fas fa-volume-off"></i>';
  } else {
    video.muted = false;
    muteButton.innerHTML = '<i class="fas fa-volume-up"></i>';
  }
});
