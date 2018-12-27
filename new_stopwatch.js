/*
    Title:    Hot Lap Stopwatch Javascript
    Author:   Bud Welsh
    Date:     12/27/2018
*/


// Button variables
var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var lapButton = document.getElementById("lap");
var clearButton = document.getElementById("clear");

function starting() {
  console.log(">>> Entering starting() function");

  console.log("<<< Leaving starting() function");
}

function stopping() {
  console.log(">>> Entering stopping() function");

  console.log("<<< Leaving stopping() function");
}

function lapping() {
  console.log(">>> Entering lapping() function");

  console.log("<<< Leaving lapping() function");
}

function clearing() {
  console.log(">>> Entering clearing() function");

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
