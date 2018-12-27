/*
    Title:    Hot Lap Stopwatch Javascript
    Author:   Bud Welsh
    Date:     12/27/2018
*/

// Clock variables
var clockHours = document.getElementById("watchHour");
var clockMinutes = document.getElementById("watchMinute");
var clockSeconds = document.getElementById("watchSeconds");
var clockMseconds = document.getElementById("watchMseconds")
// Button variables
var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var lapButton = document.getElementById("lap");
var clearButton = document.getElementById("clear");
// Time variables
var hour = 0;
var minute = 0;
var second = 0;
var millisecond = 0;
var lap = 1;
var working;
var startTime;
var stopTime;

function startClock() {
  console.log(">>>> Entering startClock() function");
  running();
  console.log("<<<< Leaving startClock() function");
}

function stopClock() {
  console.log(">>>> Entering stopClock() function");
  clearTimeout(working);
  console.log("<<<< Leaving stopClock() function");
}

function running() {
  millisecond++;
  if (millisecond >= 100) {
    millisecond = 0;
    second++;
    if (second >= 60) {
      second = 0;
      minute++;
      if (minute >= 60) {
        minute = 0;
        hour++;
      }
    }
  }
  // Zeros, Leading Zeros, and No Zeros
  // Hours
  if (hour == null) {
    clockHours.innerHTML = "00";
  } else {
    if (hour > 9) {
      clockHours.innerHTML = hour;
    } else {
      clockHours.innerHTML = "0" + hour;
    }
  }
  // Minutes
  if (minute == null) {
    clockMinutes.innerHTML = "00";
  } else {
    if (minute > 9) {
      clockMinutes.innerHTML = minute;
    } else {
      clockMinutes.innerHTML = "0" + minute;
    }
  }
  // Seconds
  if (second == null) {
    clockSeconds.innerHTML = "00";
  } else {
    if (second > 9) {
      clockSeconds.innerHTML = second;
    } else {
      clockSeconds.innerHTML = "0" + second;
    }
  }
  // Milliseconds
  if (millisecond == null) {
    clockMseconds.innerHTML = "00";
  } else {
    if (millisecond > 9) {
      clockMseconds.innerHTML = millisecond;
    } else {
      clockMseconds.innerHTML = "0" + millisecond;
    }
  }

  workingClock();
}

function workingClock() {
  working = setTimeout(running, 10);
}

function starting() {
  console.log(">>> Entering starting() function");
  startClock();
  // startLap();
  // startAverage();
  // startSpeed();
  startButton.disabled = true;
  stopButton.disabled = false;
  lapButton.disabled = false;
  clearButton.disabled = true;
  console.log("<<< Leaving starting() function");
}

function stopping() {
  console.log(">>> Entering stopping() function");
  stopClock();
  // stopLap();
  // stopAverage();
  // stopSpeed();
  startButton.disabled = false;
  stopButton.disabled = true;
  lapButton.disabled = true;
  clearButton.disabled = false;
  console.log("<<< Leaving stopping() function");
}

function lapping() {
  console.log(">>> Entering lapping() function");
  // lapClock();
  // stopLap();
  // startLap();
  // lapAverage();
  // lapSpeed();
  startButton.disabled = false;
  stopButton.disabled = true;
  lapButton.disabled = true;
  clearButton.disabled = false;
  console.log("<<< Leaving lapping() function");
}

function clearing() {
  console.log(">>> Entering clearing() function");
  startButton.disabled = true;
  stopButton.disabled = false;
  lapButton.disabled = false;
  clearButton.disabled = true;
  console.log("<<< Leaving clearing() function");
}

function createListeners() {
  console.log(">> Entering createListeners() function");
  if (window.addEventListener) {
    console.log("TC39 button listeners");
    startButton.addEventListener("click", starting, false);
    stopButton.addEventListener("click", stopping, false);
    lapButton.addEventListener("click", lapping, false);
    clearButton.addEventListener("click", clearing, false);
  } else if (window.attachEvent) {
    console.log("MS button listeners");
    startButton.attachEvent("onclick", starting);
    stopButton.attachEvent("onclick", stopping);
    lapButton.attachEvent("onclick", lapping);
    clearButton.attachEvent("onclick", clearing);
  }
  console.log("<< Leaving createListeners() function");
}

function copyRight() {
  console.log(">> Entering copyRight() function");
  var thisYear = new Date().getFullYear();
  console.log("thisYear is " + thisYear);
  var yearContainer = document.getElementById("copyYear");
  yearContainer.innerHTML = thisYear;
  console.log("<< Leaving copyRight() function");
}

function init() {
  console.log("> Entering init() function");
  createListeners();
  copyRight();
  console.log("< Leaving init() function");
}

if (window.addEventListener) {
  console.log("*** Beginning Program TC39 ***");
  window.addEventListener("load", init, false);
} else if (window.attachEvent) {
  console.log("*** Beginning Program MS ***");
  window.attachEvent("onload", init);
}
