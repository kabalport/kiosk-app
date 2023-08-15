export const ADD_TO_MENU = 'ADD_TO_MENU';
export const REMOVE_FROM_MENU = 'REMOVE_FROM_MENU';

export type MenuItem = {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
};


export const addToMenu = (item: MenuItem) => ({
    type: ADD_TO_MENU,
    payload: item,
});

export const removeFromMenu = (itemId: string) => ({
    type: REMOVE_FROM_MENU,
    payload: itemId,
});
