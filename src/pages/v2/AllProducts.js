import Storefront from "@nacelle/storefront-sdk";
import Layout from "../../components/Layout";

function AllProducts() {
  async function getContent(inputs) {
    const client = Storefront({
      storefrontEndpoint: `https://storefront.api.nacelle.com/graphql/v1/spaces/${inputs.spaceID}`,
      token: inputs.token,
    });

    console.log(inputs.maxReturnedEntries)

    const content = await client.products({
      maxReturnedEntries: inputs.maxReturnedEntries,
    });

    console.log(content);
    return content;
  }

  return (
    <>
      <Layout
        title="[V2] Get All Products"
        requestFunc={getContent}
        fields={["spaceID", "token", "maxReturnedEntries"]}
      ></Layout>
    </>
  );
}

export default AllProducts;
