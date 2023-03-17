import Button from '../Button/button.component'
import './cart-dropdown.styles.scss'
// import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../Store/cart/cart.selector'
// import { ProductContext } from '../../Context/product.context'
const CartDropdown = () => {
    // const { selected_products } = useContext(ProductContext)
    const selected_products=useSelector(selectCartItems)
    const navigate=useNavigate()
    const checkOutHandler=()=>{
        navigate('/check-out')
    }
    // const modified_selected_products = selected_products.filter((product, index) => {
    //     let flag = true, count = 0
    //     for (let i = 0; i < index; i++) {
    //         if (product == selected_products[i]) {
    //             flag = false
    //         }
    //     }

    //     if (flag) {
    //         selected_products.forEach((productFind) => {
    //             if (product == productFind)
    //                 count++
    //         })
    //         product.count = count
    //         return product
    //     }
    // })

    // useEffect(()=>{
    //     setmodified_selected_products(modified_selected_products)
    // }, [modified_selected_products])
    
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