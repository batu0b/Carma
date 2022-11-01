import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyALJzaItfY8-7GX3p6ezm4alAk3Rfwwgi0",
  authDomain: "carmaapp-4d412.firebaseapp.com",
  projectId: "carmaapp-4d412",
  storageBucket: "carmaapp-4d412.appspot.com",
  messagingSenderId: "280554827086",
  appId: "1:280554827086:web:88e9a1cd28f189d27c421f",
  measurementId: "G-QVGDKJNC58",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

