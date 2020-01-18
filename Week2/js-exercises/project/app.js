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
      showAlert('It cannot be more than 59', 'danger');
      sessionLengthDisplay.textContent = 59;
      minuteDisplay(parseInt(sessionLengthDisplay.textContent));
    }
  } else {
    showAlert('Timer is Runnig', 'danger');
  }
}


function decreaseLength() {
  if (!countdown) {
    if (parseInt(sessionLengthDisplay.textContent) > 1) {
      sessionLengthDisplay.textContent = parseInt(sessionLengthDisplay.textContent) - 1;
      minuteDisplay(parseInt(sessionLengthDisplay.textContent));
    } else {
      showAlert('It cannot be less than 1');
      sessionLengthDisplay.textContent = 1;
      minuteDisplay(parseInt(sessionLengthDisplay.textContent));
    }
  } else {
    showAlert('Timer is Runnig', 'danger');
  }
}

function showAlert(message, className) {
  const div = document.createElement('div');
  div.className = `alert alert-${className}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector('.container');

  const title = document.querySelector('.title');

  container.insertBefore(div, title);

  // Vanish in 3 seconds

  setTimeout( () => {
      document.querySelector('.alert').remove()
  }, 3000);
}


function startTimer() {
  showAlert('Timer has started successfully', 'success')
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
    showAlert('Timer is Runnig', 'danger');
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
