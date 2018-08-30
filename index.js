const recOne = document.getElementById('rec-one');
const recTwo = document.getElementById('rec-two');
const recThree = document.getElementById('rec-three');
const recFour = document.getElementById('rec-four');
const bodyOne = document.getElementById('body-one');
const bodyTwo = document.getElementById('body-two');
const bodyThree = document.getElementById('body-three');
const bodyFour = document.getElementById('body-four');
function toggleColor(rec) {
  return rec.classList.toggle('selected');
}
// object arrays
const bodies = [bodyOne, bodyTwo, bodyThree, bodyFour];
const rectangles = [recOne, recTwo, recThree, recFour];

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

listener(recOne, bodyOne);
listener(recTwo, bodyTwo);
listener(recThree, bodyThree);
listener(recFour, bodyFour);

// loop

const tl = new TimelineLite();

tl.to(bodyOne, 0.3, { opacity: 0, delay: 2 })
  .to(bodyTwo, 0.3, { opacity: 1 }, '-=0.5')
  .call(toggleColor, [recOne])
  .call(toggleColor, [recTwo])
  .to(bodyTwo, 0.3, { opacity: 0, delay: 2 })
  .call(toggleColor, [recTwo])
  .call(toggleColor, [recThree])
  .to(bodyThree, 0.3, { opacity: 1 }, '-=0.5')
  .to(bodyThree, 0.3, { opacity: 0, delay: 2 })
  .call(toggleColor, [recThree])
  .call(toggleColor, [recFour])
  .to(bodyFour, 0.3, { opacity: 1 }, '-=0.5');
