import Button from "@mui/material/Button";
import { Router } from "next/router";
import { Login } from "../../hooks/auth/login";
import router from "next/router";

export const LoginButton = () => {
  const handleLogInButtonClick = () => {
    Login();
    router.push("/");
    // TODO ポップでログインしたことを伝える。
  };
  return (
    <Button variant="outlined" onClick={handleLogInButtonClick}>
      ログイン
    </Button>
  );
};
