import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {toggleCartDropDown} from '../../redux/cart/cart.action'
import './card-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';

import {cartSelectItems} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect'
import { withRouter } from 'react-router-dom';
const CardDropDown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown '>
    <div className='cart-items'>
    {
        cartItems.length ? 
        (cartItems.map(item => <CartItem key ={item.id} item={item}/>)) :
        <span className='empty-message'>Your cart is empty</span>
    }
    </div>
    <CustomButton onClick={
        ()=> {  
                history.push('/checkout');
                dispatch(toggleCartDropDown())
            }
    }>CHECKOUT</CustomButton>
    </div>
);

/*const mapStateToProps = ({cart:{cartItems}}) => ({
    cartItems
});*/
const mapStateToProps = createStructuredSelector({cartItems: cartSelectItems});
export default withRouter(connect(mapStateToProps)(CardDropDown));