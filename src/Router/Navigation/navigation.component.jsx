import { signOutUser } from '../../Utili/firebase.component'
import { Outlet, Link } from 'react-router-dom'
import { Fragment, useContext, useState } from 'react'
import { ReactComponent as CrownLogo } from '../../Assets/crown.svg'
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentUser } from '../../Store/user/user.selector'
import { setCartDropdown } from '../../Store/cart/cart.action'
import { selectCartDropdown } from '../../Store/cart/cart.selector'
import ShopIcon from '../../Component/CartIcon/cart-icon.component'
import CartDropdown from '../../Component/CartDropdown/cart-dropdown.component'
import './navigation.style.scss'

const Navigation = () => {
    const currentUser=useSelector(selectCurrentUser)
    const currentDropdown=useSelector(selectCartDropdown)
    const dispatch=useDispatch()
    
    return (
        <Fragment>
            <div className='navigation'>
                <Link className="nav-logo-container" to="/">
                    <CrownLogo />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>SHOP</Link>
                    {currentUser != null ?
                        <Link className='nav-link' onClick={signOutUser}>SIGN OUT</Link> :
                        <Link className='nav-link' to='/sign-in'>SIGN IN</Link>}
                    <ShopIcon onClick={()=>{dispatch(setCartDropdown(!currentDropdown))}} />
                </div>
                {currentDropdown ? <CartDropdown /> : null}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation