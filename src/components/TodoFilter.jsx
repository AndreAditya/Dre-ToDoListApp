import { Container, Col, Row, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const TodoFilter = ({ checkFilter }) => {
  return (
    <Container>
      <h2 className="text-center mt-5 fw-bold">Todo List</h2>
      <Row className="my-3">
        <Col>
          <Button onClick={() => checkFilter(0)} className="custom-button">
            All
          </Button>
        </Col>
        <Col>
          <Button onClick={() => checkFilter(1)} className="custom-button">
            Done
          </Button>
        </Col>
        <Col>
          <Button onClick={() => checkFilter(2)} className="custom-button">
            Todo
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

TodoFilter.propTypes = {
  checkFilter: PropTypes.func,
};

export default TodoFilter;
