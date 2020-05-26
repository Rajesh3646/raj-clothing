import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.styles.scss';
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../card-dropdown/card-dropdown.component';
import { createStructuredSelector } from 'reselect';
import {currentUserSelector} from '../../redux/user/user.selectors'
import {hiddenSelector} from '../../redux/cart/cart.selectors'
const Header = ({currentUser, hidden}) => (
    <div  className='header'>
        <Link to='/' className='logo-container'> 
            <Logo className='logo'></Logo>
        </Link>    
        <div className='options'>
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='shop' className='option'>CONTACT</Link>
            {
                currentUser ?
                <div onClick={()=>auth.signOut()} className='option'>SIGN OUT</div>
                :
                <Link to='/signin' className='option'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        { hidden ? null : <CartDropdown /> }
    </div>);
/*const mapStateToParams = ({user: {currentUser}, cart :{hidden}} ) => ({
    currentUser, hidden
})*/

const mapStateToParams = createStructuredSelector({
    currentUser: currentUserSelector,
    hidden: hiddenSelector});
export default connect(mapStateToParams)(Header);


