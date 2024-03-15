window.onload = function(){ // Wanneer het document compleet geladen is, voer de anonieme functie uit, die we in een IFFE gestopt hebben.
	/* 	======================================================================	
	Object sniffing
	=========================================================================== */
	if(!document.getElementById("cmmContactForm")) return false; // Als er geen cmmContactForm is, STOP DAN!
	
	
	
	/* 	======================================================================	
		Variables
	=========================================================================== */
	var submitKnop = document.getElementById("submit"); // Submitknop
	var naamVeld = document.getElementById("naam"); // TekstVeld 'naam'
	var leeftijdVeld = document.getElementById("leeftijd"); // NumberVeld 'leeftijd'
	var emailVeld = document.getElementById("email"); // EmailVeld 'email'
	
	
	
	/* 	======================================================================	
		Functions
	=========================================================================== */
	// Deze functie valideert text, number of email fields. De enige parameter is welkVeld: een string met de id-attribute van het te controleren veld.
	function validateVeld(welkVeld){
		var valid = false; // Een veld is invalid, tenzij het tegendeel bewezen wordt.
		
		if(welkVeld.type == "text"){ // Valideer een text veld.
			var pattern = /^[a-zA-Z\s]{4,512}$/;
			valid = pattern.test(welkVeld.value); // De .test() method is een ingebouwede JS functie en geeft true of false terug afhankelijk van de uitkomst van de regular expression.
		} else if (welkVeld.type == "number"){ // Valideer een number veld.
			var min = parseInt(welkVeld.getAttribute("min")); // String omzetten naar integer number data type.
			var max = parseInt(welkVeld.getAttribute("max"));
			var userInput = parseInt(welkVeld.value);
			valid = ((userInput >= min) && (userInput <= max)); // Een weldige waarde ligt boven de waarde van het min-attribute, en onder de waarde van het max-attribute.
		} else if(welkVeld.type == "email"){  // Valideer een email veld.
			var apenstaart = welkVeld.value.indexOf("@"); // Is er een apenstaart in de string? (geeft -1 terug als er geen apenstaart in de string voorkomt).
			var punt = welkVeld.value.lastIndexOf("."); // Laatste punt van de string (geeft -1 terug als er geen punt in de string voorkomt).
			var lengte = welkVeld.value.length; // Lengte van de string.
			valid = ((apenstaart > 0) && (punt > apenstaart) && (lengte - 2 > punt)); // Is er een apenstaart EN staat de laatste punt na de apenstaart EN staat er tenminste twee characters achter de laatste punt?
		}
		
		// Genereer feedback voor de gebruiker.
		createFeedback(welkVeld, valid);
		return valid; // De functie geeft true or false terug, zodat we in de submitKnop.addEventListener() een lijst kunnen bouwen met de true or false uitkomst voor alle te controleren velden.
	}
	
	/* Deze functie valideert radio buttons. Er zijn drie parameters: 
		1. welkFormulier: een string met de id-attribute van het te controleren form.
		2. welkeRadio: een string met de name-attribute van de te controleren set radio buttons.
		3. laatsteRadioButton: een string met de id-attribute van de laatste radio button: hierachter in de HTML willen we de feedback neerzetten.
	*/
	function validateRadio(welkFormulier, welkeRadio, laatsteRadioButton){
		valid = false;
		if(document.getElementById(welkFormulier).geslacht.value){ // Heeft het formulierelement van cmmContactForm met de name 'geslacht' een value? Of te wel: is er een radio button van geslacht ooit aangeklikt door de user?
			valid = true;	
		}
		createFeedback(document.getElementById(laatsteRadioButton), valid);
	}

	// Deze functie creeert onze user feedback (goed of niet goed ingevuld).
	function createFeedback(welkVeld, testCondition){
		// Bouw een array met eventueel aanwezige span tags in de parentNode van welkVeld. De parentNode is in ons geval altijd de parent DIV-tag van het betreffende formulier element.
		var iconLijst = welkVeld.parentNode.getElementsByTagName("span");
		for(i=0; i<iconLijst.length; i++){ // Anders gaan we door de array met span tags heen.
			welkVeld.parentNode.removeChild(iconLijst[i]); // Haal alle de span-tag uit de div tag weg.
		}
		
		
		/*
			Font Awesome icons genereren voor de user feebdack, met daar achter tekst.
			Voorbeeld van de te maken HTML-code:
			
			<div><!-- Dit is de welkVeld.parentNode -->
				<label for="naam">Naam:</label>
				<input type="text" name="naam" id="naam" value="" placeholder="voor- en achternaam" style="background-color: rgba(255, 0, 0, 0.2); border-color: rgb(255, 0, 0);"><!-- Dit is welkVeld. testCondition is false, want rode stijl kleuren. -->
				<span><!-- Dit is iconContainer -->
					<span aria-hidden="true" class="fa fa-exclamation-circle"></span><!-- Dit is iconFa. -->
					Controleer dit veld aub. <!-- Dit is iconText. --> 
				</span> 
			</div>
		*/		
		var iconFa = document.createElement("span"); // span-tag aanmaken. We zetten straks een class op deze span voor een font awesome icon.
		iconFa.setAttribute("aria-hidden", "true"); // span-tag voorzien van een aria-hidden attribute, met de waarde "true" (voor de accessibility)
		
		var iconContainer = document.createElement("span");
		var iconText; // variabele declareren, maar nog niet assignen.
		
		testCondition ? welkVeld.style.backgroundColor = "rgba(0,255,0,0.2)" 	: welkVeld.style.backgroundColor = "rgba(255,0,0,0.2)"; // Is testCondition true? Maar de style.backgroundColor van welkVeld dan groen. Anders, maar het rood.
		testCondition ? welkVeld.style.borderColor = "rgba(0,255,0,1)" 			: welkVeld.style.borderColor = "rgba(255,0,0,1)";
		testCondition ? iconFa.setAttribute("class", "fa fa-check-circle") 		: iconFa.setAttribute("class", "fa fa-exclamation-circle"); //Een font awesome class instellen afhankelijk van de testCondition.
		testCondition ? iconText = document.createTextNode(" ") 				: iconText = document.createTextNode("Controleer dit veld aub."); // Is testCondition true? Dan een lege tekstNode aanmaken. Anders een tekst maken met een waarschuwing.
		
		iconContainer.appendChild(iconFa); // De span met de fontAwesome-class in de iconContainer zetten.
		iconContainer.appendChild(iconText); // Daarna zetten we naast de icon tekst neer.
		welkVeld.parentNode.appendChild(iconContainer); // Daarna zetten we in de parent van welkVeld die iconContainer neer (als laatste child).
	}
	
	
	
	/* 	======================================================================	
		Events
	=========================================================================== */
	submitKnop.addEventListener('click', function(e){ // Click eventListener voor de submitKnop.
		var naamCorrect = validateVeld(naamVeld); // validateVeld returned true or false.
		var leeftijdCorrect = validateVeld(leeftijdVeld);
		var emailCorrect = validateVeld(emailVeld);
		var geslachtCorrect = validateRadio("cmmContactForm", "geslacht", "geslachtA");
		var allesCorrect =  naamCorrect && leeftijdCorrect && emailCorrect && geslachtCorrect; // allesCorrect wordt alleen true als ALLE velden goed zijn ingevuld (alle variabele zijn true, dan is allesCorrect ook true).
		if(!allesCorrect) // Er zijn fouten ontdekt want allesCorrect is NIET true...
			e.preventDefault(); // Werking van de submitKnop blokkeren: we willen de form action NIET uitvoeren.
	}, false);
	
	/* blur en keyup events binden voor een drietal formulier elementen */
	var formObjectToCheck = [naamVeld, leeftijdVeld, emailVeld]; // Array met drie HTML-objecten die voorzien gaan worden van twee events: blur en keyup.
	var eventLijst = ['blur', 'keyup']; // De events die we willen binden aan de drie HTML-objecten.
	for(hetEvent of eventLijst){ // Loop eerst door de eventLijst heen...
		for(var i=0; i<formObjectToCheck.length; i++){ // ... Loop daarna door alle HTML-objecten heen die de events moeten krijgen.
			formObjectToCheck[i].addEventListener(hetEvent, function(e){ // Bind de events blur en keyup...
				validateVeld(this); // Als de blur of keyup event plaats vindt op betreffende HTML-object, voer dan de validateVeld-functie uit. Geef het betreffende HTML-object mee als argument (this).
			}, false);
		} // Einde loop HTML-objecten
	} // Einde for hetEvent of eventLijst
}; // Einde window.onload