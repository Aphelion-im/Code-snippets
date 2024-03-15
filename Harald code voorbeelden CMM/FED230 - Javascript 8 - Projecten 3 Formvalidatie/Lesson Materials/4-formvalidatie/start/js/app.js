var d= document;
var allesGoed;

window.addEventListener('load', function(){
    //imageSwap();
    //init();
    d.getElementById('formholder').style.display = 'block';
    d.getElementsByClassName('yesJs')[0].style.display = 'none';
    
}) //einde window load

    // initialiseer de var's
    // haal de inhoud van het naamveld op...
    // valideer de inhoud van naam...
    // haal de inhoud uit het emailveld
    // valideer de inhoud van email
    // valideer de inhoud van bedrijf
    // valideer de inhoud van telefoonnummer
    // als alles goed is verstuur dan het formulier

function valideerForm(deForm){
    allesGoed = true;
    var formElementen = deForm.elements; //alle formulier elementen ophalen
    
    for(element of formElementen){
        //snelle test op 'inhoud'
        if(element.type == 'text'){
            if(element.value.length <= 1){
                //dan is het fout
                formFeedback(element, false);
            }else{
                //het is goed
                formFeedback(element, true);
            }
        }
        
        //#### valideer plausible email
        
        if(element.name = 'email'){
            //abc123@bc123.iets
            //ab@ab.ab
            var apenstaart = element.value.indexOf('@'); 
            var laatstepunt = element.value.lastIndexOf('.');
            var lengte = element.value.length;
            if(apenstaart < 2 || laatstepunt <= apenstaart + 2 || lengte <= laatstepunt + 2){
                //fout
                formFeedback(element, false);
            }else{
                formFeedback(element, true);
            }
        }
        
        if(element.name == 'postcode'){
            //1234 ab || 1234ab     1000 is laagste
            //reguliere expressie (*) regeX 
            var postcodeReg = /^[1-9][0-9]{3} ?(?!sa|sd|ss) [a-z]{2}$/i;
            //de {3} staat voor 3 x het blokje [1-9]
            
            var correct = postcodeReg.test(element.value);
            formFeedback(element, correct);
        }
    }

    return allesGoed;

}
    

var reset = d.getElementById('resetForm');
var verstuur = d.getElementById('verstuurForm');

//addEventListener submit

//addEventListener reset "met een weet u het zeker" berichtje

reset.addEventListener('click', function(e){ //bij een click is het handig altijd het event op te vangen
    e.preventDefault();
    if(confirm('Formulier wissen?\nWeet u het zeker?')){
        //true(of oke)
        location.reload();
    }
})

verstuur.addEventListener('click', function(e){
    e.preventDefault();
    if(valideerForm(this.form)){
        //this.form.action = 'realpath/realscript.php';
        this.form.submit();
    }
})

function formFeedback(element, status){
    var melding = d.getElementById(element.id + '_error');
    if(status){ //is true, dus wel error
        melding.style.display = 'none';
        element.style.backgroundColor = '#ccffcc'; //groen
    }else{
        melding.style.display = 'inline';
        element.style.backgroundColor = '#ffcccc'; //rood
        allesGoed = false;
    }
}






