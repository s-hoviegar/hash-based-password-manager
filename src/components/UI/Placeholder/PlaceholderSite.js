import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Placeholder from "react-bootstrap/Placeholder";
import Card from "../Card/Card";

const PlaceholderSite = () => {
  return (
    <>
      <Card>
        <Container>
          <Row>
            <Col xs={9}>
              <h5 style={{ textAlign: "start" }}>
                <Spinner animation="grow" variant="warning" />{" "}
                <Placeholder as={Card.Title} animation="glow">
                  <Placeholder xs={8} />
                </Placeholder>
              </h5>
            </Col>
            <Col xs={3}>
              <div style={{ textAlign: "end" }}>
                <h5 style={{ color: "#202020" }}>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={3} /> <Placeholder xs={3} />
                  </Placeholder>
                </h5>
              </div>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
};

export default PlaceholderSite;
