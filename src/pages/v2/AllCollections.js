import Storefront from "@nacelle/storefront-sdk";
import Layout from "../../components/Layout";

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
      <Layout
        title="[V2] Get All Collections"
        requestFunc={getContent}
        ignore={["handle", "nacelleEntryId"]}
      ></Layout>
    </>
  );
}

export default AllCollections;
