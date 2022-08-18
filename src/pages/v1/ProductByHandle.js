import NacelleClient from "@nacelle/client-js-sdk";
import Layout from "../../components/Layout";

function ProductByHandle() {
  async function getContent(spaceId, token, handle, nacelleEntryId) {
    const settings = {
      id: spaceId,
      token: token,
      nacelleEndpoint: "https://hailfrequency.com/v3/graphql",
      useStatic: false,
    };

    const client = new NacelleClient(settings);
    const product = await client.data.product({ handle: handle });

    return product;
  }

  return (
    <>
      <Layout
        title="[V1] Get Product by Handle"
        requestFunc={getContent}
        ignore={["nacelleEntryId", "maxReturnedEntries"]}
      ></Layout>
    </>
  );
}

export default ProductByHandle;
