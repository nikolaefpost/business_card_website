import {ARTICLE_ROUTE, HOME_ROUTE} from "./utils/consts";
import ArticlesPage from "./page/ArticlesPage";
import HomePage from "./page/HomePage";

export  const routes = [
    {
        path: HOME_ROUTE,
        Component: HomePage
    },
    {
        path: ARTICLE_ROUTE + '/:id',
        Component: ArticlesPage
    }

]