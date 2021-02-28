"use strict";

window.addEventListener("load", () => {

  window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (this.pageYOffset > nav.offsetHeight) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  // jQuery version:
  /*         $(function () {
              $(document).scroll(function () {
                  var $nav = $("#mainNavbar");
                  $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
              });
          });
 */


}); // End load event listener