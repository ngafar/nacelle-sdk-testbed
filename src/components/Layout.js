import { useState } from "react";
import Response from "./Response";

function Layout(props) {
  const [spaceId, setSpaceId] = useState("");
  const [token, setToken] = useState("");
  const [handle, setHandle] = useState("");
  const [nacelleEntryId, setNacelleEntryId] = useState("");
  const [maxReturnedEntries, setMaxReturnedEntries] = useState(5);
  const [jsonResponse, setJsonResponse] = useState({
    msg: "waiting on credentials",
  });

  return (
    <>
      <section>
        <h2>{props.title}</h2>

        {props.note ? <p>{props.note}</p> : <></>}
      </section>

      <section>
        <h3>Settings</h3>
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
        <label
          htmlFor="handle"
          hidden={
            props.ignore && props.ignore.includes("handle") ? true : false
          }
        >
          handle
        </label>
        <input
          type="text"
          id="handle"
          name="handle"
          value={handle}
          hidden={
            props.ignore && props.ignore.includes("handle") ? true : false
          }
          onChange={(e) => setHandle(e.target.value)}
        />
        <label
          htmlFor="nacelleEntryId"
          hidden={
            props.ignore && props.ignore.includes("nacelleEntryId")
              ? true
              : false
          }
        >
          nacelleEntryId (not required if handle was provided)
        </label>
        <input
          type="text"
          id="nacelleEntryId"
          name="nacelleEntryId"
          value={nacelleEntryId}
          hidden={
            props.ignore && props.ignore.includes("nacelleEntryId")
              ? true
              : false
          }
          onChange={(e) => setNacelleEntryId(e.target.value)}
        />
        <label
          htmlFor="maxReturnedEntries"
          hidden={
            props.ignore && props.ignore.includes("maxReturnedEntries")
              ? true
              : false
          }
        >
          maxReturnedEntries
        </label>
        <input
          type="text"
          id="maxReturnedEntries"
          name="maxReturnedEntries"
          value={maxReturnedEntries}
          hidden={
            props.ignore && props.ignore.includes("maxReturnedEntries")
              ? true
              : false
          }
          onChange={(e) => setMaxReturnedEntries(e.target.value)}
        />

        <button
          onClick={() =>
            props
              .requestFunc(spaceId, token, handle, nacelleEntryId, maxReturnedEntries)
              .then((resp) => {
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
