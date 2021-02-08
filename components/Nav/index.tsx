import Link from "next/link";
import nav from "./nav.module.scss";
import { TinaCMS } from "tinacms";
import { Container, Button, Navbar, Nav } from "react-bootstrap";

export interface EditLinkProps {
  cms: TinaCMS;
}

export const EditLink = ({ cms }: EditLinkProps) => {
  return (
    <Button onClick={() => cms.toggle()}>
      {cms.enabled ? "Exit Edit Mode" : "Edit This Site"}
    </Button>
  );
};

const NavMenu = ({ cms }: EditLinkProps) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className={nav.brand}>
          <Link href="/">
            <a>Tina Blog</a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={`${nav.link} ml-auto`}>
            <Link href="/">
              <Nav.Link as="a" href="/">
                Home
              </Nav.Link>
            </Link>
            <Link href="/about">
              <Nav.Link as="a" href="/about">
                About
              </Nav.Link>
            </Link>

            <EditLink cms={cms} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    //   <Container>
    //     <Navbar.Brand as={Link} href="/">
    //       Brand link
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="ml-auto">
    //         <Nav.Link as={Link} href="/">
    //           Home
    //         </Nav.Link>
    //         <Nav.Link as={Link} href="/about">
    //           About
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    // <nav className={nav.nav}>
    //   <div className={nav.brand}>
    //     <div className={nav["brand__title"]}>
    //       <Link href="/">
    //         <a>Tina Blog</a>
    //       </Link>
    //     </div>
    //     <ul>
    //       <li>
    //         <Link href="/">
    //           <a>Home</a>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href="/about">
    //           <a>About</a>
    //         </Link>
    //       </li>
    //       <li>
    //         <EditLink cms={cms} />
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
};

export default NavMenu;
