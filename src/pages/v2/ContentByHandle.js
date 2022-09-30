import Storefront from "@nacelle/storefront-sdk";
import Layout from "../../components/Layout";

function ContentByHandle() {
  async function getContent(inputs) {
    const client = Storefront({
      storefrontEndpoint: `https://storefront.api.nacelle.com/graphql/v1/spaces/${inputs.spaceID}`,
      token: inputs.token,
    });

    function setParams() {
      const handleParams = { handles: [inputs.handle] };

      const entryIdParams = { nacelleEntryIds: [inputs.nacelleEntryId] };

      if (inputs.nacelleEntryId !== undefined) {
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
        fields={["spaceID", "token", "handle", "nacelleEntryId"]}
      ></Layout>
    </>
  );
}

export default ContentByHandle;
