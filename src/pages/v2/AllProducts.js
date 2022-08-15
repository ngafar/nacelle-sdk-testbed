import Storefront from "@nacelle/storefront-sdk";
import Layout from "../../components/Layout";

function AllProducts() {
  async function getContent(spaceId, token, handle, nacelleEntryId, maxReturnedEntries) {
    const client = Storefront({
      storefrontEndpoint: `https://storefront.api.nacelle.com/graphql/v1/spaces/${spaceId}`,
      token: token,
    });

    console.log(maxReturnedEntries)

    const content = await client.products({
      maxReturnedEntries: maxReturnedEntries,
    });

    console.log(content);
    return content;
  }

  return (
    <>
      <Layout
        title="[V2] Get All Products"
        requestFunc={getContent}
        ignore={["handle", "nacelleEntryId"]}
      ></Layout>
    </>
  );
}

export default AllProducts;
