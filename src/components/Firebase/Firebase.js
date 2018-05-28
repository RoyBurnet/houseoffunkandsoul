import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDyZieNWfUSoAG3oPU9d2PwX57FoOegM_E',
  authDomain: 'house-69003.firebaseapp.com',
  databaseURL: 'https://house-69003.firebaseio.com',
  projectId: 'house-69003',
  storageBucket: 'house-69003.appspot.com',
  messagingSenderId: '312143547767'
};

const fire = firebase.initializeApp(config);

export default fire