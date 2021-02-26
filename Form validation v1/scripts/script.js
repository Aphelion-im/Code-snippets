"use strict";

window.addEventListener("load", () => {


const submit = document.querySelector("input[type='submit']");
const feedback = document.querySelector("#name~span");
const naamVeld = document.querySelector('#name');


submit.addEventListener("click", validateFields);

function validateFields(e) {


if (naamVeld.value.length == 0) {
  feedback.style.display = "block";
  feedback.style.color = "red";
  feedback.textContent = "Please fill in your name!";
  e.preventDefault();
}


  // if (naamVeld.name == 'naam') {
  //   let pattern = /^[a-z0-9\s]{4,100}$/i;
  //   valid = pattern.test(welkVeld.value);
  // }






// e.preventDefault(); // Prevent form from submitting. required attribute seems to stop this on a level.


  console.log("Clicked");


};














  
}); // End load event listener