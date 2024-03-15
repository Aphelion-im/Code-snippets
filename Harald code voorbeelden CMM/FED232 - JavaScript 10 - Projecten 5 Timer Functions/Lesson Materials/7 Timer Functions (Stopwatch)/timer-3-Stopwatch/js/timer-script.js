window.onload = function(){
	/* 	======================================================================	
		Browser & Object sniffing
	=========================================================================== */
	if(!document.getElementById) return false; // Als de browser niet getElementById kan, STOP DAN!

	
	
	/* 	======================================================================	
		JavaScript check
	=========================================================================== */		
	var hiddenElements = document.getElementsByClassName('js-disabled');
    for(element of hiddenElements){
        document.body.removeChild(element);
    }
	
	/* 	======================================================================	
		Variables
	=========================================================================== */	
	// Variabele voor de teller
	// Variabele voor de javaScript timer.
	var stopwatchRunning = false; // De stopwatch loopt in het begin nog niet.
    var counter = 0;
    var stopwatch; //komt setInterval object in
	
	
	/* 	======================================================================	
		Knoppen Initialisation & Event binding
	=========================================================================== */
	// Timer maken
	var timerDiv = document.createElement("div");
	timerDiv.setAttribute('id', 'timer');
    var timerText = document.createTextNode('00:00:00');
    timerDiv.appendChild(timerText);
    document.body.appendChild(timerDiv);
    
	// Knoppen maken
	
	
    var knoppen = [{name: 'start'},{name: 'stop'},{name: 'reset'}];
    
    for(knop of knoppen){
				var button = document.createElement("div");
				button.setAttribute('aria-role', 'button');
				button.setAttribute('id', 'btn' + knop.name);
				button.textContent = knop.name;
				document.body.appendChild(button);
        
    }
    
    
	/* 	======================================================================	
		Functions
	=========================================================================== */
	function updateStopwatch(){
	
	}
	
	function stopStopwatch(){
	
	}
	
	function resetStopwatch(){
	
	}
};