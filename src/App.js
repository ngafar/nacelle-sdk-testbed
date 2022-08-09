import { useState } from "react";
import Storefront from "@nacelle/storefront-sdk";
import "./styles.css";

/* compat connector: */
import NacelleClient from '@nacelle/client-js-sdk';
import createCompatibilityConnector from "@nacelle/compatibility-connector";

function App() {
  const [spaceId, setSpaceId] = useState("");
  const [token, setToken] = useState("");
  const [handle, setHandle] = useState("");
  const [nacelleEntryId, setNacelleEntryId] = useState("");
  const [jsonResponse, setJsonResponse] = useState({
    msg: "waiting on credentials",
  });

  async function getContent() {
    const compatibilityConnector = new createCompatibilityConnector({
      endpoint: `https://storefront.api.nacelle.com/graphql/v1/spaces/${spaceId}`,
      token: token,
      locale: "en-US",
    });

    const client = new NacelleClient({
      connector: compatibilityConnector,
    });

    /*
    const client = Storefront({
      storefrontEndpoint: `https://storefront.api.nacelle.com/graphql/v1/spaces/${spaceId}`,
      token: token,
    });
    */

    const content = await client.data.content({
      handles: [handle],
    });
    
    setJsonResponse(content[0]);
  }

  return (
    <div className="App">
      <h1>[V2/SDK] Get Content by Handle</h1>
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
        <button onClick={getContent}>Submit</button>
      </section>

      <section>
        <h2>Response</h2>
        <button
          onClick={() => {
            navigator.clipboard.writeText(
              JSON.stringify(jsonResponse, null, 2)
            );
          }}
        >
          Copy JSON
        </button>
        <pre>{JSON.stringify(jsonResponse, null, 2)}</pre>
      </section>
    </div>
  );
}

export default App;
