import { useSelector, useDispatch } from "react-redux"
import { selectCartItems } from "../../Store/cart/cart.selector"
import { addCartItems, reduceCartItem, cancelCartItem } from "../../Store/cart/cart.action"
import CheckOutItem from "../../Component/CheckOutItem/check-out-item.component"
import './checkout.styles.scss'

const CheckOut = () => {
    const selected_products = useSelector(selectCartItems)
    const dispatch=useDispatch()
    const incramentHandler=(product)=>{
        dispatch(addCartItems(selected_products, product))
    }

    const reduceHandler=(product)=>{
        dispatch(reduceCartItem(selected_products, product))
    }

    const cancelHandler=(product)=>{
        dispatch(cancelCartItem(selected_products, product))
    }

    let total = 0
    if (selected_products.length) {
        selected_products.forEach((product) => {
            total += product.count * product.price
        })
    }
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">Product</div>
                <div className="header-block">Description</div>
                <div className="header-block">Quantity</div>
                <div className="header-block">Price</div>
                <div className="header-block">Remove</div>
            </div>

            {selected_products.length == 0 ? <p>Your cart is empty</p> : <div>
                {selected_products.map((product) => {

                    {
                        return (
                            <CheckOutItem product={product}
                                reduceHandler={reduceHandler}
                                incramentHandler={incramentHandler}
                                cancelHandler={cancelHandler}
                                key={product.id} />
                        )
                    }
                })}
            </div>}
            <span className="total">total: {total}$</span>
        </div>
    )
}

export default CheckOut