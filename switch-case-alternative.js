const extension = '.css';

// Method 1
const extensionObj = {
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.html': 'text/html',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.pdf': 'application/pdf',
  '.doc': 'application/msword',
  '.docx':
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  '.xls': 'application/vnd.ms-excel',
};

console.log(extensionObj[extension] || 'text/html'); // 'text/css' + default value: 'text/html'

// Method 2
const myMap = new Map([
  ['.js', 'text/javascript'],
  ['.css', 'text/css'],
  ['.html', 'text/html'],
  ['.json', 'application/json'],
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.gif', 'image/gif'],
  ['.pdf', 'application/pdf'],
  ['.doc', 'application/msword'],
  ['.docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
  ['.xls', 'application/vnd.ms-excel'],
]);
console.log(myMap.get(extension) || 'text/html'); // 'text/css'

// Method 3
const myMap2 = new Map();
myMap2.set('.js', 'text/javascript');
myMap2.set('.css', 'text/css');
myMap2.set('.html', 'text/html');
myMap2.set('.json', 'application/json');
myMap2.set('.png', 'image/png');
myMap2.set('.jpg', 'image/jpeg');
myMap2.set('.jpeg', 'image/jpeg');
myMap2.set('.gif', 'image/gif');
myMap2.set('.pdf', 'application/pdf');
myMap2.set('.doc', 'application/msword');
myMap2.set('.docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
myMap2.set('.xls', 'application/vnd.ms-excel');
console.log(myMap2.get(extension) || 'text/html'); // 'text/css'

// https://youtu.be/7T051-eeacQ (Dave Gray, STOP Using Switch Statements! Use These Instead...)
