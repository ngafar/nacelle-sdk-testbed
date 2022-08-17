import NacelleClient from "@nacelle/client-js-sdk";
import createCompatibilityConnector from "@nacelle/compatibility-connector";
import Layout from "../../components/Layout";

function ProductByHandle() {
  async function getContent(spaceId, token, handle) {
    const compatibilityConnector = new createCompatibilityConnector({
      endpoint: `https://storefront.api.nacelle.com/graphql/v1/spaces/${spaceId}`,
      token: token,
      locale: "en-US",
    });

    const client = new NacelleClient({
      connector: compatibilityConnector,
    });

    const content = await client.data.product({
      handle: handle,
    });

    return content;
  }

  return (
    <>
      <Layout
        title="[CC] Get Product by Handle"
        requestFunc={getContent}
        ignore={["maxReturnedEntries", "nacelleEntryId"]}
      ></Layout>
    </>
  );
}

export default ProductByHandle;
