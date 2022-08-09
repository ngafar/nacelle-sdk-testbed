import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Index from "./pages/v2/Index";
import Test from "./pages/v2/Test";

import cc_routes_group from "./pages/cc/_routes";
import v2_routes_group from "./pages/v2/_routes";

function App() {
  return (
    <div className="App">
      <h1>Test</h1>
      <Routes>
        {cc_routes_group.map((route, idx) => {
          return (
            <Route key={idx} path={route.path} element={<route.component />} />
          );
        })}

        {v2_routes_group.map((route, idx) => {
          return (
            <Route key={idx} path={route.path} element={<route.component />} />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
