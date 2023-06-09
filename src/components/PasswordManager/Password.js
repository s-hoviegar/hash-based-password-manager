import Form from "react-bootstrap/Form";

import Card from "../UI/Card/Card";

const Password = () => {
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
            placeholder="www.example.com"
          />
          <br />
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            size="lg"
            type="password"
            id="password"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </Form.Text>
        </div>
      </Card>
    </>
  );
};

export default Password;
