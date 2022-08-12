import Storefront from "@nacelle/storefront-sdk";
import Layout from "../../layouts/Layout";

function ContentByHandle() {
  async function getContent(spaceId, token, handle) {
    const client = Storefront({
      storefrontEndpoint: `https://storefront.api.nacelle.com/graphql/v1/spaces/${spaceId}`,
      token: token,
    });

    const content = await client.content({
      handles: [handle],
    });

    return content[0];
  }

  return (
    <>
      <Layout
        title="[V2] Get Content by Handle"
        requestFunc={getContent}
      ></Layout>
    </>
  );
}

export default ContentByHandle;
