import { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import { RiEyeFill } from "react-icons/ri";
import { RiEyeOffFill } from "react-icons/ri";
import { getSHA256Hash } from "boring-webcrypto-sha256";

import Card from "../UI/Card/Card";

const Password = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef();

  const calculatePassword = async () => {
    const { state, value } = await getSHA256Hash(props.site).then(
      (result) => result.data
    );
    console.log(state, value);
  };

  useEffect(() => {
    setShowPassword(false);
    const pass = calculatePassword();
    console.log(pass);
    setPassword(pass);
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
      </Card>
    </>
  );
};

export default Password;
