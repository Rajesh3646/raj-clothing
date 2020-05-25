import CART_ACTION_TYPES from './cart.types';

const INITIAL_STATE = {
    hidden: true 
};

export default (currentState = INITIAL_STATE, action) => {
    switch(action.type){
        case (CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN) :
            return {
                ...currentState,
                hidden: !currentState.hidden
            }
        default:
            return currentState;
        }
};