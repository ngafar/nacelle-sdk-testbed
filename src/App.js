import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Index from "./pages/v2/Index";
import Test from "./pages/v2/Test";

import v2_routes_group from "./pages/v2/_routes";

function App() {
  return (
    <>
      <h1>Test</h1>
      <Routes>
        {v2_routes_group.map((route, idx) => {
          return (
            <Route key={idx} path={route.path} element={<route.component />} />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
