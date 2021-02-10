import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB5uFhX43W-4zgqVTqxZ_m0TqESeDtABBM',
  authDomain: 'm3ntorship-pickly-v1.firebaseapp.com',
  projectId: 'm3ntorship-pickly-v1',
  storageBucket: 'm3ntorship-pickly-v1.appspot.com',
  messagingSenderId: '272300683405',
  appId: '1:272300683405:web:43f7a4d2f4437d84e3f2c4'
};
var fire = firebase.initializeApp(firebaseConfig);

export default fire;
