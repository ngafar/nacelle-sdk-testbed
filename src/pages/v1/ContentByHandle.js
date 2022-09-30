import NacelleClient from "@nacelle/client-js-sdk";
import Layout from "../../components/Layout";

function ContentByHandle() {
  async function getContent(inputs) {
    const settings = {
      id: inputs.spaceID,
      token: inputs.token,
      nacelleEndpoint: "https://hailfrequency.com/v3/graphql",
      useStatic: false,
    };

    const client = new NacelleClient(settings);
    const content = await client.data.content({
      handle: inputs.handle,
      type: inputs.type,
    });

    return content;
  }

  return (
    <>
      <Layout
        title="[V1] Get Content by Handle"
        requestFunc={getContent}
        fields={["spaceID", "token", "handle", "type"]}
        ignore={["nacelleEntryId", "maxReturnedEntries"]}
      ></Layout>
    </>
  );
}

export default ContentByHandle;
