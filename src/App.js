import { Routes, Route, Link } from "react-router-dom";
import "./styles.css";
import ContentByHandleV2SDK from "./pages/ContentByHandleV2SDK";
import Test from "./pages/Test";

function App() {
  return (
    <>
      <Routes>
        <Route path="/v2/content-by-handle" element={<ContentByHandleV2SDK />} />
      </Routes>
    </>
  );
}

export default App;
