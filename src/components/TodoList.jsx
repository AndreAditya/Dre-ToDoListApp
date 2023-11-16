import { Container, Col, Alert } from "react-bootstrap";
import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import PropTypes from "prop-types";
import { useState } from "react";

const TodoList = ({
  id,
  task,
  status,
  updateCheck,
  deleteOneData,
  editOneData,
}) => {
  const [isTrue, setIsTrue] = useState(status);
  const [showAlert, setShowAlert] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState("");

  // mengubah nilai dari complete
  const changeHandlerChecked = () => {
    const newStatus = !isTrue;
    setIsTrue(newStatus);
    updateCheck(id, newStatus); // mengambil nilai id serta newStatus untuk filter All Done Todo
  };

  // mengambil id untuk delete
  // const deleteThisList = () => {
  //   // Konfirmasi sebelum menghapus
  //   const isConfirmed = window.confirm(
  //     "Apakah Anda yakin ingin menghapus task ini?"
  //   );
  //   if (isConfirmed) {
  //     deleteOneData(id);
  //   }
  // };

  // Menampilkan alert konfirmasi sebelum delete
  const showAlertConfirmation = () => {
    setTaskToDelete(task); // Set nama task yang akan dihapus
    setShowAlert(true);
  };

  // Mengambil id untuk delete
  const deleteThisList = () => {
    deleteOneData(id);
    setShowAlert(false); // Menutup alert setelah delete
  };

  // mengambil id untuk update
  const editThisList = () => {
    editOneData(id);
  };

  return (
    <Container>
      <Col className="border border-3 rounded d-flex justify-content-between my-2 py-2 mt-4">
        <div className=" ps-3">
          <p className={isTrue ? "complete-task" : ""}>{task}</p>
        </div>
        <div className="d-flex width-custom">
          <input
            type="checkbox"
            className="m-auto me-1 input-checkbox"
            checked={isTrue}
            onChange={changeHandlerChecked}
          />
          <FiEdit onClick={editThisList} className="m-auto fs-3 edit" />
          <MdDeleteForever
            onClick={showAlertConfirmation}
            className="m-auto fs-2 delete"
          />
        </div>
      </Col>

      {/* Alert delete confirm */}
      <Alert
        variant="danger"
        show={showAlert}
        onClose={() => setShowAlert(false)}
        dismissible
      >
        <Alert.Heading></Alert.Heading>
        <p style={{ fontSize: "15px" }}>
          Are you sure want to delete &quot;{taskToDelete}&quot;?
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <button
            onClick={deleteThisList}
            className="btn btn-danger me-3"
            style={{ fontSize: "14px", padding: "5px 10px" }}
          >
            Yes, delete
          </button>
          <button
            onClick={() => setShowAlert(false)}
            className="btn btn-secondary"
            style={{ fontSize: "14px", padding: "5px 10px" }}
          >
            cancel
          </button>
        </div>
      </Alert>
    </Container>
  );
};

TodoList.propTypes = {
  id: PropTypes.number,
  task: PropTypes.string,
  status: PropTypes.bool,
  updateCheck: PropTypes.func,
  deleteOneData: PropTypes.func,
  editOneData: PropTypes.func,
};

export default TodoList;
