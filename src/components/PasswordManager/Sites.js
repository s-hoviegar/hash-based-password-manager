import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { RiFileAddFill } from "react-icons/ri";
import Site from "./Site";

const Sites = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={10}>
            {" "}
            <h1>Sites</h1>
          </Col>
          <Col xs={2}>
            <h1
              style={{
                color: "#202020",
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              <RiFileAddFill />
            </h1>
          </Col>
        </Row>
      </Container>

      <Site />
      <Site />
      <Site />
      <Site />
    </>
  );
};

export default Sites;
