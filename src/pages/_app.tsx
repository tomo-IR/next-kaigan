import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../component/layout";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { text } from "node:stream/consumers";
export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    type: "light",
    theme: {
      colors: {
        backgound: "#78F2AD",
        // text: "$white",

        gradient:
          "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
        link: "#5E1DAD",

        // you can also create your own color
        myColor: "#0A6130",
      },
    },
  });
  return (
    <NextUIProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
}
