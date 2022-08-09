import NacelleClient from "@nacelle/client-js-sdk";
import createCompatibilityConnector from "@nacelle/compatibility-connector";

function ContentByHandleCC() {
  const compatibilityConnector = new createCompatibilityConnector({
    endpoint: `https://storefront.api.nacelle.com/graphql/v1/spaces/${spaceId}`,
    token: token,
    locale: "en-US",
  });

  const client = new NacelleClient({
    connector: compatibilityConnector,
  });

  return <></>;
}

export default ContentByHandleCC;
