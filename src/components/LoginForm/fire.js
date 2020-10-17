import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDvV3-tvyZq-i0PSvbQ1H5Mwn1QmbRM_Dk',
  authDomain: 'image-upload-90b5d.firebaseapp.com',
  databaseURL: 'https://image-upload-90b5d.firebaseio.com',
  projectId: 'image-upload-90b5d',
  storageBucket: 'image-upload-90b5d.appspot.com',
  messagingSenderId: '945002063613',
  appId: '1:945002063613:web:72a0d364acb77a57538094'
};
var fire = firebase.initializeApp(firebaseConfig);

export default fire;
