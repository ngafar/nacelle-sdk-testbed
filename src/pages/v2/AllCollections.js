import Storefront from "@nacelle/storefront-sdk";
import Layout from "../../components/Layout";

function AllCollections() {
  async function getContent(inputs) {
    const client = Storefront({
      storefrontEndpoint: `https://storefront.api.nacelle.com/graphql/v1/spaces/${inputs.spaceID}`,
      token: inputs.token,
    });

    const content = await client.productCollections({
      maxReturnedEntries: inputs.maxReturnedEntries
    });

    console.log(content);
    return content;
  }

  return (
    <>
      <Layout
        title="[V2] Get All Collections"
        requestFunc={getContent}
        fields={["spaceID", "token", "maxReturnedEntries"]}
      ></Layout>
    </>
  );
}

export default AllCollections;
