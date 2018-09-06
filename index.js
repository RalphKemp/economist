function ecoStart() {
  const recOne = document.getElementById('rec-one');
  const recTwo = document.getElementById('rec-two');
  const recThree = document.getElementById('rec-three');
  const recFour = document.getElementById('rec-four');
  const bodyOne = document.getElementById('body-one');
  const bodyTwo = document.getElementById('body-two');
  const bodyThree = document.getElementById('body-three');
  const bodyFour = document.getElementById('body-four');

  // object arrays
  const bodies = [bodyOne, bodyTwo, bodyThree, bodyFour];
  const rectangles = [recOne, recTwo, recThree, recFour];

  const runSlides = () => {
    const tl = new TimelineLite();
    tl.to(bodyOne, 0.3, { opacity: 0, delay: 4.5 })
      .call(toggleColor, [recTwo], this, 4.5)
      .call(toggleColor, [recOne], this, 4.5)
      .to(bodyTwo, 0.3, { opacity: 1 }, '-=0.3')
      .to(bodyTwo, 0.3, { opacity: 0, delay: 5 })
      .call(toggleColor, [recThree], this, 9.8)
      .call(toggleColor, [recTwo], this, 9.8)
      .to(bodyThree, 0.3, { opacity: 1 }, '-=0.3')
      .to(bodyThree, 0.3, { opacity: 0, delay: 4.5 })
      .call(toggleColor, [recFour], this, 14.7)
      .call(toggleColor, [recThree], this, 14.7)
      .to(bodyFour, 0.3, { opacity: 1 }, '-=0.3');
  };

  function toggleColor(rec) {
    return rec.classList.toggle('selected');
  }

  // return an array without the current object, and for each
  // obj change the style.
  function trigger(arr, elem, styleChange, styleChangeTwo) {
    const newArray = arr.filter(x => x !== elem);
    newArray.forEach(obj => {
      obj.style.opacity = styleChange;
      obj.style.backgroundColor = styleChangeTwo;
    });
  }

  // EventListeners for each rectangle. When rec is clicked,
  // we call the trigger which use rec and body, then set the
  // styles of the objects we're on, as opposed to the newArray objs.
  function listener(rec, body) {
    rec.addEventListener('click', () => {
      trigger(bodies, body, 0, null);
      trigger(rectangles, rec, null, '#705c1a');
      body.style.opacity = 1;
      rec.style.backgroundColor = '#ffd400';
    });
  }

  runSlides();

  listener(recOne, bodyOne);
  listener(recTwo, bodyTwo);
  listener(recThree, bodyThree);
  listener(recFour, bodyFour);

  // basically we need it that if the listener function is called we kill the
  // runslides funtion. I tried simply adding the function as an argument to listerner
  // to override it, i will try and maybe do that again but change it slightly.

  // VIDEO

  document.querySelector('.video-container').innerHTML = `
          <video id="video" autoplay="false">
            <source src="./images/vid.mp4" type="video/mp4" loop="true">
            Your browser does not support the video tag.
          </video>
          <div class="video-controls">
            <img src="./images/pause.png" id="pause-button">
            <img src="./images/play.png" id="play-pause">
            <!-- <input type="range" id="seek-bar" value="0"> -->
            <button type="button" id="mute">
              <img src="./images/mute.png" id="mute-button">
              <!-- <i class="fas fa-volume-off"></i> -->
            </button>
            <!-- <input type="range" id="volume-bar" min="0" max="1" step="0.1" value="1"> -->
          </div>`;

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
  video.pause();
  pauseButton.style.opacity = 0;
  playButton.style.opacity = 1;

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
    console.log(video.paused);
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
      muteButton.innerHTML =
        '<img src="./images/volume.png" id="volume-button">';
    } else {
      video.muted = true;
      muteButton.innerHTML = '<img src="./images/mute.png" id="mute-button">';
    }
  });
}
