import NacelleClient from "@nacelle/client-js-sdk";
import createCompatibilityConnector from "@nacelle/compatibility-connector";
import Layout from "../../components/Layout";

function Pages() {
  async function getContent(inputs) {
    const compatibilityConnector = new createCompatibilityConnector({
      endpoint: `https://storefront.api.nacelle.com/graphql/v1/spaces/${inputs.spaceID}`,
      token: inputs.token,
      locale: "en-US",
    });

    const client = new NacelleClient({
      connector: compatibilityConnector,
    });

    const content = await client.data.pages({
      handle: inputs.handle,
    });

    console.log(content)
    return content;
  }

  return (
    <>
      <Layout
        title="[CC] Get Content by Handle"
        requestFunc={getContent}
        fields={["spaceID", "token"]}
      ></Layout>
    </>
  );
}

export default Pages;
