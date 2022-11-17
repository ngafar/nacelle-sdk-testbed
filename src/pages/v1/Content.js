import NacelleClient from "@nacelle/client-js-sdk";
import Layout from "../../components/Layout";

function Content() {
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

    console.log(content)
    return content;
  }

  return (
    <>
      <Layout
        title="[V1] content"
        requestFunc={getContent}
        fields={["spaceID", "token", "handle", "type"]}
      ></Layout>
    </>
  );
}

export default Content;
