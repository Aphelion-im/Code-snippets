/*
	Project:
		Een interactieve image gallery met roll-over thumbnails.
		
	Werking van de code: 
		1.	Controleer of de noodzakelijke HTML-elementen voorkomen in het HTML-document.
		
		2. 	Ga met de for loop door alle a-tags van het document heen.
		
		3.	Check de a-tags de class a.galleryThumb hebben.
		
		4.	Als dat zo is, en is het de eerste a.galleryThumb, bouw dan met deze 
			informatie de hoofdimage van de gallery:
			
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
		
		8. 	Voor elke a.galleryThumb een thumbnail image aanmaken:
		
			<a class="galleryThumb" href="images/boot.jpg" title="Een boot uit de Gouden Eeuw.">
				<img src="images/boot-thumb-normal.jpg" alt="Een boot uit de Gouden Eeuw." data-basename="boot">
			</a>
		
		9. 	Elke a.galleryThumb voorzien van click, mouseover en mouseout events. 
			De mouse events geven de thumbnails een roll-over effect. De click-event 
			verandert de hoofdimage in een hi-res versie van de betreffende aangeklikte 
			afbeelding.
		
		10.	Alle graphics preloaden.		
*/
	var d = document;
window.addEventListener('load', function(){	
    imageGallery();
//    initMenu();
//    initForm;
//    init();
});
function imageGallery(){
	/* 	======================================================================	
		Object sniffing
	=========================================================================== */
	/* 
		Onderstaande code mag alleen worden uitgevoerd als het HTML-document twee 
		HTML-Objecten heeft met de id's #galleryContainer en  #galleryPagination.
	*/
	
	if(! d.getElementById('galleryContainer') || ! d.getElementById('galleryPagination'))
        return false;
    
    
	
	/* 	======================================================================	
		Variables
	=========================================================================== */
	var galleryContainer = d.getElementById('galleryContainer');
	var galleryPagination = d.getElementById('galleryPagination');
    var imgDir;
    var firstGalleryThumb = false;
    var eventList = ['click', 'mouseover', 'mouseout'];
    var imagesList = [];
    var preloadedImages = [];
	
	
	/* 	======================================================================	
		Image Gallery
	=========================================================================== */
	// Ga door ALLE a-tags heen van het document.
    var alleLinks = d.links;
    
    for(link of alleLinks){
        if(!firstGalleryThumb){
            firstGalleryThumb = true;
        //	 Stap 4: Met de informatie van de eerste a.galleryThumb de hoofdimage van de gallery maken.	
            var gallaryImage = new Image();
            gallaryImage.src = link.href;
            gallaryImage.alt = link.title;
        		
        //	 Stap 5: Maak een figure tag aan en stop de image in de container
            var figure = d.createElement('figure');
            figure.appendChild(gallaryImage);
            
        //	 Stap 6: figcaption-tag onderschrift aanmaken voor de galleryImage.
            var figCaption = d.createElement('figcaption');
            
        //	 Stop de title tekst van de eerste a.galleryThumb in de figcaption tag.
            figCaption.textContent = link.title;
            
        //	 Stop de figcaption in de figure-tag.
            figure.appendChild(figCaption);
        //	 Stop de figure in de div#galleryContainer
            galleryContainer.appendChild(figure); //is onderdeel van de viewPort

 //	 Maak een figcaption tag aan.

	 }//einde if first gallery thumb
   
	// Stap 8: Bouw een img thumb en zet de thumb in de a.galleryThumb.
        var thumb = new Image();
        var thumbUrl = link.href;
        
	// Voeg de thumb toe aan de imagesList array om straks te kunnen preloaden.
        imagesList.push(thumbUrl);
        
	// Voor elke thumbnail moeten twee varianten worden gepreload: graphicNaam-thumb-normal.jpg en graphicNaam-thumb-over.jpg.
        var posLaatsteSlash = thumbUrl.lastIndexOf('/') + 1; //...images/boot.jpg
        var posExtentie = thumbUrl.lastIndexOf('.');
        var imageNaam = thumbUrl.substring(posLaatsteSlash, posExtentie); //boot
        var imgExtentie = thumbUrl.substring(posExtentie); //.jpg
        imgDir = thumbUrl.substring(0, posLaatsteSlash); //...images/
        
	// Voeg de normal state thumb toe om te preloaden.
	// Voeg de over state thumb toe om te preloaden.

        var thumbNormal = imgDir + imageNaam + '-thumb-normal' + imgExtentie; //images/boot-thumb-normal.jpg
        var thumbOver = imgDir + imageNaam + '-thumb-over' + imgExtentie;
		
		imagesList.push(thumbNormal, thumbOver);
        
    // In de a.galleryThumb moet de thumb image komen te staan. Maar dan moeten we eerst de tekst uit de a.galleryThumb weghalen.
        thumb.src = thumbNormal;
        thumb.alt = link.title;
        thumb.setAttribute('data-basename', imageNaam); //Het is data-basename, niet dataBasename
        link.textContent = ''; //deleten van de text content
        link.appendChild(thumb);
        
        
        //einde dom manipulatie
        
	// Stap 9.
	// 1. Voorzie de elke a.galleryThumb een drie events: click, mouseover en mouseout.
        for(hetEvent of eventList){
            link.addEventListener(hetEvent, function(e){
                var deImage = this.firstChild;
                var deNaam = deImage.getAttribute('data-basename');
                if(e.type === 'click'){
              
	// 2. Blokkeer de werking van de href-attribute. (kan alleen bij een click)
                    e.preventDefault();

	// 3. Als er wordt geklikt: update de hoofimage van de gallery (aan de hand van gegevens die we hierboven al hebben staan).
                    gallaryImage.src = this.href;
                    figCaption.textContent = this.title;
                    
                      }else if(e.type === 'mouseover'){
                         deImage.src = imgDir + deNaam + '-thumb-over' + imgExtentie;   
                      }else if(e.type === 'mouseout'){
                         deImage.src = imgDir + deNaam + '-thumb-normal' + imgExtentie;
                        } //einde alle ifs
                
	// 4. Bij mouseover en mouseout: update de thumbnail van de a.galleryThumb.
                
                }); //einde link function (eventListeners)
        } //einde hetEvent loop
        
					
	 } //einde for loop (link of alleLinks)
	
	/* 	======================================================================	
		Image Preloader
	=========================================================================== */
	for(var i=0; i<imagesList.length; i++){ // Ga door de imagesList array heen. En voor elk item in de array, doe iets...
		preloadedImages[i] = new Image(); // Image constructor van JS, waarmee ik zelf afbeeldingen kan maken.
		preloadedImages[i].src = imagesList[i];
		console.log(imagesList[i]);
	}
} //einde vd gallary function