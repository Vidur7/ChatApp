import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDDt5rmdkDhYu68Icl3zVaGwmNLuyQHMY0",
    authDomain: "buzzit-6cf2b.firebaseapp.com",
    projectId: "buzzit-6cf2b",
    storageBucket: "buzzit-6cf2b.appspot.com",
    messagingSenderId: "679037205821",
    appId: "1:679037205821:web:8eec6f2e9c2b712c965954"
}).auth();

