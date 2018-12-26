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

// Checking the variables through console.log()
console.log("Starting time in milliseconds: " + startTime);
console.log("Stopping time in milliseconds: " + stopTime);
console.log("Lap time in milliseconds: " + lapTime);
 