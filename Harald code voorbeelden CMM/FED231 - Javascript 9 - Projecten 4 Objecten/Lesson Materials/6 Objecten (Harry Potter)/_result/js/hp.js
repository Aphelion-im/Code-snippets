window.onload = function(){
	/* 	======================================================================	
		Browser & Object sniffing
	=========================================================================== */
	if(!document.getElementById("bookContent") || !document.getElementById("bookMenu")) return false;
	if(typeof boeken == "undefined" || boeken.length < 2) return false; // Bestaat het object boeken of bevat het minder dan 2 items?

	
	/* 	======================================================================	
		Variables
	=========================================================================== */
	var bookContent = document.getElementById("bookContent");
	var bookMenuLinks = document.getElementsByClassName("bookMenuLink");


	/* 	======================================================================	
		Initialisatie & DOM Manipulatie
	=========================================================================== */
	// Eerst de standaard melding weghalen.
	bookContent.innerHTML = "";
	
	// #bookContent article-tag vullen met twee divs.
	var dynamicCover = document.createElement("div");
	dynamicCover.setAttribute("class", "dynamicCover");
	dynamicCover.setAttribute("id", "bookCover");
	
	// .dymanicCover div voor #bookContent
	var dynamicCoverImg = document.createElement("img");
	dynamicCoverImg.setAttribute("width", "200");
	dynamicCoverImg.setAttribute("height", "300");
	
	// .dynamicText div voor #bookContent
	var dynamicText = document.createElement("div");
	dynamicText.setAttribute("class", "dynamicText");
	
	var bookEng = document.createElement("h1");
	bookEng.setAttribute("id", "bookEng");
	
	var bookDutch = document.createElement("h2");
	bookDutch.setAttribute("id", "bookDutch");
	
	var bookSynopsis = document.createElement("p");
	bookSynopsis.setAttribute("id", "bookSynopsis");
	
	var bookPrice = document.createElement("p");
	bookPrice.setAttribute("id", "bookPrice");
	
	var bookIsbn = document.createElement("p");
	bookIsbn.setAttribute("id", "bookIsbn");
	
	dynamicCover.appendChild(dynamicCoverImg);
	
	bookContent.appendChild(dynamicCover);
	
	dynamicText.appendChild(bookEng);
	dynamicText.appendChild(bookDutch);
	dynamicText.appendChild(bookSynopsis);
	dynamicText.appendChild(bookPrice);
	dynamicText.appendChild(bookIsbn);
	
	bookContent.appendChild(dynamicText);
	
	// Eerste boek klaarzetten
	// In het menu, alle thumbs dimmen, behalve de eerste.
	for(var i=1;i<bookMenuLinks.length; i++){
		updateThumb('up', 'off', bookMenuLinks[i].firstChild);
	}
	
	updateBook(1);

	

	/* 	======================================================================	
		Functions
	=========================================================================== */
	function updateBook(whichBook){
		bookEng.textContent = boeken[whichBook].title;
		bookDutch.textContent = boeken[whichBook].dutchTitle;
		bookSynopsis.textContent = boeken[whichBook].synopsis;
		dynamicCoverImg.src = "images/" + boeken[whichBook].image;
		dynamicCoverImg.alt = boeken[whichBook].title;
		
		// Prijs ombouwen
		var convertedPrice = boeken[whichBook].price.toString();
		bookPrice.textContent = "€" + convertedPrice.replace(".", ",");
		bookIsbn.textContent = "ISBN: #" + boeken[whichBook].isbn;
	}
	
	function updateThumb(replaceText, replaceTextWith, imageObject){
		var oldSource = imageObject.src;
		var newSource = oldSource.replace(replaceText, replaceTextWith);
		imageObject.src = newSource;
	}
	
	/* 	======================================================================	
		Event binding
	=========================================================================== */
	var eventLijst = ['click', 'mouseover', 'mouseout'];
	for(hetEvent of eventLijst){ 
		for(var i = 0; i<bookMenuLinks.length; i++){
			bookMenuLinks[i].addEventListener(hetEvent, function(e){
				if(e.type == 'click'){
					e.preventDefault();
					for(var i=0;i<bookMenuLinks.length; i++){
						updateThumb('up', 'off', bookMenuLinks[i].firstChild);
					}
					updateThumb('off', 'up', this.firstChild);
					updateBook(this.getAttribute("id").substr(1));
				}
			}, false);
		}
	}
}