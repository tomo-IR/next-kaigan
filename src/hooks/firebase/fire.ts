import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  appId: process.env.APP_ID,
  messagingSenderId: process.env.MESSAGNG_SENDER_ID,
};

if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig);
}
