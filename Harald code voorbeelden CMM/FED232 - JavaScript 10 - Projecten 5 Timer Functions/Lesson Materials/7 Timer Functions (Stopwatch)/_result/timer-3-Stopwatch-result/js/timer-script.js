window.onload = function(){
	/* 	======================================================================	
		Browser & Object sniffing
	=========================================================================== */
	if(!document.getElementById) return false; // Als de browser niet getElementById kan, STOP DAN!

	
	
	/* 	======================================================================	
		JavaScript check
	=========================================================================== */		
	var hiddenElements = document.getElementsByClassName("js-disabled"); // Maak een array van alle html objecten die deze class hebben.
	for(i=0;i<hiddenElements.length; i++){
		document.body.removeChild(hiddenElements[i]); // Haal alle childs weg uit de body met de class name "js-disabled"
	}
	
	
	
	/* 	======================================================================	
		Variables
	=========================================================================== */	
	var counter = 0; // Variabele voor de teller
	var stopwatch; // Variabele voor de javaScript timer.
	var stopwatchRunning = false; // De stopwatch loopt in het begin nog niet.
	
	
	
	/* 	======================================================================	
		Knoppen Initialisation & Event binding
	=========================================================================== */
	// Timer maken
	var timerDiv = document.createElement("div");
	timerDiv.setAttribute("id", "timer");
	var timerText = document.createTextNode("00:00");
	timerDiv.appendChild(timerText);
	document.body.appendChild(timerDiv);
	
	// Knoppen maken
	var btnStart = new Object(); 
	btnStart.name = "Start";
	
	var btnStop = new Object(); 
	btnStop.name = "Stop";
	
	var btnReset = new Object(); 
	btnReset.name = "Reset";
	
	var knoppen = [btnStart, btnStop, btnReset];
	
	for(i=0; i<knoppen.length; i++){
		var knop = document.createElement("div");
		knop.setAttribute("id", "btn" + knoppen[i].name);
		knop.setAttribute("aria-role", "button");
		var knopTekst = document.createTextNode(knoppen[i].name);
		knop.appendChild(knopTekst);
		document.body.appendChild(knop);
		
		knop.addEventListener('click', function(e){
			if(this.textContent == "Start"){
				if(!stopwatchRunning){
					stopwatch = setInterval(updateStopwatch, 10);
					stopwatchRunning = true;
				}
			} else if(this.textContent == "Stop"){
				stopStopwatch();
			} else { // Reset
				resetStopwatch();
			}
		}, false);
	} // Einde for
	
	
	
	/* 	======================================================================	
		Functions
	=========================================================================== */
	function updateStopwatch(){
		counter ++;
		
		var stopwatchDisplay = counter / 100; // Een counter van 552 = 5520 milliseconde. / 100 = 5.52 seconde
		if(stopwatchDisplay > 59.99){
			counter = 0;
		}
		
		stopwatchDisplay = stopwatchDisplay.toString(); // Getal omzetten naar string...
		stopwatchDisplay = stopwatchDisplay.replace(".", ":"); // .. Zodat ik de '.' kan replacen met ':'
		
		if(counter < 1000){ // Voorloopnul
			stopwatchDisplay = "0" + stopwatchDisplay;
		}
		
		if(stopwatchDisplay.length == 4){
			stopwatchDisplay = stopwatchDisplay + "0";
		} else if( stopwatchDisplay.length == 2){
			stopwatchDisplay = stopwatchDisplay + ":00";
		}

		timerDiv.textContent = stopwatchDisplay; // De timerDiv updaten.
	}
	
	function stopStopwatch(){
		if(stopwatchRunning){
			stopwatchRunning = false;
			clearInterval(stopwatch);
		}
	}
	
	function resetStopwatch(){
		counter = 0;
		stopwatchRunning = false;
		clearInterval(stopwatch);
		timerDiv.textContent = "00:00";
	}
};