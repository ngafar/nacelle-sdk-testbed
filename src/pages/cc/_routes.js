import ProductByHandle from './ProductByHandle'
import ContentByHandle from "./ContentByHandle";

/*
import AllProducts from "./AllProducts";
import AllCollections from "./AllCollections";
import AllContent from "./AllContent";
import CollectionByHandle from './CollectionByHandle'
*/

const cc_routes_group = [
    {path: '/cc/product-by-handle', component: ProductByHandle, name: "Get Product by Handle"},
    {path: '/cc/content-by-handle', component: ContentByHandle, name: "Get Content by Handle"}
    /*
    {path: '/cc/all-products', component: AllProducts, name: "Get All Products"},
    {path: '/cc/all-collections', component: AllCollections, name: "Get All Collections"},
    {path: '/cc/all-content', component: AllContent, name: "Get All Content"},

    {path: '/cc/collection-by-handle', component: CollectionByHandle, name: "Get Collection by Handle"},
    */
]

export default cc_routes_group