// https://www.youtube.com/watch?v=EPlXPdNvQEY (How to Convert Images Into Base 64 Data URLs with JavaScript)
// https://developer.mozilla.org/en-US/docs/Web/API/FileReader

'use strict';

const root = document.querySelector('#root');
const fileInput = document.getElementById('fileinput');

fileInput.addEventListener('change', (e) => {
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.addEventListener('load', () => {
    console.clear;
    console.log(reader.result);
    const imgOutput = document.createElement('img');
    imgOutput.setAttribute('src', reader.result);
    imgOutput.alt = 'Base64 Image';
    imgOutput.title = 'Base64 Image';
    root.appendChild(imgOutput);
  });


});
