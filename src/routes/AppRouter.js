import React, {useEffect, useState} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {routes} from "../routes";
import {HOME_ROUTE} from "../utils/consts";

const AppRouter = () => {
    const [screenWidth, setScreenWidth] = useState(window.screen.width);
    const [scrollPosition, setScrollPosition] = useState(0);

    function addIngredientHandler(){setScreenWidth(window.screen.width)};
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('resize', addIngredientHandler, false);
        return () => window.removeEventListener('resize',addIngredientHandler)
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <Routes>
            {routes.map(({path, Component})=>
                <Route key={path} path={path} element={<Component screenWidth={screenWidth} scrollPosition={scrollPosition} />} />
            )}
            {/*<Redirect to={HOME_ROUTE}/>*/}
            <Route path='*' element={<Navigate to={HOME_ROUTE}/>}/>
        </Routes>

    );
};

export default AppRouter;