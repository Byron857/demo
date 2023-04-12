import React from 'react'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const ParentRoute = ({ match, routes }) => {
    console.log(match, routes, 'match, routes');
    return (
        <div>
            <ul>
                {routes.map((route) => (
                    <li key={route.path}>
                        <Link to={`${match.url}${route.path}`}>{route.title}</Link>
                    </li>
                ))}
            </ul>
            <Switch>
                {
                    routes.map((route) => (
                        <Route
                            key={route.path}
                            path={`${match.path}${route.path}`}
                            render={(props) => <route.component {...props} routes={route.routes} />}
                        />
                    ))
                }
            </Switch>
        </div>
    );
};

const renderRoutes = (routes) => {
    return (
        <BrowserRouter>
            <Switch>
                {routes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        exact={route.exact}
                        render={(props) => <route.component {...props} routes={route.routes} />}
                    />
                ))}
            </Switch>
        </BrowserRouter>
    );
};

export { ParentRoute, renderRoutes };
