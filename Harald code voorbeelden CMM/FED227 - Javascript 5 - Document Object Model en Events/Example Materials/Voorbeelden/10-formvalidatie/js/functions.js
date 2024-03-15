		function valideerForm(){
			
			// initialiseer de var's
			var correct = true; // de scheidsrechter, houdt bij of er een fout is gemaakt
			var error = "Oeps, er is iets mis gegaan:\n"; // gebruiken voor eventuele errors
			//alert( "In de functie" );
			// haal de inhoud van het naamveld op...
			var naam = document.getElementById( "naam" ).value;
			var dnaam = document.getElementById( "naam" ).defaultValue;
			
			// valideer de inhoud van naam...
			if( naam.length <= 1 || naam == dnaam ){
				// als de conditie waar is, dus het is FOUT...
				correct = false; 
				error += "Een naam is verplicht!\n"; // tel deze string op bij de error var
				document.getElementById( "naam_error" ).style.display = "inline";// zet de error span op de pagina aan			
			} else {
				// als het GOED is...
				document.getElementById( "naam_error" ).style.display = "none";
			}
			
			// haal de inhoud uit het emailveld
			var email = document.getElementById( "email" ).value;
			var demail = document.getElementById( "email" ).defaultValue;
						
			// stuur de email var naar de functie valideerEmail...true of false antwoord
			var res = valideerEmail( email );
			
			// valideer de inhoud van email
			if( !res || email == demail ){
				// als de conditie waar is, dus als het FOUT is
				correct = false; 
				error += "Een email is verplicht!\n"; // tel deze string op bij de error var
				document.getElementById( "email_error" ).style.display = "inline";// zet de error span op de pagina aan			
			} else {
				document.getElementById( "email_error" ).style.display = "none";
			}
			
			// valideer de inhoud van bedrijf
			var bedrijf = document.getElementById( "bedrijf" ).value;
			var dbedrijf = document.getElementById( "bedrijf" ).defaultValue;
			
			if( bedrijf == "" || bedrijf == dbedrijf){
				// als de conditie waar is, dus als het FOUT is
				correct = false; 
				error += "Een bedrijfsnaam is verplicht!\n"; // tel deze string op bij de error var
				document.getElementById( "bedrijf_error" ).style.display = "inline";// zet de error span op de pagina aan	
			} else {
				// als de conditie niet waar is...dus er is iets ingevuld
				document.getElementById( "bedrijf_error" ).style.display = "none";
			}
			
			// valideer de inhoud van telefoonnummer
			var tel = document.getElementById( "tel" ).value;
			var dtel = document.getElementById( "tel" ).defaultValue;
			
			if( tel.length != 10 || tel == dtel ){ // als tel niet gelijk is aan 10 karakters...letters of cijfers
				// dus het is fout..
				correct = false;
				error += "Een telefoonnummer bestaat uit 10 cijfers!\n";
				// voor de zekerheid de tweede foutmelding uitzetten
				document.getElementById( "tel_error2" ).style.display = "none";
				// presenteer de goede foutmelding
				document.getElementById( "tel_error" ).style.display = "inline";
			} else if( isNaN( tel ) ){ // is tel wel een nummer
				// dus het zijn geen cijfers
				correct = false;
				error += "Stop met hacken idioot!";
				// we zetten de eerste foutmelding uit
				document.getElementById( "tel_error" ).style.display = "none";
				// presenteer de goede foutmelding
				document.getElementById( "tel_error2" ).style.display = "inline";								
			} else { // als het goed is
				// foutmeldingen verbergen
				document.getElementById( "tel_error2" ).style.display = "none";
				document.getElementById( "tel_error" ).style.display = "none";
			}

			// als alles goed is verstuur dan het formulier
			if( !correct ){ // correct == false
				alert( error ); // eerst de alert, dan pas de return false
				return false;				
			} else {
				return true; // verzend het formulier als er geen fouten zijn gemaakt
			}
			
			
		} // sluit curly van valideerForm
		
		// deze functie verwacht een argument, zonder arg zal de functie niets doen
		// valideerEmail( email );
		function valideerEmail( emailadres ){
	
			var patroon = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
			return patroon.test( emailadres );
				
		}
		
		// reset de foutmeldingen in de pagina als er op de reset knop geklikt wordt
		function resetForm(){
			// zet de foutmeldingen uit
			document.getElementById( "naam_error" ).style.display = "none";
			document.getElementById( "email_error" ).style.display = "none";
			document.getElementById( "bedrijf_error" ).style.display = "none";
			document.getElementById( "tel_error" ).style.display = "none";
			document.getElementById( "tel_error2" ).style.display = "none";
			// zet de textkleur en font style weer op default...grijs en italic
			document.getElementById( "naam" ).style.color = "#AAA";
			document.getElementById( "naam" ).style.fontStyle = "italic";			
			document.getElementById( "email" ).style.color = "#AAA";
			document.getElementById( "email" ).style.fontStyle = "italic";
			document.getElementById( "bedrijf" ).style.color = "#AAA";
			document.getElementById( "bedrijf" ).style.fontStyle = "italic";
			document.getElementById( "tel" ).style.color = "#AAA";
			document.getElementById( "tel" ).style.fontStyle = "italic";
		}
		
		// als er een focus op het veld plaatsvind wis dan de defaultValue als die gelijk is aan de value
		function wisText( veld ){
			if( veld.defaultValue == veld.value ){
				veld.value = "";
				veld.style.color = "#000";
				veld.style.fontStyle = "normal";
			}				
		}
		
		function resetText( veld ){
			if( veld.value == "" ){
				veld.value = veld.defaultValue;
				veld.style.color = "#AAA";
				veld.style.fontStyle = "italic";
			}			
		}
		
		// de anonieme functie die wordt aangeroepen door het onload event van de pagina
		window.onload = function(){
			
			// als js aanstaat dan...
			document.getElementById( "formholder" ).style.display = "block";
			document.getElementById( "jsUit" ).style.display = "none";
			
			// bind de onsubmit en onreset aan het formulier
			document.getElementById( "contactForm" ).onsubmit = valideerForm;
			document.getElementById( "reset" ).onclick = function(){
				return confirm( "Weet u het zeker?" );
			};
			document.getElementById( "contactForm" ).onreset = resetForm;
			
			// bind de onfocus en onblur events aan de formfields
			document.getElementById( "naam" ).onfocus = function(){
				wisText( this );
			};
			document.getElementById( "naam" ).onblur = function(){
				resetText( this );
			};
			document.getElementById( "email" ).onfocus = function(){
				wisText( this );
			};
			document.getElementById( "email" ).onblur = function(){
				resetText( this );
			};
			document.getElementById( "bedrijf" ).onfocus = function(){
				wisText( this );
			};
			document.getElementById( "bedrijf" ).onblur = function(){
				resetText( this );
			};
			document.getElementById( "tel" ).onfocus = function(){
				wisText( this );
			};
			document.getElementById( "tel" ).onblur = function(){
				resetText( this );
			};
			
			// zet de default waardes van de velden neer
			document.getElementById( "naam" ).defaultValue = "bv Kasper";
			document.getElementById( "email" ).defaultValue = "bv naam@domein.nl";
			document.getElementById( "bedrijf" ).defaultValue = "bv Trinion";
			document.getElementById( "tel" ).defaultValue = "bv 0612345678";
						
		}
		
		
		
		
		
		
		
		