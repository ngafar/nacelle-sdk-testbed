import AllProducts from "./AllProducts";
import ProductByHandle from './ProductByHandle'
import CollectionByHandle from './CollectionByHandle'
import ContentByHandle from "./ContentByHandle"; // NEEDS FIXING
/*
import AllCollections from "./AllCollections";
import AllContent from "./AllContent";
*/

const v1_routes_group = [
    {path: '/v1/all-products', component: AllProducts, name: "Get All Products"},

    {path: '/v1/product-by-handle', component: ProductByHandle, name: "Get Product by Handle"},
    {path: '/v1/collection-by-handle', component: CollectionByHandle, name: "Get Collection by Handle"},
    {path: '/v1/content-by-handle', component: ContentByHandle, name: "Get Content by Handle"}
    /*
    {path: '/v1/all-collections', component: AllCollections, name: "Get All Collections"},
    {path: '/v1/all-content', component: AllContent, name: "Get All Content"},

    */
]

export default v1_routes_group