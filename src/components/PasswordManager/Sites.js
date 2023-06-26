import { useContext, useEffect, useState } from "react";
import { ref, child, update, remove, get } from "firebase/database";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { RiFileAddFill } from "react-icons/ri";

import { firebaseDb } from "../../utils/firebase-config";
import AuthContext from "../../store/auth-context";
import Site from "./Site";
import classes from "./Sites.module.css";
import SiteItemForm from "./SiteItemForm";
import PlaceholderSite from "../UI/Placeholder/PlaceholderSite";
import Card from "../UI/Card/Card";

const Sites = (props) => {
  const [sites, setSites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const [showItemModal, setShowItemModal] = useState(false);
  const [showRemoveItemModal, setShowRemoveItemModal] = useState(null);
  const [editingItem, setEditingItem] = useState(null);

  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const userID = authCtx.userID;

  let loadingSites = [];

  for (let i = 0; i < 5; i++) {
    loadingSites.push(<PlaceholderSite key={i} />);
  }

  useEffect(() => {
    setIsLoading(true);

    const dbRef = ref(firebaseDb);
    get(child(dbRef, `sites/${userID}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          // console.log(snapshot.val());
          const responseData = snapshot.val();

          const loadedSites = [];
          for (const key in responseData) {
            loadedSites.push({
              id: key,
              name: responseData[key].name,
            });
          }
          setSites(loadedSites);
          setIsLoading(false);
        } else {
          // console.log("No data available");
          setIsLoading(false);
        }
      })
      .catch((error) => {
        // console.error(error);
        setIsLoading(false);
        setHttpError(error.message);
      });
  }, [userID]);

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const showAddItemModal = () => {
    setShowItemModal(true);
    // console.log("set to show modal");
  };

  const showEditItemModal = (eItem) => {
    setEditingItem(eItem);
    setShowItemModal(true);
    // console.log("set to show modal");
  };

  const showRemoveModal = (id) => {
    setShowRemoveItemModal(id);
  };

  const showItem = (site) => {
    props.showItemPassword(site);
  };

  const onCloseModal = () => {
    setShowItemModal(false);
    setTimeout(() => {
      setEditingItem(null);
    }, 500);
    // console.log("set to hide modal");
  };

  const onCloseRemoveItemModal = () => {
    setShowRemoveItemModal(null);
  };

  const onAddItemHandler = (newItem) => {
    const updates = {};
    console.log(newItem);
    updates[`sites/${userID}/${newItem.id}`] = newItem;
    console.log(updates);
    update(ref(firebaseDb), updates);

    setSites((pervSites) => {
      return [...pervSites, newItem];
    });

    setShowItemModal(false);
    setEditingItem(null);
  };

  const onEditItemHandler = (item) => {
    const updates = {};
    updates[`sites/${userID}/${item.id}`] = item;
    update(ref(firebaseDb), updates);

    setSites((pervSites) => {
      const updatedSites = pervSites.filter((pervItem) => {
        return pervItem.id !== item.id;
      });
      return [...updatedSites, item];
    });

    setShowItemModal(false);
    setTimeout(() => {
      setEditingItem(null);
    }, 500);
  };

  const onDeleteItemHandler = () => {
    // console.log(`/sites/${showRemoveItemModal}`);
    remove(child(ref(firebaseDb), `sites/${userID}/${showRemoveItemModal}`));

    const updatedSites = sites.filter((item) => {
      return item.id !== showRemoveItemModal;
    });
    setSites([...updatedSites]);
    setShowRemoveItemModal(null);
  };

  let sitesResult = null;
  if (sites.length > 0) {
    sitesResult = sites.map((site) => {
      return (
        <Site
          key={site.id}
          id={site.id}
          name={site.name}
          handleEdit={showEditItemModal}
          handleDelete={showRemoveModal}
          handleShow={showItem}
        />
      );
    });
  } else if (sites.length === 0) {
    sitesResult = (
      <Card>
        <p>Click on the + icon above to add a few sites to begin.</p>
      </Card>
    );
  }

  return (
    <>
      <Container>
        <Row>
          <Col xs={2}> </Col>
          <Col xs={8}>
            {" "}
            <h1>List Of Sites</h1>
          </Col>
          {isLoggedIn && !isLoading && (
            <Col xs={2}>
              <h1
                style={{
                  color: "#202020",
                  textAlign: "left",
                  cursor: "pointer",
                }}
                onClick={showAddItemModal}
              >
                <RiFileAddFill />
              </h1>
            </Col>
          )}
          {!isLoading && sitesResult}
          {isLoading && loadingSites}
        </Row>
      </Container>

      <Modal show={showItemModal} onHide={onCloseModal}>
        <Modal.Header className={classes.header} closeButton>
          <Modal.Title>
            {editingItem !== null ? "Edit" : "Add"} item
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SiteItemForm
            addItem={onAddItemHandler}
            editItem={onEditItemHandler}
            onHide={onCloseModal}
            editingItem={editingItem}
          />
        </Modal.Body>
      </Modal>

      <Modal
        show={showRemoveItemModal}
        onHide={onCloseRemoveItemModal}
        centered
      >
        <Modal.Header className={classes.header} closeButton>
          <Modal.Title>Remove item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <center>
            <p>Are you sure you want to delete this item?</p>
          </center>
          <Container>
            <Row>
              <Col>
                <div className="d-grid gap-2">
                  <Button
                    variant="outline-danger"
                    size="lg"
                    onClick={onDeleteItemHandler}
                  >
                    Delete
                  </Button>
                </div>
              </Col>
              <Col>
                <div className="d-grid gap-2">
                  <Button
                    variant="dark"
                    size="lg"
                    onClick={onCloseRemoveItemModal}
                  >
                    Cancel
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Sites;
