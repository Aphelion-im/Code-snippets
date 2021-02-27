"use strict";

window.addEventListener("load", () => {

  const listenerDiv = document.querySelector(".listener");
  const listenerDiv2 = document.querySelector(".listener2");

  // Solution multiple event listeners on multiple elements
  var eventList = ["mousedown", "mouseup", "mouseover", "mouseout"];

  var divObjecten = [listenerDiv, listenerDiv2];

  for (let hetEvent of eventList) {
    for (let formObject of divObjecten) {
      formObject.addEventListener(hetEvent, function (e) {
        console.log(hetEvent + ". Div: " + this);
      });
    }
  };
















}); // End load event listener