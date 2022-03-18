import {PORTFOLIO_ROUTE, HOME_ROUTE, ME_ROUTE, NEWS_ROUTE} from "./utils/consts";
import PortfolioPage from "./page/PortfolioPage";
import HomePage from "./page/HomePage";
import AboutMeMore from "./page/AboutMeMore";
import NewsPage from "./page/NewsPage";

export  const routes = [
    {
        path: HOME_ROUTE,
        Component: HomePage
    },
    {
        path: PORTFOLIO_ROUTE,
        Component: PortfolioPage
    },
    {
        path: ME_ROUTE,
        Component: AboutMeMore
    },
    {
        path: NEWS_ROUTE,
        Component: NewsPage
    }


]