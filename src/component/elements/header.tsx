import { FunctionComponent, useContext, useEffect, useState } from "react";
import { Nav } from "./nav/nav";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "../../hooks/firebase/fire";
import { LogoutButton } from "./signOutButton";
import { LoginButton } from "./signInButton";
import { AuthContext } from "../auth/AuthProvider";

export const Header: FunctionComponent = () => {
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const [userName, setUserName] = useState("");
  const currentUser = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div>
      header
      {currentUser.signInCheck ? (
        <>
          <Nav />
          <p>{currentUser.currentUser?.displayName}でログイン中</p>
        </>
      ) : null}
      {currentUser.signInCheck ? <LogoutButton /> : <LoginButton />}
    </div>
  );
};
