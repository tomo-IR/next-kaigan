import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "../firebase/fire";

const auth = firebase.auth();

export const Logout = () => {
  auth.signOut();
};
