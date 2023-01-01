import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "../firebase/fire";
import { Kaigan } from "@/src/interface/kaigan";
import router from "next/router";

const db = firebase.firestore();
export const useDeleteKaigan = () => {
  db.collection("kaigan")
    .doc("")
    .delete()
    .then((ref) => {
      router.push("/mypage");
    });
};
