import React from 'react'
import './checkout.styles.scss'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {cartSelectItems, cartSelectItemsTotal} from '../../redux/cart/cart.selectors'
import CartItem from '../../components/ checkout-item/checkout-item.component'
const Checkout = ({cartItems,cartItemsTotal }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)
        }
        <div className="total">
        <span>TOTAL: ${cartItemsTotal}</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
cartItems : cartSelectItems,
cartItemsTotal : cartSelectItemsTotal
});

export default connect(mapStateToProps)(Checkout);
