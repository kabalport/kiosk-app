import React from 'react';
import ProductCard from '../molecules/ProductCard';
import './MenuList.module.css';

type MenuItem = {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
};

type MenuListProps = {
    items: MenuItem[];
};

const MenuList: React.FC<MenuListProps> = ({ items }) => {
    return (
        <div>
            {items.map(item => <ProductCard key={item.id} {...item} />)}
        </div>
    );
};

export default MenuList;
