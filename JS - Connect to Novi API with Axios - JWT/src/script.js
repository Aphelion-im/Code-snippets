// https://blog.logrocket.com/how-to-use-axios-post-requests/
// https://stackoverflow.com/questions/40988238/sending-the-bearer-token-with-axios#42879201
// JWT -> localStorage
// Gebruikers-gegevens in de Context-state.

'use strict';
// API variables
const baseUrl = 'https://frontend-educational-backend.herokuapp.com';
const testUrl = '/api/test/all'; // GET
const registerUrl = '/api/auth/signup'; // POST
const loginUrl = '/api/auth/signin';
const userUrl = '/api/user/';
const uploadUserImage = '/api/user/image';

// User credentials variables
const username = 'amdegroot2';
const password = '123456';

// Buttons variables
const statusApiBtn = document.querySelector('.status-api');
const registerBtn = document.querySelector('.register');
const loginBtn = document.querySelector('.login');
const userQueryBtn = document.querySelector('.user-query');
const updateUserBtn = document.querySelector('.update-user');

// Image upload variables
const root = document.querySelector('#root');
const fileInput = document.getElementById('fileinput');

// Testen om te kijken of de API ontwaakt is uit de slaap
async function isApiReady() {
  try {
    const response = await axios.get(`${baseUrl}${testUrl}`);
    console.log('Status server: ', response.status, 'OK'); // 200 = OK
  } catch (error) {
    console.error(error);
  }
}

// isApiReady();

// Register a user - POST
// https://blog.logrocket.com/how-to-use-axios-post-requests/
async function registerUser() {
  try {
    const response = await axios.post(`${baseUrl}${registerUrl}`, {
      username: `${username}`,
      email: 'andre.de.groot@nhotmail.com',
      password: `${password}`,
      role: ['user', 'admin'],
    });
    console.log(response);
  } catch (error) {
    console.error(error.response.data.message);
  }
}

// registerUser();

// Login user - POST - localStorage.set();
async function loginUser() {
  try {
    const response = await axios.post(`${baseUrl}${loginUrl}`, {
      username: `${username}`,
      password: `${password}`,
    });
    console.log('User logged in: ', response);
    const accessTokenUser = response.data.accessToken;
    console.log('Your access Bearer token: ', accessTokenUser);
    localStorage.setItem('MarvelAppLoginTokenNovi', accessTokenUser);
  } catch (error) {
    console.error(error);
  }
}

// loginUser();

// Query user information - GET - localSorage.get();
async function userQuery() {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer ' + localStorage.getItem('MarvelAppLoginTokenNovi'),
    },
  };

  try {
    const response = await axios.get(`${baseUrl}${userUrl}`, config);
    console.log('User Query info: ', response.data);
    console.log('Username: ', response.data.username);
    console.log('Email: ', response.data.email);
    console.log('ID: ', response.data.id);
  } catch (error) {
    console.error(error);
  }
}

// userQuery();

// Upload user picture - POST
async function uploadUserPicture() {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer ' + localStorage.getItem('MarvelAppLoginTokenNovi'),
    },
  };

  let userImage = {
    base64Image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==',
  };

  try {
    const response = await axios.post(
      `${baseUrl}${uploadUserImage}`,
      userImage,
      config
    );
    console.log('User Query info: ', response.data);
  } catch (error) {
    console.error(error);
  }
}

// uploadUserPicture();

// Edit user - PUT
async function updateUser() {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer ' + localStorage.getItem('MarvelAppLoginTokenNovi'),
    },
  };
  try {
    const response = await axios.put(
      `${baseUrl}${userUrl}`,
      {
        email: 'amdegroot@hotmail.com',
        password: '123456',
        repeatedPassword: '123456',
      },
      config
    );
    console.log('Updated user info: ', response.data);
  } catch (error) {
    console.error(error);
  }
}

// Upload image event listener and generate a Base64 image
fileInput.addEventListener('change', () => {
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

// updateUser();

function logoutUser() {
  console.log('Hoe?!');
}

// Event listeners
statusApiBtn.addEventListener('click', isApiReady);
registerBtn.addEventListener('click', registerUser);
loginBtn.addEventListener('click', loginUser);
userQueryBtn.addEventListener('click', userQuery);
updateUserBtn.addEventListener('click', updateUser);
