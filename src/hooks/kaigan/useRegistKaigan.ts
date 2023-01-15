import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "../firebase/fire";
import { Kaigan } from "@/src/interface/kaigan";
import router from "next/router";

const db = firebase.firestore();
export const useRegistKaigan = (kaigan: Kaigan) => {
  const auth = firebase.auth();
  auth.onAuthStateChanged(async (user) => {
    const docRef = db.collection("kaigan").doc(user?.uid);
    console.log(user?.uid);
    docRef.get().then(async (data) => {
      if (data.exists) {
        docRef.update({
          kaigan: firebase.firestore.FieldValue.arrayUnion(kaigan),
        });
        router.push("/mypage");
      } else {
        docRef.set({
          kaigan: firebase.firestore.FieldValue.arrayUnion(kaigan),
        });
      }
    });
  });
};
