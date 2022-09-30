import AllArticles from './AllArticles';
import AllContent from './AllContent';
import AllPages from './AllPages';
import ArticleByHandle from "./ArticleByHandle";
import BlogByHandle from './BlogByHandle';
import ContentByHandle from "./ContentByHandle";
import PageByHandle from './PageByHandle';
import ProductByHandle from './ProductByHandle';

const cc_routes_group = [
    {path: '/cc/all-articles', component: AllArticles, name: "Get All Articles (.articles)"},
    {path: '/cc/all-content', component: AllContent, name: "Get All Content (.allContent)"},
    {path: '/cc/all-pages', component: AllPages, name: "Get All Pages (.pages)"},

    {path: '/cc/article-by-handle', component: ArticleByHandle, name: "Get Article by Handle (.article)"},
    {path: '/cc/blog-by-handle', component: BlogByHandle, name: "Get Blog (Entry) by Handle (.blog)"},
    {path: '/cc/content-by-handle', component: ContentByHandle, name: "Get Content by Handle (.content)"},
    {path: '/cc/page-by-handle', component: PageByHandle, name: "Get Page by Handle (.page)"},
    {path: '/cc/product-by-handle', component: ProductByHandle, name: "Get Product by Handle (.product)"},
]

export default cc_routes_group