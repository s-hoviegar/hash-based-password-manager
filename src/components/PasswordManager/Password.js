import { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { RiEyeFill } from "react-icons/ri";
import { RiEyeOffFill } from "react-icons/ri";
import { sha256 } from "crypto-hash";

import Card from "../UI/Card/Card";

const Password = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [reenterPassword, setReenterPassword] = useState(false);
  const [mp, setmp] = useState("");
  const passwordRef = useRef();
  const masterPasswordRef = useRef();

  const handleClose = () => {
    if (masterPasswordRef.current.value !== "") {
      props.setMasterPassword(masterPasswordRef.current.value);
      setReenterPassword(false);
    }
  };
  const handleShow = () => setReenterPassword(true);
  const onMPchangeHandler = (event) => {
    setmp(event.target.value);
  };

  const calculatePassword = async (site, pass) => {
    const string = site + pass;
    // console.log(string);
    const result = await sha256(string);
    setPassword(result);
  };

  useEffect(() => {
    setShowPassword(false);
    if (props.masterPassword === "") {
      handleShow();
    }
    calculatePassword(props.site, props.masterPassword);
  }, [props]);

  const handleShowPassword = () => {
    setShowPassword(true);
  };
  const handleHidePassword = () => {
    setShowPassword(false);
  };
  const copyHandler = () => {
    console.log(passwordRef.current.value);
  };

  return (
    <>
      <h1>Password</h1>
      <Card>
        <div style={{ textAlign: "start" }}>
          <Form.Label htmlFor="website">Website</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            id="website"
            placeholder={
              props.site !== ""
                ? props.site
                : "Click on the left panel to see site and it's generated secure password."
            }
            disabled
          />
          <br />
          <Form.Label htmlFor="password">Password</Form.Label>{" "}
          {!showPassword ? (
            <RiEyeOffFill
              style={{ cursor: "pointer" }}
              onClick={handleShowPassword}
            />
          ) : (
            <RiEyeFill
              style={{ cursor: "pointer" }}
              onClick={handleHidePassword}
            />
          )}
          <Form.Control
            onClick={copyHandler}
            ref={passwordRef}
            size="lg"
            type={!showPassword ? "password" : "text"}
            id="password"
            aria-describedby="passwordHelpBlock"
            readOnly
            value={props.site !== "" ? password : "1234isNotSecure"}
          />
          <Form.Text id="passwordHelpBlock" muted>
            This password is generated for this site and can be obtained any
            time in the future even if you're offline.
          </Form.Text>
        </div>

        <Modal
          show={reenterPassword}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Re-enter Master Password</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Re-enter your master password and be careful to enter it correctly.
            If you enter a wrong password you get wrong results!
            <Form>
              <Form.Group className="mb-3" controlId="masterPassword">
                <Form.Label></Form.Label>
                <Form.Control
                  required
                  isInvalid={mp === ""}
                  onChange={onMPchangeHandler}
                  defaultValue={mp}
                  type="password"
                  placeholder="Master Password"
                  ref={masterPasswordRef}
                />
                <Form.Control.Feedback type="invalid">
                  Plaese enter your master password to continue.
                </Form.Control.Feedback>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Enter
            </Button>
          </Modal.Footer>
        </Modal>
      </Card>
    </>
  );
};

export default Password;
