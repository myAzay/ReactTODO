import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes';
import { AUTH_ROUTE, TODO_LIST_ROUTE } from '../utils/const';

const AppRouter = () => {
    const isAuth = true;
    return (
        <Switch>
            {isAuth &&
                authRoutes.map(({path , Component}) => 
                    <Route  key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} component={Component} exact />
            ))}
            {isAuth ? (
            <Redirect from="*" to={TODO_LIST_ROUTE} />
             ) : (
            <Redirect from="*" to={AUTH_ROUTE} />
            )}
        </Switch>
    );
};

export default AppRouter;