import CART_ACTION_TYPES from './cart.types';

export const toggleCartDropDown = () => ({
    type: CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN
});

export const addItem = (item) => ({
    type: CART_ACTION_TYPES.ADD_ITEM,
    payload: item
});