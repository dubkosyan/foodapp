import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCexeQ04yeGSRJNEatVVwPhUWnmOaXMAyw",
  authDomain: "foodapp-61856.firebaseapp.com",
  databaseURL: "https://foodapp-61856-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "foodapp-61856",
  storageBucket: "foodapp-61856.appspot.com",
  messagingSenderId: "749372132826",
  appId: "1:749372132826:web:44eaae03c93817c661c4e3",
  measurementId: "G-JNEQW95FTG"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const firestore = getFirestore(app);

export { app, db, storage, firestore };
