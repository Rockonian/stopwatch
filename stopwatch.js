/*
    Title:          Hot Lap Stopwatch
    Date:           12/25/2018
    Author:         Bud Welsh
    Description:    A stopwatch that will show lap times and lap average speeds
*/

// Declaring and initializing variables
var startTime = Date.now(); // Stopwatch starts with the current time in milliseconds
var stopTime = startTime + 12666; // ******* Stop time testing this will change ********
var lapTime = stopTime - startTime; // Lap time in milliseconds
// Used in if statement
var lapMS = 000;
var lapSec = 00; 
var lapMin = 00;
var lapHr = 00;

// Checking the variables through console.log()
console.log("Starting time in milliseconds: " + startTime);
console.log("Stopping time in milliseconds: " + stopTime);
console.log("Lap time in milliseconds: " + lapTime);

// Fall through if statements to separate the times into hours, minutes, seconds and milliseconds
if (lapTime >= 3600000) {
    console.log("The lap time is hours long"); 
    lapSec = lapTime / 1000;
    console.log(lapHr + ":" + lapMin + ":" + lapSec);
}else if (lapTime >= 60000) {
    console.log("The lap time is minutes long");
    lapSec = lapTime / 1000;
    console.log(lapHr + ":" + lapMin + ":" + lapSec);
}else if (lapTime >= 1000) {
    console.log("The lap time is seconds long");
    lapSec = lapTime / 1000;
    console.log(lapHr + ":" + lapMin + ":" + lapSec);
}else {
    console.log("The lap time is less than a second");
    lapSec = lapTime / 1000;
    console.log(lapHr + ":" + lapMin + ":" + lapSec);
}
