import CART_ACTION_TYPES from './cart.types';
import {addItemToCart} from './cart.utils';
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
        default:
            return currentState;
        }
};