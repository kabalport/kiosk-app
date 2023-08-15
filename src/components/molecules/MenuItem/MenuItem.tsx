// components/molecules/MenuItem/MenuItem.tsx

import Button from '../../atoms/Button/Button';

interface MenuItemProps {
    item: { id: number, title: string, price: number, imageUrl: string };
    onAddToCart: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, onAddToCart }) => {
    return (
        <div>
            <img src={item.imageUrl} alt={item.title} />
            <h2>{item.title}</h2>
            <p>${item.price}</p>
            <Button onClick={onAddToCart}>Add to Cart</Button>
        </div>
    );
};

export default MenuItem;
