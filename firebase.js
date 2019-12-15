import config from './config/config';

// Your web app's Firebase configuration

const {
    apiKey,
    authDomain,
    databaseURL,
    projectId,
    storageBucket,
    messagingSenderId,
    appId
} = config;

const firebaseConfig = {
    apiKey,
    authDomain,
    databaseURL,
    projectId,
    storageBucket,
    messagingSenderId,
    appId
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);