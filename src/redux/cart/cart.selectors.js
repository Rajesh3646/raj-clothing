
import {createSelector} from 'reselect';

export const cartSelect = state => state.cart;

export const cartSelectItems = createSelector(
    [cartSelect],
    (cartSelect) => cartSelect.cartItems
);

export const cartSelectItemsCount = createSelector(
    [cartSelectItems],
    (cartSelectItems) => cartSelectItems.reduce((accumulated_total, item)=> accumulated_total + item.quantity, 0 )
);


export const hiddenSelector = createSelector(
    [cartSelect],
    (cartSelect) => cartSelect.hidden
);

export const cartSelectItemsTotal = createSelector(
[cartSelectItems],
(cartItems) => cartItems.reduce((totalPrice,item) => totalPrice + item.price * item.quantity, 0)
);