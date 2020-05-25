import React from 'react';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import './cart-icon.styles.scss';
import {toggleCartDropDown as toggleCartDropDownAction} from '../../redux/cart/cart.action'

const CartIcon = ({toggleCartDropDown}) => (
    <div className='cart-icon' onClick={toggleCartDropDown}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>123</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
toggleCartDropDown : () => {dispatch(toggleCartDropDownAction())}
});
export default connect(null, mapDispatchToProps)(CartIcon);
