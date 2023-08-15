import React from 'react';
import './CartSection.module.css';

type CartItem = {
    id: number;
    title: string;
    price: number;
    quantity: number;
};

type CartSectionProps = {
    items: CartItem[];
};

const CartSection: React.FC<CartSectionProps> = ({ items }) => {
    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.title} - ${item.price} x {item.quantity}
                    </li>
                ))}
            </ul>
            <div>Total: ${items.reduce((sum, item) => sum + item.price * item.quantity, 0)}</div>
        </div>
    );
};

export default CartSection;
