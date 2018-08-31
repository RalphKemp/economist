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
  tl.to(bodyOne, 0.3, { opacity: 0, delay: 4 })
    .call(toggleColor, [recTwo], this, 3.4)
    .call(toggleColor, [recOne], this, 3.4)
    .to(bodyTwo, 0.3, { opacity: 1 }, '-=1')
    .to(bodyTwo, 0.3, { opacity: 0, delay: 4 })
    .call(toggleColor, [recThree], this, 7.6)
    .call(toggleColor, [recTwo], this, 7.6)
    .to(bodyThree, 0.3, { opacity: 1 }, '-=1')
    .to(bodyThree, 0.3, { opacity: 0, delay: 4 })
    .call(toggleColor, [recFour], this, 11)
    .call(toggleColor, [recThree], this, 11)
    .to(bodyFour, 0.3, { opacity: 1 }, '-=1');
};

runSlides();

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
function listener(rec, body, func) {
  rec.addEventListener('click', () => {
    trigger(bodies, body, 0, null);
    trigger(rectangles, rec, null, '#705c1a');
    body.style.opacity = 1;
    rec.style.backgroundColor = '#ffd400';
    func = function() {};
  });
}

listener(recOne, bodyOne, runSlides);
listener(recTwo, bodyTwo, runSlides);
listener(recThree, bodyThree, runSlides);
listener(recFour, bodyFour, runSlides);
