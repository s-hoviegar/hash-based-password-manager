import { useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SiteItemForm = (props) => {
  const nameInputRef = useRef();

  useEffect(() => {
    if (props.editingItem !== null) {
      nameInputRef.current.value = props.editingItem.name;
    }
  }, [props.editingItem]);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;

    let generatedId;
    if (props.editingItem !== null) {
      generatedId = props.editingItem.id;
      props.editItem({
        id: generatedId,
        name: enteredName,
      });
    } else {
      const rand = Math.floor(Math.random() * (100000 - 1 + 1) + 1);
      generatedId = rand;
      props.addItem({
        id: generatedId,
        name: enteredName,
      });
    }
  };

  return (
    <Form>
      <Form.Control
        type="text"
        placeholder="Enter website address"
        ref={nameInputRef}
        autoFocus
      />
      <Button
        type="submit"
        variant="outline-dark"
        onClick={submitHandler}
        style={{ margin: "10px" }}
      >
        {props.editingItem !== null ? "Edit item" : "Add item"}
      </Button>
    </Form>
  );
};

export default SiteItemForm;
