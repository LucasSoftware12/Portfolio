import React, {  } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

function Navigation() {
  

  return (
    <>
      <Navbar variant="dark" expand="lg" fixed="top" className="nvabar-custon">
        <a href="/" className="navbar_logo_container">
          
          <span>Hi there, Welcome</span>
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav className="navbar-right">
            <Nav.Link>
              <Button
                variant="light"
                style={{
                  borderRadius: "4px 0 0 4px",
                  borderRight: "1px solid rgba(0,0,0,0.5)",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href='https://drive.google.com/file/d/1fI_KNkmisRlKAlnkojQgBIqyl4mqgMB6/view?usp=sharing'
                  ;
                }}
              >
                Curriculum Vitae (CV)
              </Button>
              <Button
                variant="light"
                href="https://drive.google.com/u/0/uc?id=1fI_KNkmisRlKAlnkojQgBIqyl4mqgMB6&export=download"
                style={{
                  borderRadius: "0 4px 4px 0",
                
                }}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href='https://drive.google.com/u/0/uc?id=1fI_KNkmisRlKAlnkojQgBIqyl4mqgMB6&export=download'
                  ;
                }}
              >
                <FaDownload fill="rgba(0,0,0,0.5)" />
              </Button>
            </Nav.Link>
            <Nav.Link
            href="https://github.com/LucasSoftware12"
            rel="noopener noreferrer"
            target="_blank">
              <FaGithub color="rgba(255,255,255,0.8)" size="1.5em" />
            </Nav.Link>
            <Nav.Link 
            href="https://www.linkedin.com/in/lucas-softw/"
            rel="noopener noreferrer"
            target="_blank">
              <FaLinkedin color="rgba(255,255,255,0.8)" size="1.5em" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
    </>
  );
}

export default Navigation;
