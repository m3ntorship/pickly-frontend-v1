import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCcpWjIBgQzIc5y404dOqtm8QkXp-1kl0Y',
  authDomain: 'm3ntorship-pickly.firebaseapp.com',
  databaseURL: 'https://m3ntorship-pickly.firebaseio.com',
  projectId: 'm3ntorship-pickly',
  storageBucket: 'm3ntorship-pickly.appspot.com',
  messagingSenderId: '56580619370',
  appId: '1:56580619370:web:e96021c4016eda45455e13'
};
var fire = firebase.initializeApp(firebaseConfig);

export default fire;
