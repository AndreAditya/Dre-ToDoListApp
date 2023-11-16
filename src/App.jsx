import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPages from "./pages/MainPages";
import AddPages from "./pages/AddPages";
import UpdatePages from "./pages/UpdatePages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPages />} />
        <Route path="/AddPages" element={<AddPages />} />
        <Route path="/UpdatePages" element={<UpdatePages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
