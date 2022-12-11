import Link from "next/link";
import { FunctionComponent } from "react";

export const Nav: FunctionComponent = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/new">new</Link>
        </li>
        <li>
          <Link href="/login">login</Link>
        </li>
      </ul>
    </nav>
  );
};
