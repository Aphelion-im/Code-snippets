// ##################################
// # OOP met new Object()
// ##################################

var persoon = new Object();
persoon.naam = 'Harald';
persoon.leeftijd = 23;
persoon.begroet = function( bezoeker ) {
	alert('Hallo ' + bezoeker + '! Dit is ' + this.naam);
};

persoon.begroet('Klaas');


// ##################################
// # OOP met Literal syntax {}
// ##################################

var persoon = {
	'naam'   	: 'Harald',
	'leeftijd'	: 23,
	'begroet'	: function ( bezoeker ) {
		alert('Hallo ' + bezoeker + '! Dit is ' + this.naam);
	}
};

persoon.begroet('Klaas');


// ##################################
// # OOP met nieuwe Literal syntax {}
// ##################################

var persoon = {
	naam		: 'Harald',
	leeftijd	: 23,
	begroet ( bezoeker ) {
		alert('Hallo ' + bezoeker + '! Dit is ' + this.naam);
	}
};

persoon.begroet('Klaas');







// ##################################
// # OOP met Constructor Functie syntax 
// ##################################

var Persoon = function (_naam, _leeftijd) {
    this.naam = _naam;
    this.leeftijd = _leeftijd;
    this.begroet = function ( bezoeker ) {
        alert('Hallo ' + bezoeker + '! Dit is ' + this.naam);
    }
}

var persoon1  = new Persoon('Harald', 23); 
var persoon2  = new Persoon('Piet', 34); 

persoon1.begroet('Klaas');
persoon2.begroet('Klaas');


// ##################################
// # OOP met Class syntax ES6+
// ##################################

class Persoon {

    constructor (_naam, _leeftijd) {
        this.naam = _naam;
        this.leeftijd = _leeftijd;
    }

    begroet ( bezoeker ) {
        alert('Hallo ' + bezoeker + '! Dit is ' + this.naam);
    }

}

var persoon1  = new Persoon('Harald', 23); 
var persoon2  = new Persoon('Piet', 34); 
var persoon3  = new Persoon('Jan', 45); 

persoon1.begroet('Klaas');
persoon2.begroet('Klaas');
persoon3.begroet('Klaas');

// Hallo Klaas! Dit is Harald
// Hallo Klaas! Dit is Piet
// Hallo Klaas! Dit is Jan
