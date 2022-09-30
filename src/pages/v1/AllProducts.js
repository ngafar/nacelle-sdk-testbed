import NacelleClient from "@nacelle/client-js-sdk";
import Layout from "../../components/Layout";

function AllProducts() {
  async function getContent(inputs) {
    const settings = {
      id: inputs.spaceID,
      token: inputs.token,
      nacelleEndpoint: "https://hailfrequency.com/v3/graphql",
      useStatic: false,
    };

    const client = new NacelleClient(settings);
    const content = await client.data.allProducts();

    return content;
  }

  return (
    <>
      <Layout
        title="[V1] Get All Products"
        note="This can take some time if there are a lot of entries."
        requestFunc={getContent}
        fields={["spaceID", "token"]}
        ignore={["handle", "nacelleEntryId", "maxReturnedEntries"]}
      ></Layout>
    </>
  );
}

export default AllProducts;
