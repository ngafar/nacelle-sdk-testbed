import NacelleClient from "@nacelle/client-js-sdk";
import Layout from "../../components/Layout";

function Collection() {
  async function getContent(inputs) {
    const settings = {
      id: inputs.spaceID,
      token: inputs.token,
      nacelleEndpoint: "https://hailfrequency.com/v3/graphql",
      useStatic: false,
    };

    const client = new NacelleClient(settings);
    const content = await client.data.collection({ handle: inputs.handle });

    console.log(content)
    return content;
  }

  return (
    <>
      <Layout
        title="[V1] collection"
        requestFunc={getContent}
        fields={["spaceID", "token", "handle"]}
      ></Layout>
    </>
  );
}

export default Collection;
