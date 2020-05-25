import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import './card-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';

const CardDropDown = ({cartItems}) => (
    <div className='cart-dropdown '>
    <div className='cart-items'>
    {
        cartItems.map(item => <CartItem key ={item.id} item={item}/>)
    }
    </div>
    <CustomButton>CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = ({cart:{cartItems}}) => ({
    cartItems
});
export default connect(mapStateToProps)(CardDropDown);