import Storefront from "@nacelle/storefront-sdk";
import Layout from "../../components/Layout";

function AllProdsInCollection() {
  async function getContent(inputs) {
    const client = Storefront({
      storefrontEndpoint: `https://storefront.api.nacelle.com/graphql/v1/spaces/${inputs.spaceID}`,
      token: inputs.token,
    });

    const content = await client.productCollectionEntries({
      handle: inputs.handle,
      maxReturnedEntries: inputs.maxReturnedEntries, // -1 to get all
    });

    console.log(content);
    return content;
  }

  return (
    <>
      <Layout
        title="[V2] Get All Products in Collection"
        requestFunc={getContent}
        fields={["spaceID", "token", "handle", "maxReturnedEntries"]}
        ignore={["maxReturnedEntries"]}
      ></Layout>
    </>
  );
}

export default AllProdsInCollection;
