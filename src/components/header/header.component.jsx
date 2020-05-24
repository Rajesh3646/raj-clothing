import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.styles.scss';
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux';

const Header = ({currentUser}) => (
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
        </div>
    </div>);
const mapStateToParams = state => ({
    currentUser: state.user.currentUser
})
export default connect(mapStateToParams)(Header);


