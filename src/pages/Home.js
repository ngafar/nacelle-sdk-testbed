import { Link } from "react-router-dom";
import v2_routes_group from "./v2/_routes";

function Home() {
  return (
    <>
      <h2>V2</h2>
      <ul>
        {v2_routes_group.map((route, idx) => {
          return (
            <li key={idx}>
              <a href={route.path}>{route.name}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Home;
