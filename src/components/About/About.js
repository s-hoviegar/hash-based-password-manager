import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const About = () => {
  return (
    <Row>
      <Col></Col>
      <Col xs={7}>
        <h1>Hash-based password manager</h1>
        <h3>Summary</h3>

        <p>
          This website offers an offline password manager which doesn't store
          any of your passwords on a remote server or cloud. It just simply
          gives you a password for every website you add based on your master
          password (the one you chose on sign up step) and the site URL. In this
          way you can easily get unique passwords for each website and get them
          any time (even offline).
        </p>
        <h3>Creator</h3>
        <p>Sajjad Hoviegar</p>
        <h3>Github</h3>
        <a href="https://github.com/sh2p/hash-based-password-manager">
          Offline hash-based password manager
        </a>
      </Col>
      <Col></Col>
    </Row>
  );
};

export default About;
