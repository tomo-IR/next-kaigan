import Button from "@mui/material/Button";
import { Router } from "next/router";
import { Logout } from "../hooks/auth/logout";
import router from "next/router";

export const LogoutButton = () => {
  const handleLogoutButtonClick = () => {
    Logout();
    router.push("/");
    // TODO ポップでログアウトしたことを伝える。
  };
  return (
    <Button variant="outlined" onClick={handleLogoutButtonClick}>
      ログアウト
    </Button>
  );
};
