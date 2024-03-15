var d = document;

window.addEventListener('load',function(){ 
	/* 	======================================================================	
		Browser & Object sniffing
	=========================================================================== */
	if(!d.getElementById("cmmContactForm")) return false; // Als er geen cmmContactForm is, STOP DAN!
	
	
	
	/* 	======================================================================	
		Variables
	=========================================================================== */
	var submitKnop = d.getElementById('submit'); // Submitknop
	var naamVeld = d.getElementById('naam');
    var leeftijdVeld = d.getElementById('leeftijd');
    var emailVeld = d.getElementById('email');
    var welkFormulier = d.getElementById('cmmContactForm');
    var eersteFout;
	
	
	/* 	======================================================================	
		Functions
	=========================================================================== */
    
    /**
 * deze functie valideert text, nummers en email
 * @param HTMLobject welkVeld Reference naar een formulier veld
 * @return boolean
 */
	function validateVeld(welkVeld){
        var valid = false;
        if(welkVeld.type == 'text'){
            var pattern = /^[a-z0-9\s]{4,100}$/i; //i staat voor case insensitive
            valid = pattern.test(welkVeld.value);
        }else if (welkVeld.type == 'email'){
            var pattern = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,99}$/i; 
            valid = pattern.test(welkVeld.value);
        }else if(welkVeld.type == 'number'){
            var minVal = welkVeld.getAttribute('min');
            var maxVal = welkVeld.getAttribute('max');
            var userValue = welkVeld.value;
            valid = (userValue >= minVal) && (userValue <= maxVal);
        }
        
        
//        console.log(welkVeld.naam, welkVeld.value, valid);
        
        createFeedback(welkVeld, valid);
        
        return valid;
    }
    
    
    //radio buttons
    function validateRadio(welkVeldNaam){
        var valid = false;
        if(welkFormulier.elements[welkVeldNaam].value){
            valid = true;
        }
        createFeedback(welkFormulier.elements[welkVeldNaam][0], valid, 'Maak potvolsnotje een keuze!!');
        return valid;
    }
    
    
    
    
    
    function createFeedback(welkVeld, valid, melding = 'controleer dit veld!'){
        var iconList = welkVeld.parentNode.getElementsByTagName('span');
        for(icon of iconList){
            welkVeld.parentNode.removeChild(icon);
        }
        
        var iconContainer = d.createElement('span');
        var iconFa = d.createElement('span');
        iconFa.setAttribute('area-hidden', 'true');
        var iconText; //maken maar niet vullen!
        
        if(valid){
            welkVeld.style.backgroundColor = 'rgba(0,255,0,0.2)';
            welkVeld.style.borderColor= 'rgb(0,255,0)';
            iconFa.setAttribute('class', 'fa fa-check-circle');
            iconText = d.createTextNode('');
        }else{
            welkVeld.style.backgroundColor = 'rgba(255,0,0,0.2)';
            welkVeld.style.borderColor= 'rgb(255,0,0)';
            iconFa.setAttribute('class', 'fa fa-exclamation-circle');
            iconText = d.createTextNode(melding);
            if(!eersteFout) eersteFout = welkVeld;
        }
        
        iconContainer.appendChild(iconFa);
        iconContainer.appendChild(iconText);
        welkVeld.parentNode.appendChild(iconContainer);
    }
	
	function validateCheckboxGroup(groupName, minNum){
            var group = welkFormulier.elements[groupName];
            var numChecked = 0;
            var valid = false;
            for(element of group){
                if(element.checked)
                    numChecked++;
            }
            if(numChecked >= minNum) valid = true;
            
             createFeedback(welkFormulier.elements[groupName][0], valid, 'Werk minimaal ' + minNum);
             return valid;
        }
        
    

	/* 	======================================================================	
		Events
	=========================================================================== */
	
    submitKnop.addEventListener('click', function(e){
        eersteFout = false;
        var naamCorrect = validateVeld(naamVeld);
        var leeftijdCorrect = validateVeld(leeftijdVeld);
        var emailCorrect = validateVeld(emailVeld);
        var geslachtCorrect = validateRadio('geslacht');
        var werkenCorrect = validateCheckboxGroup('werken[]', 3);
        
        var allesCorrect = naamCorrect && leeftijdCorrect && emailCorrect && geslachtCorrect && werkenCorrect;
        
        if(!allesCorrect){
            eersteFout.focus();
            e.preventDefault();
        }  
        e.preventDefault();
    })
	
    
    
    var eventList = ['blur', 'keyup', 'click'];

    var formObjecten = [naamVeld, leeftijdVeld, emailVeld];
    var radioObjecten = d.getElementsByName('geslacht');
    var werkenObjecten = d.getElementsByName('werken[]');

    for(hetEvent of eventList){
        for(formObject of formObjecten){
            formObject.addEventListener(hetEvent, function(e){
                validateVeld(this);
            });
        }
        for(radioObject of radioObjecten){
            radioObject.addEventListener(hetEvent, function(e){
                validateRadio(this.name);
            });
    }
        for(werkObject of werkenObjecten){
            werkObject.addEventListener(hetEvent, function(e){
                validateCheckboxGroup(this.name, 3);
            });           
    }
} //einde eventLoop
	
}); // Einde window.onload

//captcha



