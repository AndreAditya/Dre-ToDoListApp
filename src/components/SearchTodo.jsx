import { Container, InputGroup, Form, Row, Col, Button } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const SearchToDo = ({ filteredSearch }) => {
  const [search, setSearch] = useState("");

  const searchClick = (e) => {
    e.preventDefault();
    filteredSearch(search);
    setSearch("");
  };
  const navigate = useNavigate();
  // pindah ke halaman AddPages
  const goToAdd = () => {
    navigate("/AddPages");
  };
  return (
    <Container className="mt-5">
      <h2 className="text-center fw-bold">Todo Search</h2>
      <Row className="border rounded p-3 mt-3">
        <Col className="col-7">
          <Form onSubmit={searchClick}>
            <InputGroup className="mb-3">
              <InputGroup.Text className="search-logo">
                <BiSearch />
              </InputGroup.Text>
              <Form.Control
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Todo..."
                className="custom-input"
                aria-label="Search"
              />
            </InputGroup>
            <Button type="submit" className="custom-button">
              Search
            </Button>
          </Form>
        </Col>
        <Col className="d-flex flex-column justify-content-end align-items-end">
          <Button onClick={goToAdd} className="button-addnew">
            Add New Task
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

SearchToDo.propTypes = {
  filteredSearch: PropTypes.func,
};

export default SearchToDo;
