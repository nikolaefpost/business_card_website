import {PORTFOLIO_ROUTE, HOME_ROUTE, ME_ROUTE} from "./utils/consts";
import PortfolioPage from "./page/PortfolioPage";
import HomePage from "./page/HomePage";
import AboutMeMore from "./page/AboutMeMore";

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
    }

]