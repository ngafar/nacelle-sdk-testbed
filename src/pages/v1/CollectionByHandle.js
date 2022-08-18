import NacelleClient from "@nacelle/client-js-sdk";
import Layout from "../../components/Layout";

function CollectionByHandle() {
  async function getContent(spaceId, token, handle, nacelleEntryId) {
    const settings = {
      id: spaceId,
      token: token,
      nacelleEndpoint: "https://hailfrequency.com/v3/graphql",
      useStatic: false,
    };

    const client = new NacelleClient(settings);
    const content = await client.data.collection({ handle: handle });

    return content;
  }

  return (
    <>
      <Layout
        title="[V1] Get Collection by Handle"
        requestFunc={getContent}
        ignore={["nacelleEntryId", "maxReturnedEntries"]}
      ></Layout>
    </>
  );
}

export default CollectionByHandle;
