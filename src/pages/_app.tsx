import * as React from "react";
import { AppProps } from "next/app";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../../src/theme";
import createEmotionCache from "../../src/createEmotionCache";
import { Layout } from "../component/layout";
import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "../hooks/firebase/fire";
import router from "next/router";
import { createContext } from "react";
import { AuthProvider } from "../component/auth/AuthProvider";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
export const Uid = createContext("");
function App(props: MyAppProps) {
  // const auth = firebase.auth();
  // const provider = new firebase.auth.GoogleAuthProvider();
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  // const [uid, setUid] = useState<string | undefined>("");

  // useEffect(() => {
  //   console.log(provider);
  //   if (!auth.currentUser) {
  //     router.push("/");
  //     return;
  //   } else {
  //     setUid(auth.currentUser.uid);
  //     console.log(auth.currentUser.uid);
  //   }
  // });
  // if (uid === null) {
  //   router.push("/");
  //   return;
  // }
  return (
    <CacheProvider value={emotionCache}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </AuthProvider>
    </CacheProvider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default App;
