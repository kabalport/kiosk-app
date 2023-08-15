export const ADD_TO_MENU = 'ADD_TO_MENU';
export const REMOVE_FROM_MENU = 'REMOVE_FROM_MENU';

export const addToMenu = (item) => ({
    type: ADD_TO_MENU,
    payload: item,
});

export const removeFromMenu = (itemId) => ({
    type: REMOVE_FROM_MENU,
    payload: itemId,
});
