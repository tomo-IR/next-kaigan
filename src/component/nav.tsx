import { FunctionComponent } from "react";
import style from "./nav.module.css";
import { Navbar, Button, Link, Text } from "@nextui-org/react";

export const Nav: FunctionComponent = () => {
  return (
    <Navbar isBordered variant="floating" css={{ background: "$myColor" }}>
      <Navbar.Brand>
        <Text b color="inherit" hideIn="xs">
          ACME
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs" variant="highlight-solid">
        <Navbar.Link href="/login">ログイン</Navbar.Link>
        {/* <Navbar.Link isActive href="#">
          Customers
        </Navbar.Link> */}
        <Navbar.Link href="/new">新規登録</Navbar.Link>
        {/* <Navbar.Link href="#">Company</Navbar.Link> */}
      </Navbar.Content>
      {/* <Navbar.Content>
        <Navbar.Link color="inherit" href="#">
          Login
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat as={Link} href="#">
            Sign Up
          </Button>
        </Navbar.Item>
      </Navbar.Content> */}
    </Navbar>
  );
};
