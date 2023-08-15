import { ADD_TO_MENU, REMOVE_FROM_MENU } from '../actions/menuActions';

type MenuItem = {
    id: string;
    name: string;
    price: number;
};

type MenuAction = {
    type: string;
    payload: MenuItem | string; // ADD_TO_MENU에서는 MenuItem, REMOVE_FROM_MENU에서는 string (itemId)이 사용됩니다.
};

const initialState: MenuItem[] = [];

const menuReducer = (state: MenuItem[] = initialState, action: MenuAction): MenuItem[] => {
    switch (action.type) {
        case ADD_TO_MENU:
            return [...state, action.payload as MenuItem]; // 여기서 as를 사용하여 payload를 MenuItem으로 간주합니다.
        case REMOVE_FROM_MENU:
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
};

export default menuReducer;
