import Storefront from "@nacelle/storefront-sdk";
import Layout from "../../components/Layout";

function ContentByHandle() {
  async function getContent(spaceId, token, handle, nacelleEntryId) {
    const client = Storefront({
      storefrontEndpoint: `https://storefront.api.nacelle.com/graphql/v1/spaces/${spaceId}`,
      token: token,
    });

    const content = await client.products({
      handles: [handle],
    });

    return content[0];
  }

  return (
    <>
      <Layout
        title="[V2] Get Product by Handle"
        requestFunc={getContent}
      ></Layout>
    </>
  );
}

export default ContentByHandle;
