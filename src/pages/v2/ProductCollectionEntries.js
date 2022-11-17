import Storefront from "@nacelle/storefront-sdk";
import Layout from "../../components/Layout";

function ProductCollectionEntries() {
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
        title="[V2] productCollectionEntries"
        requestFunc={getContent}
        fields={["spaceID", "token", "handle", "maxReturnedEntries"]}
      ></Layout>
    </>
  );
}

export default ProductCollectionEntries;
