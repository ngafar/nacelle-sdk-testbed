import Storefront from "@nacelle/storefront-sdk";
import Layout from "../../components/Layout";

function CollectionByHandle() {
  async function getContent(spaceId, token, handle) {
    const client = Storefront({
      storefrontEndpoint: `https://storefront.api.nacelle.com/graphql/v1/spaces/${spaceId}`,
      token: token,
    });

    const content = await client.productCollections({
      handles: [handle],
    });

    return content[0];
  }

  return (
    <>
      <Layout
        title="[V2] Get Collection by Handle"
        requestFunc={getContent}
      ></Layout>
    </>
  );
}

export default CollectionByHandle;
