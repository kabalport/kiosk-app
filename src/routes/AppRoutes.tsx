import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import CheckoutPage from '../pages/CheckoutPage/CheckoutPage';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
};

export default AppRoutes;
