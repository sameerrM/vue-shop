import firebase from 'firebase'
import 'firebase/storage'
require("firebase/firestore");


// Initialize Firebase
var config = {
  apiKey: "yourKey",
  authDomain: "yourDomein.firebaseapp.com",
  databaseURL: "https://yourDomein.firebaseio.com",
  projectId: "yourDomein",
  storageBucket: "yourDomein.appspot.com",
  messagingSenderId: "34543545"
};

const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export {
  fb,
  db
}
