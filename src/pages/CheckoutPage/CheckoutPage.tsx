import React from 'react';
import MainTemplate from '../../components/templates/MainTemplate/MainTemplate';
import CartSection from '../../components/organisms/CartSection/CartSection';

const sampleCartItems = [
    { id: 1, title: 'Burger', price: 5.99, quantity: 2 },
    // ...more items
];

const CheckoutPage: React.FC = () => {
    return (
        <MainTemplate>
            <h1>Checkout</h1>
            <CartSection items={sampleCartItems} />
            <button>Proceed to Payment</button>
        </MainTemplate>
    );
};

export default CheckoutPage;
