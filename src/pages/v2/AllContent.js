import Storefront from "@nacelle/storefront-sdk";
import Layout from "../../components/Layout";

function AllContent() {
  async function getContent(spaceId, token, handle) {
    const client = Storefront({
      storefrontEndpoint: `https://storefront.api.nacelle.com/graphql/v1/spaces/${spaceId}`,
      token: token,
    });

    const content = await client.content({ maxReturnedEntries: 5 });

    console.log(content);
    return content;
  }

  return (
    <>
      <Layout
        title="[V2] Get All Content*"
        note="*This does not actually get all entries, just 5. Geting everything would be take quite a bit of time."
        requestFunc={getContent}
        ignore={["handle", "nacelleEntryId"]}
      ></Layout>
    </>
  );
}

export default AllContent;
