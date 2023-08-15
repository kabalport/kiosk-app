import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CheckoutPage from '../pages/CheckoutPage';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/checkout" component={CheckoutPage} />
                {/* Add more routes as needed */}
            </Switch>
        </Router>
    );
};

export default AppRoutes;
