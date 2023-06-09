import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDz0HhFELmOrXZW_2Htm6cZ2cLGWhNZPzg",
  authDomain: "userdata-45abe.firebaseapp.com",
  databaseURL: "https://userdata-45abe-default-rtdb.firebaseio.com",
  projectId: "userdata-45abe",
  storageBucket: "userdata-45abe.appspot.com",
  messagingSenderId: "108470764951",
  appId: "1:108470764951:web:78aff3a3ec4d7559cef0d2",
  measurementId: "G-WQBCY27S50",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
