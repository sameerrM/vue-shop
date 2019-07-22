import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD7WmZOw5c2Ddb88-l99ok2EQnbeEU7wh4",
  authDomain: "vue-shop-6333b.firebaseapp.com",
  databaseURL: "https://vue-shop-6333b.firebaseio.com",
  projectId: "vue-shop-6333b",
  storageBucket: "",
  messagingSenderId: "78286331816",
  appId: "1:78286331816:web:6390724e30dc9d55"
};
// Initialize Firebase
export const fb = firebase.initializeApp(firebaseConfig);
