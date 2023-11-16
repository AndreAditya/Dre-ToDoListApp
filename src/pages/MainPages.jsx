import { Container, Row } from "react-bootstrap";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SearchToDo from "../components/SearchTodo";
import TodoList from "../components/TodoList";
import TodoFilter from "../components/TodoFilter";
import todos from "../data/todos.json";
import TodoDeleteButton from "../components/TodoDeleteButton";

const MainPages = () => {
  const data = todos;
  const location = useLocation();
  const [searchHasil, setSearchHasil] = useState("");
  const [dataState, setDataState] = useState(
    location.state && location.state.dataMain ? location.state.dataMain : data
  );
  const [filter, setFilter] = useState(0);
  const navigate = useNavigate();

  // data diambil dari inputan search
  const filteredSearch = (searchData) => {
    setSearchHasil(searchData);
  };

  // p inputan dengan data yang ada di bandingkan
  const filterData = (search, data) => {
    if (!search) {
      return data;
    } else {
      return data.filter((obj) => obj.task.toLowerCase().includes(search));
    }
  };

  // set filter dari filterButton
  const filterCheck = (passingData) => {
    setFilter(passingData);
  };

  // nilai komponen TodoFilter diarahkan ke sini
  const filterDataButton = (dataFilter) => {
    if (filter === 0) {
      return dataFilter;
    } else if (filter === 1) {
      return dataFilter.filter((obj) => obj.complete === true);
    } else {
      return dataFilter.filter((obj) => obj.complete === false);
    }
  };

  const updateCheck = (id, newStatus) => {
    setDataState((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, complete: newStatus } : item
      )
    );
  };

  // funsgi Delete All Task
  // menghapus semua data
  const resetData = () => {
    setDataState([]);
  };

  // fungsi Delete Done Task
  // menghapus data yang statusnya Done
  const resetDoneData = () => {
    setDataState((prevData) =>
      prevData.filter((item) => item.complete === false)
    );
  };

  // delete sesuai data yang dipilih
  const deleteOneData = (deleteOne) => {
    setDataState((prev) => prev.filter((item) => item.id !== deleteOne));
  };

  // ambil id untuk diedit kemudian pindah ke /UpdatePages untuk melakukan updateData
  const editOneData = (editTask) => {
    navigate("/UpdatePages", { state: { dataState, id: editTask } });
  };

  const filteredData = filterData(searchHasil, dataState);
  const filteredData2 = filterDataButton(filteredData);

  return (
    <>
      <Container>
        <SearchToDo filteredSearch={filteredSearch} />
        <TodoFilter checkFilter={filterCheck} />
        {filteredData2.length === 0 ? (
          <p className="mt-5 text-center text-danger"> Data Kosong ! </p>
        ) : (
          <Row className="d-flex flex-column">
            {filteredData2.map((item) => (
              <TodoList
                key={item.id}
                id={item.id}
                task={item.task}
                status={item.complete}
                updateCheck={updateCheck}
                editOneData={editOneData}
                deleteOneData={deleteOneData}
              />
            ))}
          </Row>
        )}
      </Container>
      <Container className="my-5">
        <TodoDeleteButton
          className
          resetData={resetData}
          resetDoneData={resetDoneData}
        />
      </Container>
    </>
  );
};

export default MainPages;
