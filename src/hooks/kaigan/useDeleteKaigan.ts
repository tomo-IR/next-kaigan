import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "../firebase/fire";
import { Kaigan } from "@/src/interface/kaigan";
import router from "next/router";
import { AuthContext } from "../../component/auth/AuthProvider";
import { AuthProvider } from "../../component/auth/AuthProvider";
import { useContext } from "react";

const db = firebase.firestore();

export const useDeleteKaigan = (kaigan: Kaigan, uid: string) => {
  const docRef = db.collection("kaigan").doc(uid);
  docRef.get().then(async (data) => {
    if (data.exists) {
      docRef.update({
        kaigan: firebase.firestore.FieldValue.arrayRemove(kaigan),
      });
      router.push("/");
      // TODO 画面リフレッシュして、tooltipだす
    }
  });
};
