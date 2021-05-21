import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDI23y4AtpLqOazV0RK2FHj47Oty16iKRM",
  authDomain: "nwitter-805d0.firebaseapp.com",
  projectId: "nwitter-805d0",
  storageBucket: "nwitter-805d0.appspot.com",
  messagingSenderId: "382891797073",
  appId: "1:382891797073:web:6e82ce59de29bbbbd9a670",
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
