import { FunctionComponent } from "react";
import { Header } from "@/src/component/header";
import { Footer } from "@/src/component/footer";
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
