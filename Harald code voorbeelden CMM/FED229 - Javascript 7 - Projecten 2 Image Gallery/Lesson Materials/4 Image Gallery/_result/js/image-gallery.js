/*
	Project:
		Een interactieve image gallery met roll-over thumbnails.
		
	Werking van de code: 
		1.	Controleer of de noodzakelijke HTML-elementen voorkomen in het HTML-document.
		
		2. 	Ga met de for loop door alle a-tags van het document heen.
		
		3.	Check de a-tags de class a.galleryThumb hebben.
		
		4.	Als dat zo is, en is het de eerste a.galleryThumb, bouw dan met deze 
			informatie de hoofdimage van de gallery.
			
			<div id="galleryContainer">
				<figure>
					<img src="images/boot.jpg" alt="Een boot uit de Gouden Eeuw.">
					<figcaption>Een boot uit de Gouden Eeuw.</figcaption>
				</figure>
			</div>
					
		5. 	De hoofdimage in een figure-tag zetten.
		
		6. 	De figure-tag voorzien van een figcaption-tag. De figcaption krijgt de 
			tekstinhoud van de eerste a.galleryThumb title.
		
		7. 	De figure-tag in de #galleryContainer stoppen.
		
		8. 	Voor elke a.galleryThumb een thumbnail image aanmaken.
		
			<a class="galleryThumb" href="images/boot.jpg" title="Een boot uit de Gouden Eeuw.">
				<img src="images/boot-thumb-normal.jpg" alt="Een boot uit de Gouden Eeuw." data-basename="boot">
			</a>
			
		9. 	Elke a.galleryThumb voorzien van click, mouseover en mouseout events. 
			De mouse events geven de thumbnails een roll-over effect. De click-event 
			verandert de hoofdimage in een hi-res versie van de betreffende aangeklikte 
			afbeelding.
		
		10.	Alle graphics preloaden.		
*/
	
window.onload = function(){	
	/* 	======================================================================	
		Object sniffing
	=========================================================================== */
	/* 
		Onderstaande code mag alleen worden uitgevoerd als het HTML-document twee 
		HTML-Objecten heeft met de id's #galleryContainer en  #galleryPagination.
	*/
	if(!document.getElementById("galleryContainer")) return false;
	if(!document.getElementById("galleryPagination")) return false;
	
	
	
	/* 	======================================================================	
		Variables
	=========================================================================== */
	var galleryContainer = document.getElementById("galleryContainer");
	var galleryPagination = document.getElementById("galleryPagination");
	var imgDir = "images/"; // Verwijzing naar de img map.
	var firstGalleryThumb = false;
	var eventList = ['click', 'mouseover', 'mouseout']; // Lijst met events die we willen binden aan de a.galleryThumbs.
	var imagesList = []; // Array te vullen met images die we willen voorladen.
	var preloadedImages = []; // Array voor reeds voorgeladen images.
	
	
	
	/* 	======================================================================	
		Image Gallery
	=========================================================================== */
	for(var i=0; i<document.links.length; i++){ // Ga door ALLE a-tags heen van het document.
		if(document.links[i].className != 'galleryThumb') continue; // Als de a-tag NIET de classname .galleryThumb heeft, gaan we DIRECT naar de volgende iteratie van de for-loop. Onderstaande code wordt dan ook NIET uitgevoerd.
	
		// Stap 4: Met de informatie van de eerste a.galleryThumb de hoofdimage van de gallery maken.
		if(firstGalleryThumb == false){ // Dankzij de firstGalleryThumb boolean wordt deze if code-block alleen tijdens de eerste for-iteratie uitgevoerd.
			firstGalleryThumb = true;
		
			// Maak een image object aan, zet de src van de image op de 'boot' graphic.
			var galleryImage = new Image();
			galleryImage.src = document.links[i].href; // Haal van de eerste a.galleryThumb de href op. Stop deze informatie in de src van de img.
			galleryImage.alt = document.links[i].title; // Haal van de eerste a.galleryThumb de title op. Stop deze informatie in de alt van de img.
			
			// Stap 5: Maak een figure tag aan en stop de image in de container
			var figure = document.createElement("figure"); 
			figure.appendChild(galleryImage);
			
			// Stap 6: figcaption-tag onderschrift aanmaken voor de galleryImage.
			var figCaption = document.createElement("figcaption"); // Maak een figcaption tag aan.
			figCaption.textContent = document.links[i].title; // Stop de title tekst van de eerste a.galleryThumb in de figcaption tag.
			figure.appendChild(figCaption); // Stop de figcaption in de figure-tag.
			galleryContainer.appendChild(figure); // Stop de figure in de div#galleryContainer
		}
	
		// Stap 8: Bouw een img thumb en zet de thumb in de a.galleryThumb.
		var thumb = new Image();
		var thumbUrl = document.links[i].href; // Bijvoorbeeld: "file:///Users/Student/Desktop/Image Gallery/images/boot.jpg"
		imagesList.push(thumbUrl); // Voeg de thumb toe aan de imagesList array om straks te kunnen preloaden.
	
		// Voor elke thumbnail moeten twee varianten worden gepreload: graphicNaam-thumb-normal.jpg en graphicNaam-thumb-over.jpg.
		var positieLaatsteSlash = thumbUrl.lastIndexOf("/")+1; // Character positie net ÉÉN karakter NA van de laatst voorkomende slash in de string (Let op: ZERO BASED!).
		var positieExtensie = thumbUrl.lastIndexOf("."); // Character positie van de laatst voorkomende punt in de string.
		var imageName = thumbUrl.substring(positieLaatsteSlash, positieExtensie); // Maak een substring na de laatste slash, en voor het laatste punt. Bijvoorbeeld: 'boot'.
		var imageExtensie = thumbUrl.substr(positieExtensie); // De extensie uit de string halen. Bijvoorbeeld '.jpg'.
		thumb.src = imgDir + imageName + "-thumb-normal" + imageExtensie; // Nieuwe string opbouwen voor de normal state en deze string toewijzen aan de src-attribute van de thumb.
		imagesList.push(imgDir + imageName + "-thumb-normal" + imageExtensie); // Voeg de normal state thumb toe om te preloaden.
		imagesList.push(imgDir + imageName + "-thumb-over" + imageExtensie); // Voeg de over state thumb toe om te preloaden.
	
		thumb.alt = document.links[i].title; // alt-attribute instellen.
		thumb.setAttribute("data-basename", imageName); // elke thumb een eigen 'nep' ID-attribute geven.
		
		// In de a.galleryThumb moet de thumb image komen te staan. Maar dan moeten we eerst de tekst uit de a.galleryThumb weghalen.
		document.links[i].textContent = "";
		document.links[i].appendChild(thumb);
	
		// Stap 9.
		// 1. Voorzie de elke a.galleryThumb een drie events: click, mouseover en mouseout.
		// 2. Blokkeer de werking van de href-attribute.
		// 3. Als er wordt geklikt: update de hoofimage van de gallery (aan de hand van gegevens die we hierboven al hebben staan).
		// 4. Bij mouseover en mouseout: update de thumbnail van de a.galleryThumb.
	
		// Voor elk item in de eventList array, maak een eventListener aan voor de a.galleryThumb.
		for(hetEvent of eventList){ // Ga drie keer door de array (click, mouseover, mouseout)
			document.links[i].addEventListener(hetEvent, function(e){
				// Als een event plaats vindt maakt JavaScript  automatisch event objecten aan. Dit is altijd het eerste argument van de anonieme functie. We noemen het kortweg "e" (van "EventObject").
				e.preventDefault(); // Stop de werking van de href-attribute.
			
				if(e.type == 'click'){
					// Update de hoofdimage en onderschrift.
					galleryImage.src = this.href; // 'this' is in deze context één van de a.galleryThumb HTML-objecten. Denk eraan: we zitten nog steeds in de a-tag loop!. 
					galleryImage.alt = this.title; // Update de alt a.d.v. a.title.
					figCaption.textContent = this.title; // Onderschrift updaten
				} else if(e.type == 'mouseover'){
					this.firstChild.src = imgDir + this.firstChild.getAttribute('data-basename') + "-thumb-over" + imageExtensie;
				} else if(e.type == 'mouseout'){
					this.firstChild.src = imgDir + this.firstChild.getAttribute('data-basename') + "-thumb-normal" + imageExtensie;
				} // Einde if hetEvent
			}, false); // Einde binden addEventListeners
		} // Einde for-loop eventList	
	} // Einde for-loop van de a-tags
	
	
	
	/* 	======================================================================	
		Image Preloader
	=========================================================================== */
	for(var i=0; i<imagesList.length; i++){ // Ga door de imagesList array heen. En voor elk item in de array, doe iets...
		preloadedImages[i] = new Image(); // Image constructor van JS, waarmee ik zelf afbeeldingen kan maken.
		preloadedImages[i].src = imagesList[i];
		console.log(imagesList[i]);
	}
}