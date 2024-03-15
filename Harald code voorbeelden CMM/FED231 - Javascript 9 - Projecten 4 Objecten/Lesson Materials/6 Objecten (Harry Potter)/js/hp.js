window.onload = function(){
//	return false; // WEGHALEN BIJ HET BEGIN VAN DE OPDRACHT!
	
	
	/* 	======================================================================	
		Browser & Object sniffing
	=========================================================================== */
	if(!document.getElementById("bookContent")) return false;
	if(!document.getElementById("bookMenu")) return false;
    
    if(typeof boeken == 'undefined' || boeken.length < 2 ){ //normaal < 1
        var melding = 'Database geeft geen resultaat, probeer iets anders';
        return false; 
    //als er geen (of te weinig) boeken zijn, stop!
    } 
	

	
	/* 	======================================================================	
		Variables
	=========================================================================== */
	var bookContent = document.getElementById("bookContent");              //reference
	var bookMenuLinks = document.getElementsByClassName("bookMenuLink");   //Array


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
    updateBoek(1);
	// In het menu, alle boeken inactief maken, behalve de eerste.
    updateThumb(bookMenuLinks, bookMenuLinks[0]); 
    //dus update de thumb van de first child
    
	
	
	/* 	======================================================================	
		Functions
	=========================================================================== */
	/**
 * Functie updateBoek bouwt en vult dynamische content in het article
 * @param integer welkboek 
 */
    function updateBoek(welkBoek){
        var boek = boeken[welkBoek];
        bookDutch.textContent = boek.dutchTitle;
        bookEng.textContent = boek.engTitle;
        bookSynopsis.innerHTML = boek.synopsis;
        bookPrice.innerHTML = '&euro; ' + boek.prijs.toFixed(2).replace('.', ','); 
        //met toFixed rond hij af
        //met replace vervangt hij dus
        bookIsbn.textContent = 'ISBN: #' + boek.isbn;
        dynamicCoverImg.src = 'images/' + boek.cover_image;
        //let op: een pad naar de folders van images, css en JS is vanuit de optiek van HTML
        dynamicCoverImg.alt = boek.engTitle;
    }
    
    
    //om de thumbs grijs te maken
    //weet ik veel joh, rare shit
    /**
 * alle links inactief maken behalve de eerste
 * @param array lijstThumbs met alle link objecten
 * @param object actieveThumbs link object met daarin een image
 */
    function updateThumb(lijstThumbs, actieveThumbs){
        for(thumb of lijstThumbs){
            var imageObject = thumb.firstChild;
            var oldSrc = imageObject.src;
            if(thumb == actieveThumbs){
                var newSrc = oldSrc.replace('off', 'up');
            }else{
                var newSrc = oldSrc.replace('up', 'off');
            }
            imageObject.src = newSrc;
        }
    }
	
	
	/* 	======================================================================	
		Event binding
	=========================================================================== */
    

	var eventList= ['click'];
    
    for(hetEvent of eventList){
        for(menuLink of bookMenuLinks){  //we halen menuLinks uit bookmenuLinks
            menuLink.addEventListener(hetEvent, function(e){
                if(e.type == 'click'){
                    e.preventDefault();
                    updateBoek(parseInt (this.getAttribute('id').substr(1)));
                    updateThumb(bookMenuLinks, this);
                }
            });
        }
    }
}




























