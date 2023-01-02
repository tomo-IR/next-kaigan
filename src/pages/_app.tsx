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
import { useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "../hooks/firebase/fire";
import router from "next/router";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function App(props: MyAppProps) {
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  useEffect(() => {
    if (!auth.currentUser) {
      router.push("/");
    }
  });

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default App;
