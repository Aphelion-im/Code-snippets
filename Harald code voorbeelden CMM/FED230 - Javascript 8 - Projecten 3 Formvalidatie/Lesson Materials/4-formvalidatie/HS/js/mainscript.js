var d = document; 
// als JavaScript AAN staat switch de display van de 2 divs
d.getElementById('formholder').style.display = 'block';
d.getElementsByClassName('yesJS')[0].style.display = 'none';


var allesGoed;


function valideerForm(deForm){
    // deForm bevat alle HTML elementen genest in de Form tag
    // deForm.elements bevat alle "formulier" elementen
    // in het begin gaan we er vanuit dat alles netjes is ingevoerd
	var formElements = deForm.elements;
    allesGoed = true;
 
    for (element of formElements) {
        
        // ##### Valideer Tekst velden #####  
        if (element.type == 'text') {
            // we gaan eerst alle text inputs verifieren
            // console.log(element.type, element.value);
            if (element.value.length <= 1) {
                formFeedback(element, false);
             } else {
                 formFeedback(element, true);
             }
             
        } 
        // ##### Valideer Email #####  
        if (element.name == 'liame'){ //email omgedraaid
             
            // abc12@abc123.iets
            var apenstaart = element.value.indexOf('@');
            var laatstePunt = element.value.lastIndexOf('.');
            var lengte = element.value.length;
            
            if (lengte < 8 || apenstaart < 2 || laatstePunt <= (apenstaart + 2) ) {
                formFeedback(element, false);
             } else {
                 formFeedback(element, true);
             }
        }
        
        // ##### Valideer Postcode #####    
        if (element.name == 'postcode'){
          
            var postcodeString = element.value;
            var postcodeReg = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i;
            var correct = postcodeReg.test(postcodeString);
            if (!correct){
                formFeedback(element, false);
            } else {
                 formFeedback(element, true);
            } // einde if !correct 
        }// einde if postcode
        
    } // einde for loop
			
	// als alles goed is verstuur dan het formulier met true
    return allesGoed;
} // einde functie valideerForm

var resetKnop = d.getElementById('reset');
var verstuurKnop = d.getElementById('verstuur');

resetKnop.addEventListener('click', function(e){
    e.preventDefault();
    
    if ( confirm('Formulier wissen?\nWeet u het zeker?') ){
        // als ja(true), dan wissen als nee dan prevent wissen
        // e.preventDefault();
        location.reload();
    }
    // anders niets
});

verstuurKnop.addEventListener('click', function(e){
    e.preventDefault();
    if (valideerForm(this.form)){
        this.form.submit();
    }
    // als formulier GOED dan verstuur en anders niets!
});
    
    
    
function formFeedback(element, status){
    var melding = d.getElementById(element.id + '_error');
    if (status) { // veld is goed
        melding.style.display = 'none'; // geen tekst
        element.style.backgroundColor = "#ccffcc"; // kleur groen
       
    } else { // het veld is fout 
        melding.style.display = 'inline'; // toon tekst
        element.style.backgroundColor = "#ffcccc"; // veld rood
        allesGoed = false;
    }
}