/*
    Title:          Hot Lap Stopwatch
    Date:           12/25/2018
    Author:         Bud Welsh
    Description:    A stopwatch that will show lap times and lap average speeds
*/

// Declaring and initializing variables
var startTime = Date.now(); // Stopwatch starts with the current time in milliseconds
var stopTime = startTime + 1234; // ******* Stop time testing this will change ********
var lapTime = stopTime - startTime; // Lap time in milliseconds
// Variables used in if statement
var lapMS;
var lapSec; 
var lapMin;
var lapHr;
var fixedMS;
var stringMS;
var stringSec;

// Checking the variables through console.log()
console.log("Starting time in milliseconds: " + startTime);
console.log("Stopping time in milliseconds: " + stopTime);
console.log("Lap time in milliseconds: " + lapTime);

// Fall through if statements to separate the times into hours, minutes, seconds and milliseconds
// One hour or more
if (lapTime >= 3600000) {
    console.log("The lap time is hours long"); 
    lapSec = lapTime / 1000;
    console.log(lapHr + ":" + lapMin + ":" + lapSec);
// One minute or more, but less than one hour
}else if (lapTime >= 60000) {
    console.log("The lap time is minutes long");
    lapSec = lapTime / 1000;
    console.log(lapHr + ":" + lapMin + ":" + lapSec);
// One second or more, but less than one minute
}else if (lapTime >= 1000) {
    console.log("The lap time is seconds long");
    lapSec = lapTime / 1000;
    if (lapSec < 10) {
        fixedMS = lapSec.toFixed(3);
        stringMS = fixedMS.slice(-3);
        stringSec = fixedMS.slice(0, 1);
        console.log("00:00:0" + stringSec + ":" + stringMS);
    }else {
        fixedMS = lapSec.toFixed(3);
        stringMS = fixedMS.slice(-3);
        stringSec = fixedMS.slice(0, 2);
        console.log("00:00:" + stringSec + ":" + stringMS);
    }
// Less than one second
}else {
    console.log("The lap time is less than a second");
    lapSec = lapTime / 1000;
    fixedMS = lapSec.toFixed(3);
    stringMS = fixedMS.slice(-3);
    console.log("00:00:00:" + stringMS);
}

// Miles Per Hour formula
var trackSize = 1 / 7; // We will get this from user input
var bigMph = (trackSize / (lapTime / 1000 / 60 / 60));
var mph = bigMph.toFixed(2);
console.log(mph + " MPH");
