import React, {useContext} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {Context} from "../index";
import {LOGIN_ROUTE, MAIN_ROUTE} from "../utils/consts";


const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component}/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component}/>
            )}
            {/*{user.isAuth && <Route path="*" element={<Navigate to={MAIN_ROUTE}/>}/>}*/}
            <Route path="*" element={<Navigate to={LOGIN_ROUTE}/>}/>

        </Routes>
    );
};

export default AppRouter;
