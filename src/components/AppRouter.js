import React, { useContext } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import { Context } from '..';
import { authRoutes, publicRoutes } from '../routes';
import { AUTH_ROUTE, TODO_LIST_ROUTE } from '../utils/const';

const AppRouter = () => {
    const {user} = useContext(Context) 
      
    return (
        <Switch>
            {user.isAuth &&
                authRoutes.map(({path , Component}) => 
                    <Route  key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} component={Component} exact />
            ))}
            {user.isAuth ? (
            <Redirect from="*" to={TODO_LIST_ROUTE} />
             ) : (
            <Redirect from="*" to={AUTH_ROUTE} />
            )}
        </Switch>
    );
};

export default AppRouter;