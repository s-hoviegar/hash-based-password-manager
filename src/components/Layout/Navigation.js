import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Logo from "./Logo";

import "./Navigation.css";
import AuthContext from "../../store/auth-context";

const Navigation = () => {
  const [showHelp, setShowHelp] = useState(false);

  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClose = () => setShowHelp(false);
  const handleShow = () => setShowHelp(true);

  const loginHandler = () => {
    authCtx.isLoggedIn
      ? authCtx.logout()
      : navigate("/login", { replace: true });
  };

  return (
    <>
      <Navbar sticky="top" expand="lg">
        <Container className="header">
          <Navbar.Brand>
            <Link to="/" style={{ textDecoration: "none", color: "#202020" }}>
              <Logo />
              <span className="logo-text"> Hash-based Password Mgr</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Collapse id="main-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Item>
                <Link to="/">
                  <Button variant="outline-dark">Home</Button>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/about">
                  <Button variant="outline-dark">About</Button>
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Button variant="outline-dark" onClick={handleShow}>
                  Help
                </Button>
              </Nav.Item>

              <Nav.Item>
                <Button variant="outline-dark" onClick={loginHandler}>
                  {!authCtx.isLoggedIn && "Login"}
                  {authCtx.isLoggedIn && "Logout"}
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={showHelp} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Help</Modal.Title>
        </Modal.Header>
        <Modal.Body>Lorem ipsum dolor sit...</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navigation;
