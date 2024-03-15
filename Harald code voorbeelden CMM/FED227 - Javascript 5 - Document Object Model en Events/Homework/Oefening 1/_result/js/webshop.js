window.onload = function(){
	var productContainer = document.createElement("section");
	productContainer.setAttribute("id", "productContainer"); // productContainer.id = "productContainer"; is ook goed.
	var deH1 = document.createElement("h1");
	var textVoorH1 = document.createTextNode("Webshop producten"); // Tekst voor de h1-tag.
	deH1.appendChild(textVoorH1); // De tekst in de h1-tag stoppen.
	productContainer.appendChild(deH1);  // De h1 in de #productContainer stoppen.
	document.body.appendChild(productContainer); // De #productContainer in de body-tag stoppen.
	
	for(var i = 0; i<producten.length; i++){ // Voor elke product in de array...
		// div maken
		var product = document.createElement("article");
		product.setAttribute("class", "product");
		product.setAttribute("id", "product" + i);
		
		// img maken
		var afbeelding = new Image();
		afbeelding.src = "images/" + producten[i].afbeelding;
		afbeelding.alt = producten[i].titel; // Alt-attribute instellen met de titelinformatie.
		
		// h2-tag maken voor de titel
		var titel = document.createElement("h2");
		var textVoorH2 = document.createTextNode(producten[i].titel);
		titel.appendChild(textVoorH2);
		
		// p-tag maken voor de omschrijving
		var paragraaf = document.createElement("p");
		var textVoorParagraaf = document.createTextNode(producten[i].omschrijving);
		paragraaf.appendChild(textVoorParagraaf);
		
		// p-tag maken voor de prijs
		var prijs = document.createElement("p");
		var textVoorPrijs = document.createTextNode(producten[i].prijs);
		prijs.appendChild(textVoorPrijs);
		
		// Tags in de article stoppen en als laatste de article in de #productContainer.
		product.appendChild(titel);
		product.appendChild(afbeelding);
		product.appendChild(paragraaf);
		product.appendChild(prijs);
		productContainer.appendChild(product);
	}	
}