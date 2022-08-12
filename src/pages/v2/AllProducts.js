import Storefront from "@nacelle/storefront-sdk";
import Layout from "../../components/Layout";

function AllProducts() {
  async function getContent(spaceId, token, handle) {
    const client = Storefront({
      storefrontEndpoint: `https://storefront.api.nacelle.com/graphql/v1/spaces/${spaceId}`,
      token: token,
    });

    const content = await client.products({});

    console.log(content);
    return content;
  }

  return (
    <>
      <Layout title="[V2] Get All Products" requestFunc={getContent}></Layout>
    </>
  );
}

export default AllProducts;
