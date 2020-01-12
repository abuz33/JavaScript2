'use strict';

const downArrow = document.querySelector('.down');
const upArrow = document.querySelector('.up');
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');

const audioFinish = document.getElementById('finish');

let sessionLengthDisplay = document.querySelector('.length');
let timeLeftDisplay = document.querySelector('.timer');



//
let countdown = false;

function increaseLength() {
  if (!countdown) {
    if (parseInt(sessionLengthDisplay.textContent) < 60) {
      sessionLengthDisplay.textContent = parseInt(sessionLengthDisplay.textContent) + 1;
      minuteDisplay(parseInt(sessionLengthDisplay.textContent));
    } else {
      alert('It cannot be more than 59');
      sessionLengthDisplay.textContent = 59;
      minuteDisplay(parseInt(sessionLengthDisplay.textContent));
    }
  } else {
    alert('Timer is Runnig');
  }
}


function decreaseLength() {
  if (!countdown) {
    if (parseInt(sessionLengthDisplay.textContent) > 1) {
      sessionLengthDisplay.textContent = parseInt(sessionLengthDisplay.textContent) - 1;
      minuteDisplay(parseInt(sessionLengthDisplay.textContent));
    } else {
      alert('It cannot be less than 1');
      sessionLengthDisplay.textContent = 1;
      minuteDisplay(parseInt(sessionLengthDisplay.textContent));
    }
  } else {
    alert('Timer is Runnig');
  }
}

function startTimer() {

  if (!countdown) {
    // clear any existing timers
    clearInterval(countdown);
    let seconds = parseInt(sessionLengthDisplay.textContent) * 60;
    countdown = setInterval(function () {
      // check if we should stop it!
      if (seconds > 0) {
        seconds--;

        // display it
        timeLeftDisplay.textContent = timeDisplay(seconds);
      } else {
        audioFinish.play();
        timeLeftDisplay.textContent = 'Time is Up!'
        clearInterval(countdown);
        countdown = false;
      }
    }, 1000);
  } else {
    alert('Timer is Runnig');
  }
}




function stopTimer() {
  clearInterval(countdown);
  countdown = false;

}




function timeDisplay(seconds) {
  let minute = Math.floor(seconds / 60);
  let second = Math.floor(seconds % 60);
  return `${minute}:${second < 10 ? 0 : ''}${second}`
}


function minuteDisplay(minutes) {
  const display = `${minutes}:00`;
  timeLeftDisplay.textContent = display;
}


downArrow.addEventListener('click', decreaseLength);

upArrow.addEventListener('click', increaseLength);

play.addEventListener('click', startTimer);

pause.addEventListener('click', stopTimer);
