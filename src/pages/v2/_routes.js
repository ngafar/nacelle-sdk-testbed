import AllProducts from "./AllProducts";
import AllCollections from "./AllCollections";
import AllContent from "./AllContent";
import ProductByHandle from './ProductByHandle'
import ContentByHandle from "./ContentByHandle";

const v2_routes_group = [
    {path: '/v2/all-products', component: AllProducts},
    {path: '/v2/all-collections', component: AllCollections},
    {path: '/v2/all-content', component: AllContent},
    {path: '/v2/product-by-handle', component: ProductByHandle},
    {path: '/v2/content-by-handle', component: ContentByHandle}
]

export default v2_routes_group