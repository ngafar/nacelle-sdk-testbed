import { useState } from "react";
import NacelleClient from "@nacelle/client-js-sdk";
import createCompatibilityConnector from "@nacelle/compatibility-connector";
import Response from "../../layouts/Response";

function ContentByHandle() {
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

    const content = await client.data.content({
      handle: handle,
    });

    setJsonResponse(content);
  }

  return (
    <>
      <h1>[CC] Get Content by Handle</h1>
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

      <Response jsonResponse={jsonResponse}></Response>
    </>
  );
}

export default ContentByHandle;
