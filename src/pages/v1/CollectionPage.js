import NacelleClient from "@nacelle/client-js-sdk";
import Layout from "../../components/Layout";

function CollectionPage() {
  async function getContent(inputs) {
    const settings = {
      id: inputs.spaceID,
      token: inputs.token,
      nacelleEndpoint: "https://hailfrequency.com/v3/graphql",
      useStatic: false,
    };

    const client = new NacelleClient(settings);
    const content = await client.data.collectionPage({
      handle: inputs.handle,
      paginate: true,
      itemsPerPage: inputs.maxReturnedEntries,
    });

    console.log(content)
    return content;
  }

  return (
    <>
      <Layout
        title="[V1] collectionPage"
        note="This can take some time if there are a lot of entries."
        requestFunc={getContent}
        fields={["spaceID", "token", "handle", "maxReturnedEntries"]}
      ></Layout>
    </>
  );
}

export default CollectionPage;
