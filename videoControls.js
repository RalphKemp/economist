const video = document.getElementById('video');
const playButton = document.getElementById('play-pause');
const muteButton = document.getElementById('mute');
const fullScreenButton = document.getElementById('full-screen');
const seekBar = document.getElementById('seek-bar');
const volumeBar = document.getElementById('volume-bar');
const vidClickContainer = document.querySelector('.vid-click-container');
const pauseButton = document.getElementById('pause-button');

video.muted = true;
video.loop = true;
pauseButton.style.opacity = 0;
playButton.style.opacity = 0;

// initial fade in
TweenMax.to('#video', 1.5, { opacity: 0.8 });

// controls
// mousover the div. If the video is playing, pause button fades in.
vidClickContainer.addEventListener('mouseover', () => {
  if (!video.paused) {
    TweenMax.to(pauseButton, 0.4, { opacity: 0.8 });
  }
});
// and it fades out on mouseout.
vidClickContainer.addEventListener('mouseout', () => {
  TweenMax.to(pauseButton, 0.4, { opacity: 0 });
});

// on a click, pause button fades and play fades in, and if video is
// paused we fade playbutton.
vidClickContainer.addEventListener('click', () => {
  if (video.paused) {
    TweenMax.to(playButton, 0.4, { opacity: 0 });
    video.play();
  } else {
    TweenMax.to(pauseButton, 0.4, { opacity: 0 });
    TweenMax.to(playButton, 0.4, { opacity: 0.8 });
    video.pause();
  }
});

muteButton.addEventListener('click', function() {
  if (video.muted) {
    video.muted = false;
    muteButton.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else {
    video.muted = true;
    muteButton.innerHTML = '<i class="fas fa-volume-off"></i>';
  }
  console.log(video.muted);
});
