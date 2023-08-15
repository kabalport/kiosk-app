import React from 'react';
import './ProductCard.module.css';

type ProductCardProps = {
    title: string;
    price: number;
    imageUrl: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ title, price, imageUrl }) => {
    return (
        <div>
            <img src={imageUrl} alt={title} />
            <h2>{title}</h2>
            <p>${price}</p>
        </div>
    );
};

export default ProductCard;
