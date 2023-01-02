import { FunctionComponent, useEffect, useState } from "react";
import { Nav } from "./nav";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "../hooks/firebase/fire";
import { LogoutButton } from "./signOutButton";

export const Header: FunctionComponent = () => {
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.signInWithPopup(provider).then((result: any) => {
      console.log(auth);
      setUserName(result?.user.displayName);
    });
  }, []);
  return (
    <div>
      header
      <Nav />
      <p>{userName}</p>
      <LogoutButton />
    </div>
  );
};
