import { Col, Button, Row, Container, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { useState } from "react";

function TodoDeleteButton({ resetData, resetDoneData }) {
  const [showDeleteAllModal, setShowDeleteAllModal] = useState(false);
  const [showDeleteDoneModal, setShowDeleteDoneModal] = useState(false);

  const handleDeleteAll = () => {
    setShowDeleteAllModal(true);
  };

  const handleDeleteDone = () => {
    setShowDeleteDoneModal(true);
  };

  const confirmDeleteAll = () => {
    resetData();
    setShowDeleteAllModal(false);
  };

  const confirmDeleteDone = () => {
    resetDoneData();
    setShowDeleteDoneModal(false);
  };

  return (
    <Container>
      <Row className="align-items-center d-flex md-5">
        <Col>
          <Button onClick={handleDeleteDone} className="button-red border">
            Delete Done Tasks
          </Button>
          <Modal
            show={showDeleteDoneModal}
            onHide={() => setShowDeleteDoneModal(false)}
          >
            <Modal.Header closeButton style={{ background: "#f8d7da" }}>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ background: "#f8d7da" }}>
              <p style={{ fontSize: "18px" }}>
                Are you sure want to delete done task?
              </p>
            </Modal.Body>
            <Modal.Footer style={{ background: "#f8d7da" }}>
              <Button
                variant="secondary"
                onClick={() => setShowDeleteDoneModal(false)}
                style={{ fontSize: "14px", padding: "5px 10px" }}
              >
                Cancel
              </Button>
              <Button
                variant="danger"
                onClick={confirmDeleteDone}
                style={{ fontSize: "14px", padding: "5px 10px" }}
              >
                Yes, Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
        <Col>
          <Button onClick={handleDeleteAll} className="button-red border">
            Delete All Tasks
          </Button>
          <Modal
            show={showDeleteAllModal}
            onHide={() => setShowDeleteAllModal(false)}
          >
            <Modal.Header closeButton style={{ background: "#f8d7da" }}>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ background: "#f8d7da" }}>
              <p style={{ fontSize: "18px" }}>
                Are you sure want to delete all task?
              </p>
            </Modal.Body>
            <Modal.Footer style={{ background: "#f8d7da" }}>
              <Button
                variant="secondary"
                onClick={() => setShowDeleteAllModal(false)}
                style={{ fontSize: "14px", padding: "5px 10px" }}
              >
                Cancel
              </Button>
              <Button
                variant="danger"
                onClick={confirmDeleteAll}
                style={{ fontSize: "14px", padding: "5px 10px" }}
              >
                Yes, Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
}

TodoDeleteButton.propTypes = {
  resetData: PropTypes.func,
  resetDoneData: PropTypes.func,
};

export default TodoDeleteButton;
