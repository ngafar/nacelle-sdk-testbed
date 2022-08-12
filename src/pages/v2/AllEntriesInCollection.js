import Storefront from "@nacelle/storefront-sdk";
import Layout from "../../components/Layout";

function AllEntriesInCollection() {
  async function getContent(spaceId, token, handle) {
    const client = Storefront({
      storefrontEndpoint: `https://storefront.api.nacelle.com/graphql/v1/spaces/${spaceId}`,
      token: token,
    });

    const content = await client.productCollectionEntries({
      handle: handle,
      maxReturnedEntries: -1, // -1 to get all
    });

    console.log(content);
    return content;
  }

  return (
    <>
      <Layout
        title="[V2] Get All Entries in Collection"
        requestFunc={getContent}
      ></Layout>
    </>
  );
}

export default AllEntriesInCollection;
