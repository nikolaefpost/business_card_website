import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {routes} from "../routes";
import {HOME_ROUTE} from "../utils/consts";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(({path, Component})=>
                <Route key={path} path={path} element={<Component/>} />
            )}
            {/*<Redirect to={HOME_ROUTE}/>*/}
            <Route path='*' element={<Navigate to={HOME_ROUTE}/>}/>
        </Routes>

    );
};

export default AppRouter;