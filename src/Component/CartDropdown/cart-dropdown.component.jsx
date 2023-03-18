import Button from '../Button/button.component'
import './cart-dropdown.styles.scss'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../Store/cart/cart.selector'
const CartDropdown = () => {
    const selected_products=useSelector(selectCartItems)
    const navigate=useNavigate()
    const checkOutHandler=()=>{
        navigate('/check-out')
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {selected_products.length == 0 ? <p className='empty-message'>Your cart is empty</p> : <div>
                    {selected_products.map((product) => {
                        {
                            return (
                                <div className='cart-item' key={product.id}>
                                    <img src={product.imageUrl}></img>
                                    <div className='info'>
                                        <p>{product.name}</p>
                                        <p>{product.count}× {product.count * product.price}$</p>
                                    </div>
                                </div>
                            )
                        }
                    })}</div>}
            </div>
            <Button value="Checkout" onClick={checkOutHandler}></Button>
        </div>
    )
}

export default CartDropdown