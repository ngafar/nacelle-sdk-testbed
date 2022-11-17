import AllCollections from "./AllCollections";
import AllContent from "./AllContent";
import AllProducts from "./AllProducts";
import Collection from "./Collection";
import CollectionPage from "./CollectionPage";
import Content from "./Content";
import Product from "./Product";

const v1_routes_group = [
    {path: '/v1/all-collections', component: AllCollections, name: "allCollections"},
    {path: '/v1/all-content', component: AllContent, name: "allContent"},
    {path: '/v1/all-products', component: AllProducts, name: "allProducts"},
    {path: '/v1/collection', component: Collection, name: "collection"},
    {path: '/v1/collection-page', component: CollectionPage, name: "collectionPage"},
    {path: '/v1/content', component: Content, name: "content"},
    {path: '/v1/product', component: Product, name: "product"},
]

export default v1_routes_group