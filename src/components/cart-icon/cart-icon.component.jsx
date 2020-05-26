import React from 'react';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import './cart-icon.styles.scss';
import {toggleCartDropDown as toggleCartDropDownAction} from '../../redux/cart/cart.action'
import {cartSelectItemsCount} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
const CartIcon = ({toggleCartDropDown, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartDropDown}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
toggleCartDropDown : () => {dispatch(toggleCartDropDownAction())}
});

/*const mapStateToProps = state => ({
    itemCount: cartSelectItemsCount(state)
})*/
const mapStateToProps = createStructuredSelector({
    itemCount: cartSelectItemsCount
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
