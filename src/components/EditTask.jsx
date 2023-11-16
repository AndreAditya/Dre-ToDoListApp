import { Row, Col, Container, InputGroup, Form, Button } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const EditTask = ({ dataFromMain, edit }) => {
  const navigate = useNavigate();

  // set edited dengan data yang telah dipilih
  const [edited] = useState(
    edit
      ? dataFromMain.filter((data) => data.id === edit)
      : {
          id: 0,
          task: "",
          complete: false,
        }
  );

  const [input, setInput] = useState(edit ? edited[0].task : "");

  // update input sesuai dengan inputan user
  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const updateData = () => {
    // data id yang sama, maka akan dirubah sesuai input
    const dataEdited = dataFromMain.map((data) => {
      if (data.id === edit) {
        return { ...data, task: input };
      }
      return data;
    });
    // arahkan ke halaman Main Pages
    navigate("/", {
      state: {
        dataMain: dataEdited,
      },
    });
  };

  const updatetheData = (e) => {
    e.preventDefault();
    return updateData();
  };

  const goToMain = () => {
    navigate("/", {
      state: {
        dataMain: dataFromMain,
      },
    });
  };

  return (
    <Container className="mt-3">
      <h2 className="text-center fw-bold">Update Todo</h2>
      <Row className="border rounded p-3 mt-4">
        <Col className="col-12">
          {/* add atau update dilakukan disini */}
          <Form onSubmit={updatetheData}>
            <InputGroup className="mb-3">
              <InputGroup.Text className="search-logo">
                <FaEdit />
              </InputGroup.Text>
              <Form.Control
                onChange={changeHandler}
                className="custom-input"
                placeholder="Update"
                aria-label="add"
                value={input}
              />
            </InputGroup>
            <Button type="submit" className="custom-button">
              Update
            </Button>
            <Button onClick={goToMain} className="custom-button mt-4">
              Go Back
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

EditTask.propTypes = {
  dataFromMain: PropTypes.arrayOf(PropTypes.object),
  edit: PropTypes.number,
};

export default EditTask;
