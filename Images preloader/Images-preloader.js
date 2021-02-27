"use strict";

/* Image preloader */
const imagesPath = 'images/attractions/';

const imagesList = [
  'accessroad-thumb-o.png',
  'baryonyx-thumb-o.png',
  'brachiosaurus-thumb-o.png',
  'dilophosaurus-thumb-o.png',
  'electricfence-thumb-o.png',
  'gallimimus-thumb-o.png',
  'heliport-thumb-o.png',
  'herrerasaurus-thumb-o.png',
  'metriacanthosaurus-thumb-o.png',
  'parasaurolophus-thumb-o.png',
  'port-thumb-o.png',
  'proceratosaurus-thumb-o.png',
  'segisaurus-thumb-o.png',
  'standard-jp-visitorcenter-thumb-o.png',
  'tourroad-thumb-o.png',
  'trex-thumb-o.png',
  'triceratops-thumb-o.png',
  'velociraptor-thumb-o.png',
  'visitorcenter-thumb-o.png'
];

preloadImages();

function preloadImages() {
  for (const afbeelding of imagesList) {
    const temp = new Image();
    temp.src = imagesPath + afbeelding;
    console.log(temp);
  }
};