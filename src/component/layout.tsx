import { FunctionComponent } from "react";
import { Header } from "@/src/component/elements/header";
import { Footer } from "@/src/component/elements/footer";
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
