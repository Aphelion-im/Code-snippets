'use strict';

// TOS: hotlink image to Unsplash author/photographer

window.addEventListener('load', () => {
  const count = 10; // number of photo's to show
  const apiKey = 'WrYRbyTX7JAhPQAXyyQRK3q3ta4eh0zs-q5NRRoFhCg'; // Do not upload API key to Github
  const root = document.querySelector('#root');
  const loader = document.getElementById('loader');
  let photosArray = [];
  let ready = false;
  let imagesLoaded = 0;
  let totalImages = 0;

  async function fetchPictures() {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`
      );
      photosArray = response.data;
      createPictures();
    } catch (error) {
      console.error('API ' + error.response.data);
    }
  }

  function imageLoaded() {
    imagesLoaded++;
    console.log('Images loaded: ' + imagesLoaded);
    if (imagesLoaded === totalImages) {
      ready = true;
      loader.hidden = true; // Hidden works on Position. display: none with Flexbox method.
    }
  }

  function createPictures() {
    imagesLoaded = 0;
    totalImages = photosArray.length;
    console.log('Total images: ' + totalImages);
    photosArray.forEach((photo) => {
      const img = document.createElement('img');
      img.classList.add('card'); // setAttribute('class', '...');
      img.src = photo.urls.regular; 
      img.alt = photo.alt_description; // setAttribute('alt', '...');
      img.title = photo.alt_description;
      // img.loading = 'lazy';
      img.addEventListener('load', imageLoaded);
      root.appendChild(img);
    });
  }

  window.addEventListener('scroll', () => {
    if (
      window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 1000 &&
      ready
    ) {
      ready = false;
      fetchPictures();
    }
  });

  fetchPictures();
}); // End load eventlistener
