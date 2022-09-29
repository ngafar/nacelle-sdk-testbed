import Storefront from "@nacelle/storefront-sdk";
import Layout from "../../components/Layout";

function ContentByHandle() {
  async function getContent(spaceId, token, handle, nacelleEntryId) {
    const client = Storefront({
      storefrontEndpoint: `https://storefront.api.nacelle.com/graphql/v1/spaces/${spaceId}`,
      token: token,
    });

    function setParams() {
      const handleParams = { handles: [handle] };

      const entryIdParams = { nacelleEntryIds: [nacelleEntryId] };

      if (nacelleEntryId !== "") {
        return entryIdParams;
      } else {
        return handleParams;
      }
    }

    const params = await setParams();

    const content = await client.content(params);

    return content;
  }

  return (
    <>
      <Layout
        title="[V2] Get Content by Handle"
        requestFunc={getContent}
        ignore={["maxReturnedEntries"]}
      ></Layout>
    </>
  );
}

export default ContentByHandle;
