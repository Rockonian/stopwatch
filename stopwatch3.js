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
// Button variables
var clockStartTime = 0;
var clockStopTime = 0;
var lapStartTime = 0;
var lapStopTime = 0;
// Resutls variables
var lap = 0;
var lapTime = 0;
var averageTime = 0;

// Time and Speed Results
function printFinalResults() {
  console.log(">>>> Entering printFinalResults() function");
  averageTime = ((clockStopTime - clockStartTime) / lap);
  lapTime = (lapStopTime - lapStartTime);
  console.log("Lap Time = " + lapTime);
  console.log("Average Time = " + averageTime);
  console.log("<<<< Leaving printFinalResults() function");
}

function printResults() {
  console.log(">>>> Entering printResults() function");
  console.log("Lap number = " + lap + " Stop Time = " + lapStopTime + " Start Time = " + lapStartTime);
  averageTime = ((clockStopTime - clockStartTime) / lap);
  lapTime = (lapStopTime - lapStartTime);
  console.log("Lap Time = " + lapTime);
  console.log("Average Time = " + averageTime);
  console.log("<<<< Leaving printResults() function");
}

// Time Button Functions
function starting() {
  console.log(">>> Entering starting() function");
  clockStartTime = Date.now();
  lapStartTime = clockStartTime;
  lap++;
  console.log("Start time in milliseconds = " + clockStartTime);
  // startClock();
  // startLap();
  // startAverage();
  // startSpeed();
  console.log("Lap number = " + lap + " Start Time = " + lapStartTime);
  startButton.disabled = true;
  stopButton.disabled = false;
  lapButton.disabled = false;
  clearButton.disabled = true;
  console.log("<<< Leaving starting() function");
}

function stopping() {
  console.log(">>> Entering stopping() function");
  clockStopTime = Date.now();
  lapStopTime = clockStopTime;
  printFinalResults();
  console.log("Stop time in milliseconds = " + clockStopTime);
  // stopClock();
  // stopLap();
  // stopAverage();
  // stopSpeed();
  console.log("Lap number = " + lap + " Stop Time = " + lapStopTime);
  startButton.disabled = false;
  stopButton.disabled = true;
  lapButton.disabled = true;
  clearButton.disabled = false;
  console.log("<<< Leaving stopping() function");
}

function lapping() {
  console.log(">>> Entering lapping() function");
  lapStopTime = Date.now();
  printResults();
  lapStartTime = lapStopTime;
  lap++;
  // lapClock();
  // stopLap();
  // startLap();
  // lapAverage();
  // lapSpeed();
  console.log("Lap number = " + lap + " Stop Time = " + lapStopTime + " Start Time = " + lapStartTime);
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
  clockStartTime = 0;
  clockStopTime = 0;
  lapTime = 0;
  averageTime = 0;
  console.log("Lap = " + lap + " lapStartTime = " + lapStartTime + " lapStopTime = " + lapStopTime);
  console.log("<<< Leaving clearing() function");
}

function speedQuestion() {
  console.log(">> Entering speedQuestion() function");
  var askElement = document.createElement("p");
  var askQuestion = document.createTextNode("Do you want to see the lap speed?");
  askElement.appendChild(askQuestion);
  // Readout Variables
  var readout = document.getElementById("display");
  readout.appendChild(askElement);
  console.log("<< Leaving speedQuestion() function");
}

function trackSize() {
  console.log(">> Entering trackSize() function");
  // Track Size Variables
  var oneSixth, oneSeventh, oneEighth, oneQuarter, threeEighths,
      halfMile, threeQuarters, oneMile, mileAndHalf, twoMile, twoMileAndHalf;
  // Create Buttons

  // Create form

  console.log("<< Leaving trackSize() function");
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
  speedQuestion();
  console.log("< Leaving init() function");
}

if (window.addEventListener) {
  console.log("*** Beginning Program TC39 ***");
  window.addEventListener("load", init, false);
} else if (window.attachEvent) {
  console.log("*** Beginning Program MS ***");
  window.attachEvent("onload", init);
}
