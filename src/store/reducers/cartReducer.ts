// cartReducer.ts

// 1. Action types
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const ADJUST_QUANTITY = 'ADJUST_QUANTITY';
const CLEAR_CART = 'CLEAR_CART';

// You might also need an interface or type for your cart items:
type CartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
};

// 2. Action creators
export const addToCart = (item: CartItem) => ({
    type: ADD_TO_CART,
    payload: item,
});

export const removeFromCart = (itemId: string) => ({
    type: REMOVE_FROM_CART,
    payload: itemId,
});

export const adjustQuantity = (itemId: string, quantity: number) => ({
    type: ADJUST_QUANTITY,
    payload: { itemId, quantity },
});

export const clearCart = () => ({
    type: CLEAR_CART,
});

// 3. Initial state
const initialState: CartItem[] = [];

// 4. Reducer
const cartReducer = (state = initialState, action: any): CartItem[] => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload];
        case REMOVE_FROM_CART:
            return state.filter(item => item.id !== action.payload);
        case ADJUST_QUANTITY:
            return state.map(item =>
                item.id === action.payload.itemId
                    ? { ...item, quantity: action.payload.quantity }
                    : item
            );
        case CLEAR_CART:
            return [];
        default:
            return state;
    }
};

export default cartReducer;
