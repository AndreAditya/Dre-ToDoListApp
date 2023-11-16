import { Container } from "react-bootstrap";
import AddTask from "../components/AddTask";
import { useState } from "react";
import localData from "../data/todos.json";
import { useNavigate } from "react-router-dom";

const AddPages = () => {
  const [todos, setTodos] = useState(localData);
  const navigate = useNavigate();

  const handleAddTodo = (task) => {
    const newTodo = [
      ...todos,
      {
        id: +new Date(),
        task,
        completed: false,
      },
    ];

    setTodos(newTodo);
    navigate("/", { state: { dataMain: newTodo } });
  };

  return (
    <>
      <Container className="mt-5">
        <AddTask onAddTask={handleAddTodo} />
      </Container>
    </>
  );
};

export default AddPages;
