import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sites from "./Sites";
import Password from "./Password";

const PasswordManager = () => {
  return (
    <Container>
      <Row>
        <Col sm={4}>
          <Sites />
        </Col>
        <Col sm={8}>
          <Password />
        </Col>
      </Row>
    </Container>
  );
};

export default PasswordManager;
