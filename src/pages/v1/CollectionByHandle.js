import NacelleClient from "@nacelle/client-js-sdk";
import Layout from "../../components/Layout";

function CollectionByHandle() {
  async function getContent(inputs) {
    const settings = {
      id: inputs.spaceID,
      token: inputs.token,
      nacelleEndpoint: "https://hailfrequency.com/v3/graphql",
      useStatic: false,
    };

    const client = new NacelleClient(settings);
    const content = await client.data.collection({ handle: inputs.handle });

    return content;
  }

  return (
    <>
      <Layout
        title="[V1] Get Collection by Handle"
        requestFunc={getContent}
        fields={["spaceID", "token", "handle"]}
      ></Layout>
    </>
  );
}

export default CollectionByHandle;
