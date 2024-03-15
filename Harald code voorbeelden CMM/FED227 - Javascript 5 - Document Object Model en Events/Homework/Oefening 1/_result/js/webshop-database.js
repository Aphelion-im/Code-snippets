var producten = []; // Lege array aanmaken voor alle producten.

var product1 = { // Een webshopproduct omschrijven met een object (literal notation).
	titel 			:	"Pedigree Maaltijdzakjes Multipak", // Een object property en value pair
	omschrijving	:	"Heerlijk natvoer in gelei voor volwassen honden, met 4 verschillende smaken, 100% evenwichtig, zonder suikertoevoeging, zonder kunstmatige kleur-, smaak- & conserveringsstoffen.",
	afbeelding		:	"pedigree-voer.jpg",
	prijs			:	"€3,99",
};
producten.push (product1); 
/* 
	Product #1 toevoegen aan de producten array. Let op: een array is zero-based! Dus 
	product #1 is op te vragen met de statement: 
	
	producten[0];
*/

var product2 = {
	titel 			:	"Hondenhok \"Spike Special\"",
	omschrijving	:	"Puntdak-Hondenhok van voorgevolgd granenhout, beschermt uw hond tegen zon, wind, regen en sneeuw - eenvoudige montage.",
	afbeelding		:	"hondenhok.jpg",
	prijs			:	"€74,99",
};
producten.push (product2);


var product3 = {
	titel 			:	"Heim BioThane® Hondenriem Neon-Geel",
	omschrijving	:	"Heerlijk natvoer in gelei voor volwassen honden, met 4 verschillende smaken, 100% evenwichtig, zonder suikertoevoeging, zonder kunstmatige kleur-, smaak- & conserveringsstoffen",
	afbeelding		:	"hondenriem.jpg",
	prijs			:	"€3,99",
};
producten.push (product3);

/*
	De webshopproducten omschrijven we als objecten (de object literal notatie is hier 
	gebruikt). Elk object heeft vier properties (object variabelen).
	
	We stoppen elk product in de producten array.
	
	Vraag: 		Hoe haal je uit de producten array de titelgegevens van product #3?
	Antwoord:	producten[2].titel;
*/