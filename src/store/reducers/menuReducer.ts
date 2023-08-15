import { ADD_TO_MENU, REMOVE_FROM_MENU } from '../actions/menuActions';

const initialState = [];

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_MENU:
            return [...state, action.payload];
        case REMOVE_FROM_MENU:
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
};

export default menuReducer;
