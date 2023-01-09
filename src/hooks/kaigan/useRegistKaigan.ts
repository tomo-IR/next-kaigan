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
    db.collection("kaigan")
      .doc(user?.uid)
      .update({ kaigan: firebase.firestore.FieldValue.arrayUnion(kaigan) });
    await router.push("/mypage");
  });
};
