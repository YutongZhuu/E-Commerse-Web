import {signOutUser} from '../../Utili/firebase.component'
import { Outlet, Link } from 'react-router-dom'
import { Fragment, useContext, useState } from 'react'
import { ReactComponent as CrownLogo } from '../../Assets/crown.svg'
import { UserContext } from '../../Context/user.context'
import ShopIcon from '../../Component/CartIcon/cart-icon.component'
import CartDropdown from '../../Component/CartDropdown/cart-dropdown.component'
import './navigation.style.scss'

const Navigation = () => {
    const {currentUser}=useContext(UserContext)
    const defaultShopBagStatus=false;
    const [shopBagStatus, setshopBagStatus]=useState(defaultShopBagStatus)
    const shopBagDropdownHandler=()=>{
        setshopBagStatus(!shopBagStatus)
    }
    return (
        <Fragment>
            <div className='navigation'>
                <Link className="nav-logo-container" to="/">
                    <CrownLogo />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>SHOP</Link>
                    {currentUser!=null? 
                    <Link className='nav-link' onClick={signOutUser}>SIGN OUT</Link>: 
                    <Link className='nav-link' to='/sign-in'>SIGN IN</Link>}
                    <ShopIcon onClick={shopBagDropdownHandler}/>
                </div>
                {shopBagStatus?<CartDropdown/>:null}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation