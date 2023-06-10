import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { RiEditBoxFill } from "react-icons/ri";
import { RiFileReduceFill } from "react-icons/ri";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

import Card from "../UI/Card/Card";

const Site = (props) => {
  const id = props.id;
  const editHandler = () => {
    props.handleEdit(props);
  };
  const deleteHandler = () => {
    props.handleDelete(props.id);
  };
  const showItemHandler = () => {
    props.handleShow(props.name);
  };

  return (
    <>
      <Card onClick={showItemHandler}>
        <Container>
          <Row>
            <Col xs={9}>
              <h5 style={{ textAlign: "start" }}>
                <span style={{ color: "#FFD100" }}>
                  <RiCheckboxBlankCircleFill />{" "}
                </span>
                {props.name}
              </h5>
            </Col>
            <Col xs={3}>
              <div style={{ textAlign: "end" }}>
                <h5 style={{ color: "#202020" }}>
                  <RiEditBoxFill
                    onClick={editHandler}
                    style={{ cursor: "pointer" }}
                  />
                  <RiFileReduceFill
                    onClick={deleteHandler}
                    style={{ cursor: "pointer" }}
                  />
                </h5>
              </div>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
};

export default Site;
