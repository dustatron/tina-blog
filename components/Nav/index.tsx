import Link from "next/link";
import nav from "./nav.module.scss";
import { TinaCMS } from "tinacms";

export interface EditLinkProps {
  cms: TinaCMS;
}

export const EditLink = ({ cms }: EditLinkProps) => {
  return (
    <button onClick={() => cms.toggle()}>
      {cms.enabled ? "Exit Edit Mode" : "Edit This Site"}
    </button>
  );
};

const Nav = ({ cms }: EditLinkProps) => {
  return (
    <nav className={nav.nav}>
      <div className={nav.brand}>
        <div className={nav["brand__title"]}>
          <Link href="/">
            <a>Tina Blog</a>
          </Link>
        </div>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <EditLink cms={cms} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
