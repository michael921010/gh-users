import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../history';
import Home from '../pages/Home';

const NotDefined = () => <h1>404 Not Defined</h1>;

export default () => {
    return (
        <Router history={history} >
            <Switch>
                <Route exact path="/" component={Home} />
                <Route component={NotDefined} />
            </Switch>
        </Router>
    );
};
