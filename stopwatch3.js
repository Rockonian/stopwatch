/*
  Title:        Stopwatch 3 JavaScript
  Date:         12/29/2018
  Author:       Bud Welsh
  Description:  This won't have a visual clock running, but it will keep accurate time.
*/

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
var lap = 0;
var working;
var clockStartTime;
var clockStopTime;
var lapStartTime;
var lapStopTime;

function startLap() {
  console.log(">>>> Entering startLap() function");
  lap++;
  lapStartTime = Date.now();
  console.log("Lap Count is " + lap);
  console.log("Start lap time in milliseconds = " + lapStartTime);
  console.log("<<<< Leaving startLap() function");
}

function stopLap() {
  console.log(">>>> Entering stopLap() function");
  lapStopTime = Date.now();
  console.log("Stop lap time in milliseconds = " + lapStopTime);
  console.log("<<<< Leaving stopLap() function");
}

// This function might be cut out if adding lap times is easier
// function startClock() {
//   clockStartTime = Date.now();
//   console.log("Start time in milliseconds = " + clockStartTime);
// }

// This function might be cut out if adding lap times is easier
// function stopClock() {
//   clockStopTime = Date.now();
//   console.log("Stop time in milliseconds = " + clockStopTime);
// }

function starting() {
  console.log(">>> Entering starting() function");
  // startClock();
  startLap();
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
  // stopClock();
  stopLap();
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
  stopLap();
  startLap();
  // lapAverage();
  // lapSpeed();
  startButton.disabled = true;
  stopButton.disabled = false;
  lapButton.disabled = false;
  clearButton.disabled = true;
  console.log("<<< Leaving lapping() function");
}

function clearing() {
  console.log(">>> Entering clearing() function");
  startButton.disabled = false;
  stopButton.disabled = true;
  lapButton.disabled = true;
  clearButton.disabled = false;
  lap = 0;
  lapStartTime = 0;
  lapStopTime = 0;
  console.log("Lap = " + lap + " lapStartTime = " + lapStartTime + " lapStopTime = " + lapStopTime);
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
