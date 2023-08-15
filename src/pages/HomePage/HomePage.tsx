import React, { useState, useEffect } from 'react';
import { fetchMenu } from '../../services/fakeApi';
import { useDispatch } from 'react-redux';
import { addToMenu } from '../../store/actions/menuActions';
import MainTemplate from '../../components/templates/MainTemplate/MainTemplate';
import MenuList from '../../components/organisms/MenuList/MenuList';

const sampleItems = [
    { id: 1, title: 'Burger', price: 5.99, imageUrl: '/path/to/image.jpg' },
    // ...more items
];

const HomePage: React.FC = () => {
    return (
        <MainTemplate>
            <MenuList items={sampleItems} />
        </MainTemplate>
    );
};

export default HomePage;
