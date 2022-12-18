import Link from "next/link";
import { FunctionComponent } from "react";
import style from "./nav.module.css";

export const Nav: FunctionComponent = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/new">新規登録</Link>
        </li>
        <li>
          <Link href="/login">ログイン</Link>
        </li>
      </ul>
    </nav>
  );
};
