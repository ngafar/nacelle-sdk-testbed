import { Routes, Route } from "react-router-dom";
import "./styles.css";

import Home from "./pages/Home";
import v1_routes_group from "./pages/v1/_routes";
import v2_routes_group from "./pages/v2/_routes";
import cc_routes_group from "./pages/cc/_routes";

function App() {
  return (
    <div className="App">
      <h1>
        <a href="/">Nacelle SDK Testbed</a>
      </h1>

      <Routes>
        <Route path="/" element={<Home />} />

        {v1_routes_group.map((route, idx) => {
          return (
            <Route key={idx} path={route.path} element={<route.component />} />
          );
        })}

        {v2_routes_group.map((route, idx) => {
          return (
            <Route key={idx} path={route.path} element={<route.component />} />
          );
        })}

        {cc_routes_group.map((route, idx) => {
          return (
            <Route key={idx} path={route.path} element={<route.component />} />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
