import EditTask from "../components/EditTask";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const UpdatePages = () => {
  const location = useLocation();
  const [data] = useState(location.state.dataState);
  const editTask = location.state.id;
  return <EditTask dataFromMain={data} edit={editTask} />;
};

export default UpdatePages;
