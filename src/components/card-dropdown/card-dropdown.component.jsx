import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import './card-dropdown.styles.scss';


const CardDropDown = () => (
    <div className='cart-dropdown '>
    <div className='cart-items'></div>
    <CustomButton>CHECKOUT</CustomButton>
    </div>
);

export default CardDropDown;