import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "../firebase/fire";
import { Kaigan } from "@/src/interface/kaigan";
import router from "next/router";

const db = firebase.firestore();

export const useRegistKaigan = (kaigan: Kaigan) => {
  console.log("use regist kaigan");
  db.collection("kaigan")
    .add(kaigan)
    .then((ref) => {
      router.push("/mypage");
    });
};
