/*
    Title:      Main Javascript
    Author:     Bud Welsh
    Date:       12/26/2018
*/

function copyRight() {
  console.log(">> Entering copyRight() function");  
  var thisYear = new Date().getFullYear();
  console.log("This year is " + thisYear);  
  var yearContainer = document.getElementById("copyYear");
  console.log("yearContainer = " + yearContainer);  
  yearContainer.innerHTML = thisYear;
}

function init() {
  copyRight();
}

if (window.addEventListener) {
  window.addEventListener("load", init, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", init);
}