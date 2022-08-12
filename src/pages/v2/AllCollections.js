import Storefront from "@nacelle/storefront-sdk";
import Layout from "../../layouts/Layout";

function AllCollections() {
  async function getContent(spaceId, token, handle) {
    const client = Storefront({
      storefrontEndpoint: `https://storefront.api.nacelle.com/graphql/v1/spaces/${spaceId}`,
      token: token,
    });

    const content = await client.productCollections({});

    console.log(content);
    return content;
  }

  return (
    <>
      <Layout title="[V2] Get All Collections" requestFunc={getContent}></Layout>
    </>
  );
}

export default AllCollections;