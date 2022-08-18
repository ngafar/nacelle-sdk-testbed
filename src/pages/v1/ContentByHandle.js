import NacelleClient from "@nacelle/client-js-sdk";
import Layout from "../../components/Layout";

function ContentByHandle() {
  async function getContent(spaceId, token, handle, nacelleEntryId) {
    const settings = {
      id: spaceId,
      token: token,
      nacelleEndpoint: "https://hailfrequency.com/v3/graphql",
      useStatic: false,
    };

    const client = new NacelleClient(settings);
    const content = await client.data.content({
      handle: handle,
      type: "article",
    });

    return content;
  }

  return (
    <>
      <Layout
        title="[V1] Get Content by Handle"
        requestFunc={getContent}
        ignore={["nacelleEntryId", "maxReturnedEntries"]}
      ></Layout>
    </>
  );
}

export default ContentByHandle;
