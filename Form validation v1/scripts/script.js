"use strict";

window.addEventListener("load", () => {


  const submit = document.querySelector("input[type='submit']");
  const feedback = document.querySelector("#name~span");
  const naamVeld = document.querySelector('#name');


  submit.addEventListener("click", validateFields);

  function validateFields(e) {

    let pattern = /^[a-z0-9\s]{4,100}$/i;
    let valid = pattern.test(naamVeld.value);

    if (!naamVeld.value.length > 0) {
      feedback.style.display = "block";
      feedback.style.color = "red";
      feedback.textContent = "Please fill in your name!";
      e.preventDefault();
    } else if (naamVeld.value !== valid) {
      feedback.style.display = "block";
      feedback.style.color = "green";
      feedback.textContent = "Please use correct characters!";

    }





    e.preventDefault();
  };















}); // End load event listener