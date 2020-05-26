import CART_ACTION_TYPES from './cart.types';
import {addItemToCart, removeItem} from './cart.utils';
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

export default (currentState = INITIAL_STATE, action) => {
    switch(action.type){
        case (CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN):
            return {
                ...currentState,
                hidden: !currentState.hidden
            }
        case (CART_ACTION_TYPES.ADD_ITEM): 
            return {
                ...currentState,
                cartItems: addItemToCart(currentState.cartItems, action.payload)
            }
        case (CART_ACTION_TYPES.CLEAR_ITEM):
            return {
                ...currentState,
                cartItems: currentState.cartItems.filter((item => item.id !== action.payload.id))
            }
        case (CART_ACTION_TYPES.REMOVE_ITEM):
                return {
                    ...currentState,
                    cartItems: removeItem(currentState.cartItems, action.payload)
        }    
        default:
            return currentState;
        }
};