import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { RiEditBoxFill } from "react-icons/ri";
import { RiFileReduceFill } from "react-icons/ri";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

import Card from "../UI/Card/Card";

const Site = () => {
  return (
    <>
      <Card>
        <Container style={{ cursor: "pointer" }}>
          <Row>
            <Col xs={8}>
              <h4 style={{ textAlign: "start" }}>
                <span style={{ color: "#FFD100" }}>
                  <RiCheckboxBlankCircleFill />{" "}
                </span>
                site1
              </h4>
            </Col>
            <Col xs={4}>
              <div style={{ textAlign: "end" }}>
                <h4 style={{ color: "#202020" }}>
                  <RiEditBoxFill />
                  <RiFileReduceFill />
                </h4>
              </div>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
};

export default Site;
