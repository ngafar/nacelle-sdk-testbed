import Storefront from "@nacelle/storefront-sdk";
import Layout from "../../components/Layout";

function ProductCollections() {
  async function getContent(inputs) {
    const client = Storefront({
      storefrontEndpoint: `https://storefront.api.nacelle.com/graphql/v1/spaces/${inputs.spaceID}`,
      token: inputs.token,
    });

    function setParams() {
      if (inputs.handle === undefined && inputs.nacelleEntryId === undefined) {
        // Return all collections.
        return {};
      } else if (inputs.nacelleEntryId !== undefined) {
        return { nacelleEntryIds: [inputs.nacelleEntryId] };
      } else {
        return { handles: [inputs.handle] };
      }
    }

    const params = await setParams();

    const content = await client.productCollections(params);

    console.log(content);
    return content;
  }

  return (
    <>
      <Layout
        title="[V2] productCollections"
        note="To return all collections, leave handle and nacelleEntryId blank."
        requestFunc={getContent}
        fields={["spaceID", "token", "handle", "nacelleEntryId"]}
      ></Layout>
    </>
  );
}

export default ProductCollections;
