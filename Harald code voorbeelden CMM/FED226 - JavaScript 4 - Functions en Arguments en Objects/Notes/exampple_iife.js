
// Classic Function
function addTogether() {
 var x = 20;
 var y = 20;
 var answer = x + y;
 console.log(answer);
}
// function doet het nog niet

addTogether(); // Doet het NU pas...

// en de functie bestaat nog steeds!!
    

// IIFE - Immediately Invoked Function Expression

(function(naam) {
 videoButton.addEventListener('click', function(){
     // blabla
 }) ;  
 var x = 20;
 var y = 20;
 var answer = x + y;
 console.log(answer + naam);
})('joop'); // doet het meteen

// en nu bestaat de functie en al zijn interne waarden niet meer

// console.log(answer); // kan niet in de SCOPE van de IIFE  

function doeIets(naam) {
 videoButton.addEventListener('click', function(){
     // blabla
 }) ;  
 var x = 20;
 var y = 20;
 var answer = x + y;
 console.log(answer + naam);
}

doeIets('joop');