import { FunctionComponent, useEffect, useState } from "react";
import { Nav } from "./nav";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "../hooks/firebase/fire";
import { LogoutButton } from "./signOutButton";
import { LoginButton } from "./signInButton";

export const Header: FunctionComponent = () => {
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const [userName, setUserName] = useState("");
  return (
    <div>
      header
      {auth.currentUser ? (
        <>
          <Nav />
          <p>{auth.currentUser?.displayName}でログイン中</p>
        </>
      ) : null}
      {auth.currentUser ? <LogoutButton /> : <LoginButton />}
    </div>
  );
};
