import ProductByHandle from './ProductByHandle'
import ContentByHandle from "./ContentByHandle";

const cc_routes_group = [
    {path: '/cc/product-by-handle', component: ProductByHandle, name: "Get Product by Handle"},
    {path: '/cc/content-by-handle', component: ContentByHandle, name: "Get Content by Handle"}
]

export default cc_routes_group