/*
    Title:          Hot Lap Stopwatch
    Date:           12/25/2018
    Author:         Bud Welsh
    Description:    A stopwatch that will show lap times and lap average speeds
*/

// Declaring and initializing variables
var startTime = Date.now(); // Stopwatch starts with the current time in milliseconds
var stopTime = startTime + 3720000; // ******* Stop time testing this will change ********
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

function onlyMS() {
    fixedMS = lapSec.toFixed(3);
    stringMS = fixedMS.slice(-3);
    console.log("stringMS is: " + stringMS);
}

function onlySec() {
    if (lapSec < 10) {
        fixedMS = lapSec.toFixed(3);
        stringMS = fixedMS.slice(-3);
        stringSec = fixedMS.slice(0, 1);
        console.log("stringSec is: " + stringSec + ", and stringMS is: " + stringMS);
    }else {
        fixedMS = lapSec.toFixed(3);
        stringMS = fixedMS.slice(-3);
        stringSec = fixedMS.slice(0, 2);
        console.log("stringSec is: " + stringSec + ", and stringMS is: " + stringMS);
    }
}

function onlyMin() {    
    if (lapMin < 10) {        
        onlySec();
    } else {
        onlySec();
    }   
}

function onlyHr() {
    if (lapHr < 10) {
        onlyMin();
    } else {
        onlyMin();
    }
}

if (lapTime >= 3600000) {
    console.log("The lap time is one hour or more");
    lapHr = Math.floor(lapTime / 3600000);
    lapMin = Math.floor((lapTime - (lapHr * 3600000)) / 60000);
    lapSec = (((lapTime - (lapHr * 3600000)) - (lapMin * 60000)) / 1000);
    console.log("lapHr is " + lapHr);
    console.log("lapMin is " + lapMin);
    console.log("lapSec is " + lapSec); 
    onlyHr();
}else if (lapTime >= 60000) {
    console.log("The lap time is one minute or more, but less than one hour");
    lapMin = Math.floor(lapTime / 60000);
    console.log("lapMin is: " + lapMin);
    lapSec = ((lapTime - (lapMin * 60000)) / 1000);
    console.log("lapSec is: " + lapSec);
    onlyMin();    
}else if (lapTime >= 1000) {
    console.log("The lap time is one second or more, but less than one minute");
    lapSec = lapTime / 1000;
    onlySec();    
}else {
    console.log("The lap is less than one second");
    lapSec = lapTime / 1000;
    onlyMS();
}
/*
// Fall through if statements to separate the times into hours, minutes, seconds and milliseconds
// One hour or more
if (lapTime >= 3600000) {
    console.log("The lap time is hours long"); 
    lapSec = lapTime / 1000;
    console.log(lapHr + ":" + lapMin + ":" + lapSec);
// One minute or more, but less than one hour
}else if (lapTime >= 60000) {
    console.log("The lap time is minutes long");
    lapMin = Math.floor(lapTime / 60000);
    console.log("lapMin = " + lapMin);    
    lapSec = (lapTime - (lapMin * 60000));
    console.log("lapSec = " + lapSec);    
    lapMS = Math.floor(lapTime - (lapMin * 60000) - (lapSec * 1000));
    console.log("lapMS = " + lapMS);    
    if (lapMin < 10) {
        if (lapSec < 10) {
            console.log("00:0" + lapMin + ":0" + lapSec + ":" + lapMS);
            
        }else {
            console.log("00:0" + lapMin + ":" + lapSec + ":" + lapMS);
        }
    }else {
        if (lapSec < 10) {
            console.log("00:" + lapMin + ":0" + lapSec + ":" + lapMS);
            
        }else {
            console.log("00:" + lapMin + ":" + lapSec + ":" + lapMS);
        }
    }
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
*/

// Miles Per Hour formula
var trackSize = 1 / 7; // We will get this from user input
var bigMph = (trackSize / (lapTime / 1000 / 60 / 60));
var mph = bigMph.toFixed(2);
console.log(mph + " MPH");
