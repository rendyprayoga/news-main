import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function Navigation() {
  const headerStyle = {
    marginLeft: "0.2rem",
    paddingTop: "0.5rem",
  };

  const navbarStyle = {
    marginLeft: "50rem",
    padding: "0.2rem",
  };

  const headerNavbarStyle = {
    backgroundColor: "#008B8B",
    color: "#F8F8FF",
  };

  const navLinkStyle = {
    color: "#F8F8FF",
    textDecoration: "none",
    transition: "color 0.3s",
  };

  return (
    <div style={headerNavbarStyle}>
      <div className="d-flex justify-content-between">
        <div style={headerStyle}>
          <Header />
        </div>
        <div style={navbarStyle}>
          <Navbar expand="lg">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <Link to="" className="nav-link" style={navLinkStyle}>
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link" style={navLinkStyle}>
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/contact"
                      className="nav-link"
                      style={navLinkStyle}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="my-header">
      <h3>News Weekly</h3>
    </div>
  );
}
