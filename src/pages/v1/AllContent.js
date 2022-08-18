import NacelleClient from "@nacelle/client-js-sdk";
import Layout from "../../components/Layout";

function AllContent() {
  async function getContent(spaceId, token, handle, nacelleEntryId, maxReturnedEntries) {
    const settings = {
      id: spaceId,
      token: token,
      nacelleEndpoint: "https://hailfrequency.com/v3/graphql",
      useStatic: false,
    };

    const client = new NacelleClient(settings);
    const content = await client.data.allContent({limit: maxReturnedEntries});

    return content;
  }

  return (
    <>
      <Layout
        title="[V1] Get All Collections"
        note="This can take some time if there are a lot of entries."
        requestFunc={getContent}
        ignore={["handle", "nacelleEntryId"]}
      ></Layout>
    </>
  );
}

export default AllContent;
