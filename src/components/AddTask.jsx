import { Container, Form, Col, Button, Row, InputGroup } from "react-bootstrap";
import { BiAddToQueue } from "react-icons/bi";
import { useState } from "react";
import PropTypes from "prop-types";

const AddTask = ({ onAddTask }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) return;

    onAddTask(value);
  };

  return (
    <>
      <Container className="mt-3">
        <h2 className="text-center fw-bold">Input Todo</h2>
        <Row className="border rounded p-3 mt-4">
          <Col className="col-12">
            <Form onSubmit={handleSubmit}>
              <InputGroup className="mb-3">
                <InputGroup.Text className="search-logo">
                  <BiAddToQueue />
                </InputGroup.Text>
                <Form.Control
                  className="custom-input"
                  placeholder="Add Task"
                  aria-label="add"
                  type="text"
                  onChange={(e) => setValue(e.target.value)}
                />
              </InputGroup>
              <Button type="submit" className="custom-button">
                Submit
              </Button>
              <Button className="custom-button mt-4">Go Back</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

AddTask.propTypes = {
  onAddTask: PropTypes.func,
};

export default AddTask;
