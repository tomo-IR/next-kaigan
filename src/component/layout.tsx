import { FunctionComponent } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { Props } from "next/script";
export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <>{children}</>
      <Footer />
    </>
  );
};
