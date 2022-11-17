import AllContent from "./AllContent";
import Article from "./Article";
import Articles from "./Articles";
import Blog from "./Blog";
import Content from "./Content";
import Page from "./Page";
import Pages from "./Pages";
import Product from "./Product";

const cc_routes_group = [
  { path: "/cc/all-content", component: AllContent, name: "allContent" },
  { path: "/cc/article", component: Article, name: "article" },
  { path: "/cc/articles", component: Articles, name: "articles" },
  { path: "/cc/blog", component: Blog, name: "blog" },
  { path: "/cc/content", component: Content, name: "content" },
  { path: "/cc/page", component: Page, name: "page" },
  { path: "/cc/pages", component: Pages, name: "pages" },
  { path: "/cc/product", component: Product, name: "product" },
];

export default cc_routes_group;
