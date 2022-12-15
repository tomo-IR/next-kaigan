import { Container } from "@nextui-org/react";
import { FunctionComponent } from "react";
import { Nav } from "./nav";

export const Header: FunctionComponent = () => {
  return (
    <Container css={{ background: "#ECFDF4" }}>
      header
      <Nav />
    </Container>
  );
};
