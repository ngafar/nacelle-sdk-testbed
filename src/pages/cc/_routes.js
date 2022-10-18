import AllArticles from './AllArticles';
import AllContent from './AllContent';
import AllPages from './AllPages';
import ArticleByHandle from "./ArticleByHandle";
import BlogByHandle from './BlogByHandle';
import ContentByHandle from "./ContentByHandle";
import PageByHandle from './PageByHandle';
import ProductByHandle from './ProductByHandle';

const cc_routes_group = [
    {path: '/cc/all-articles', component: AllArticles, name: "articles"},
    {path: '/cc/all-content', component: AllContent, name: "allContent"},
    {path: '/cc/all-pages', component: AllPages, name: "pages"},

    {path: '/cc/article-by-handle', component: ArticleByHandle, name: "article"},
    {path: '/cc/blog-by-handle', component: BlogByHandle, name: "blog"},
    {path: '/cc/content-by-handle', component: ContentByHandle, name: "content"},
    {path: '/cc/page-by-handle', component: PageByHandle, name: "page"},
    {path: '/cc/product-by-handle', component: ProductByHandle, name: "product"},
]

export default cc_routes_group