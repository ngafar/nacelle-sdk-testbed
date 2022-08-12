import { useState } from "react";
import Response from "./Response";

function Layout(props) {
  const [spaceId, setSpaceId] = useState("");
  const [token, setToken] = useState("");
  const [handle, setHandle] = useState("");
  const [nacelleEntryId, setNacelleEntryId] = useState("");
  const [jsonResponse, setJsonResponse] = useState({
    msg: "waiting on credentials",
  });

  return (
    <>
      <h1>{[props.title]}</h1>
      <section>
        <h2>Settings</h2>
        <label htmlFor="spaceId">spaceId</label>
        <input
          type="text"
          id="spaceId"
          name="spaceId"
          value={spaceId}
          onChange={(e) => setSpaceId(e.target.value)}
        />
        <label htmlFor="token">token</label>
        <input
          type="text"
          id="token"
          name="token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <label htmlFor="handle">handle</label>
        <input
          type="text"
          id="handle"
          name="handle"
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
        />
        <label htmlFor="nacelleEntryId">nacelleEntryId (do not use)</label>
        <input
          type="text"
          id="nacelleEntryId"
          name="nacelleEntryId"
          value={nacelleEntryId}
          onChange={(e) => setNacelleEntryId(e.target.value)}
        />

        <button
          onClick={() =>
            props.requestFunc(spaceId, token, handle).then((resp) => {
              setJsonResponse(resp);
            })
          }
        >
          Submit
        </button>
      </section>

      <Response jsonResponse={jsonResponse}></Response>
    </>
  );
}

export default Layout;
