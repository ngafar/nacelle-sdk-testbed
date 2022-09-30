import Storefront from "@nacelle/storefront-sdk";
import Layout from "../../components/Layout";

function AllContent() {
  async function getContent(inputs) {
    const client = Storefront({
      storefrontEndpoint: `https://storefront.api.nacelle.com/graphql/v1/spaces/${inputs.spaceID}`,
      token: inputs.token,
    });

    const content = await client.content({ 
      maxReturnedEntries: inputs.maxReturnedEntries
    });

    console.log(content);
    return content;
  }

  return (
    <>
      <Layout
        title="[V2] Get All Content"
        requestFunc={getContent}
        fields={["spaceID", "token", "maxReturnedEntries"]}
      ></Layout>
    </>
  );
}

export default AllContent;
