import v1_routes_group from "./v1/_routes";
import v2_routes_group from "./v2/_routes";
import cc_routes_group from "./cc/_routes";

function Home() {
  return (
    <>
      <h2>V1</h2>
      <ul>
        {v1_routes_group.map((route, idx) => {
          return (
            <li key={idx}>
              <a href={route.path}>{route.name}</a>
            </li>
          );
        })}
      </ul>

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

      <h2>Compatibility Connector</h2>
      <ul>
        {cc_routes_group.map((route, idx) => {
          return (
            <li key={idx}>
              <a href={route.path}>{route.name}</a>
            </li>
          );
        })}
      </ul>

      <hr />

      <p>
        Source code available on{" "}
        <a href="https://github.com/ngafar/nacelle-sdk-testbed">Github</a>
      </p>
    </>
  );
}

export default Home;
