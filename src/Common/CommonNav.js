import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";

function CommonNav() {
  return (
    <Navbar collapseOnSelect expand="lg" className="mnnav ">
      <Container>
        <Navbar.Brand href="/">
          <img src="./images/abinasha.jpg" width={40} className=" rounded-5" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="mainco" href="/">
            
              Home
            </Nav.Link>
            <Nav.Link className="mainco" href="about">

              About
            </Nav.Link>
            <Nav.Link className="mainco" href="my_skills">
            
              My Skills
            </Nav.Link>

            <Nav.Link className="mainco" href="#footer">
             
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CommonNav;
