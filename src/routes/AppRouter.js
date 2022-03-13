import React, {useEffect, useState} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {routes} from "../routes";
import {HOME_ROUTE} from "../utils/consts";

const AppRouter = () => {
    const [screenWidth, setScreenWidth] = useState(window.screen.width);

    function addIngredientHandler(){setScreenWidth(window.screen.width)};

    useEffect(() => {
        window.addEventListener('resize', addIngredientHandler, false);
        return () => window.removeEventListener('resize',addIngredientHandler)
    }, []);
    return (
        <Routes>
            {routes.map(({path, Component})=>
                <Route key={path} path={path} element={<Component screenWidth={screenWidth} />} />
            )}
            {/*<Redirect to={HOME_ROUTE}/>*/}
            <Route path='*' element={<Navigate to={HOME_ROUTE}/>}/>
        </Routes>

    );
};

export default AppRouter;