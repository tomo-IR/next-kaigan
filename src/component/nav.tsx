import Link from "next/link";
import { FunctionComponent } from "react";
import style from "./nav.module.css";

export const Nav: FunctionComponent = () => {
  return (
    <nav>
      <ul>
        <li className={style.navList}>
          <Link href="/">Home</Link>
        </li>
        <li className={style.navList}>
          <Link href="/new">new</Link>
        </li>
        <li className={style.navList}>
          <Link href="/login">login</Link>
        </li>
      </ul>
    </nav>
  );
};
