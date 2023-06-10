import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sites from "./Sites";
import Password from "./Password";
import { useState } from "react";

const PasswordManager = () => {
  const [site, setSite] = useState("");
  const handleItemShow = (site) => {
    setSite(site);
  };

  return (
    <Container>
      <Row>
        <Col sm={4}>
          <Sites showItemPassword={handleItemShow} />
        </Col>
        <Col sm={8}>
          <Password site={site} />
        </Col>
      </Row>
    </Container>
  );
};

export default PasswordManager;
