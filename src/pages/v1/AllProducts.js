import NacelleClient from "@nacelle/client-js-sdk";
import Layout from "../../components/Layout";

function AllProducts() {
  async function getContent(spaceId, token, handle, nacelleEntryId) {
    const settings = {
      id: spaceId,
      token: token,
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
        requestFunc={getContent}
        ignore={["handle", "nacelleEntryId", "maxReturnedEntries"]}
      ></Layout>
    </>
  );
}

export default AllProducts;
