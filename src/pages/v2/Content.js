import Storefront from "@nacelle/storefront-sdk";
import Layout from "../../components/Layout";

function Content() {
  async function getContent(inputs) {
    const client = Storefront({
      storefrontEndpoint: `https://storefront.api.nacelle.com/graphql/v1/spaces/${inputs.spaceID}`,
      token: inputs.token,
    });

    function setParams() {
      if (inputs.handle === undefined && inputs.nacelleEntryId === undefined) {
        // Return all content entries.
        return {};
      } else if (inputs.nacelleEntryId !== undefined) {
        return { nacelleEntryIds: [inputs.nacelleEntryId] };
      } else {
        return { handles: [inputs.handle] };
      }
    }

    const params = await setParams();

    const content = await client.content(params);

    console.log(content);
    return content;
  }

  return (
    <>
      <Layout
        title="[V2] content"
        note="To return all content, leave handle and nacelleEntryId blank."
        requestFunc={getContent}
        fields={["spaceID", "token", "handle", "nacelleEntryId"]}
      ></Layout>
    </>
  );
}

export default Content;
