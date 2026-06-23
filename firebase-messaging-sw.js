importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "YOUR_API_KEY",
  authDomain: "madhukar-speaks.firebaseapp.com",
  projectId: "madhukar-speaks",
  storageBucket: "madhukar-speaks.firebasestorage.app",
  messagingSenderId: "675959256381",
  appId: "1:675959256381:web:a42776eed4683d7d324154"
});

const messaging = firebase.messaging();
