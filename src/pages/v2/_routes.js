import Content from "./Content";
import Products from "./Products";
import ProductCollections from "./ProductCollections";
import ProductCollectionEntries from "./ProductCollectionEntries";

const v2_routes_group = [
  { path: "/v2/content", component: Content, name: "content" },
  { path: "/v2/products", component: Products, name: "products" },
  { path: "/v2/product-collections", component: ProductCollections, name: "productCollections" },
  { path: "/v2/product-collection-entries", component: ProductCollectionEntries, name: "productCollectionEntries" },
];

export default v2_routes_group;
