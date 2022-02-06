window.onload = function () {
  var mins = 0;
  var seconds = 0;
  var tens = 0;

  var appendTens = document.getElementById("tens");
  var appendSeconds = document.getElementById("seconds");
  var appendMins = document.getElementById("mins");
  var buttonStart = document.getElementById("button-start");
  var buttonStop = document.getElementById("button-stop");
  var buttonReset = document.getElementById("button-reset");
  var Interval;

  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  buttonStop.onclick = function () {
    clearInterval(Interval);
  };

  buttonReset.onclick = function () {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    mins = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    appendMins.innerHTML = mins;
  };

  function startTimer() {
    tens++;

    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    if (seconds < 9 && seconds > 0) {
      appendSeconds.innerHTML = "0" + seconds;
    }
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
    if (seconds > 60) {
      mins++;
      appendMins.innerHTML = "0" + mins;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    if (mins < 9 && mins > 0) {
      appendMins.innerHTML = "0" + mins;
    }
    if (mins > 9) {
      appendMins.innerHTML = mins;
    }
  }
};
