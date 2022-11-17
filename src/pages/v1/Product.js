import NacelleClient from "@nacelle/client-js-sdk";
import Layout from "../../components/Layout";

function Product() {
  async function getContent(inputs) {
    const settings = {
      id: inputs.spaceID,
      token: inputs.token,
      nacelleEndpoint: "https://hailfrequency.com/v3/graphql",
      useStatic: false,
    };

    const client = new NacelleClient(settings);
    const content = await client.data.product({ handle: inputs.handle });

    console.log(content)
    return content;
  }

  return (
    <>
      <Layout
        title="[V1] product"
        requestFunc={getContent}
        fields={["spaceID", "token", "handle"]}
      ></Layout>
    </>
  );
}

export default Product;
