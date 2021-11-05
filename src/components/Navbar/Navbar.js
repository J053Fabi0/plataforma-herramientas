import React from "react";
import styled from "@emotion/styled";
import logo from "@assets/logo blanco lxlab.svg";
import { Navbar as Navb, Container, Nav } from "react-bootstrap";

const { Brand, Toggle, Collapse } = Navb;

const ColoredNavbar = styled(({ className, children }) => (
  <Navb expand="lg" sticky="top" className={className + " navbar-dark"}>
    {children}
  </Navb>
))(({ theme: { colors } }) => ({
  backgroundColor: colors.primary,
}));

export default function Navbar() {
  return (
    <ColoredNavbar>
      <Container>
        <Brand href="#home">
          <img src={logo} height="40" className="d-inline-block align-top" alt="" />
        </Brand>
        <Toggle aria-controls="basic-navbar-nav" />
        <Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end w-100" style={{ color: "white" }}>
            <Nav.Item className="d-flex justify-content-end">
              <Nav.Link href="#" style={{ color: "white" }}>
                Contacto
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Collapse>
      </Container>
    </ColoredNavbar>
  );
}
