import AllProducts from "./AllProducts";
import AllCollections from "./AllCollections";
import AllProdsInCollection from "./AllProdsInCollection"; // NEW
import AllContent from "./AllContent";
import ProductByHandle from './ProductByHandle'
import CollectionByHandle from './CollectionByHandle'
import ContentByHandle from "./ContentByHandle";

const v2_routes_group = [
    {path: '/v2/all-products', component: AllProducts, name: "Get All Products"},
    {path: '/v2/all-collections', component: AllCollections, name: "Get All Collections"},
    {path: '/v2/all-prods-in-collection', component: AllProdsInCollection, name: "Get All Products in Collection"},
    {path: '/v2/all-content', component: AllContent, name: "Get All Content"},

    {path: '/v2/product-by-handle', component: ProductByHandle, name: "Get Product by Handle"},
    {path: '/v2/collection-by-handle', component: CollectionByHandle, name: "Get Collection by Handle"},
    {path: '/v2/content-by-handle', component: ContentByHandle, name: "Get Content by Handle"}
]

export default v2_routes_group