import AllContent from './AllContent'
import ProductByHandle from './ProductByHandle'
import ArticleByHandle from "./ArticleByHandle";
import ContentByHandle from "./ContentByHandle";

const cc_routes_group = [
    {path: '/cc/all-content', component: AllContent, name: "Get All Content"},
    {path: '/cc/product-by-handle', component: ProductByHandle, name: "Get Product by Handle"},
    {path: '/cc/article-by-handle', component: ArticleByHandle, name: "Get Article by Handle"},
    {path: '/cc/content-by-handle', component: ContentByHandle, name: "Get Content by Handle"}
]

export default cc_routes_group