import { useContext } from "react"
import { ProductContext } from "../../Context/product.context"
import CheckOutItem from "../../Component/CheckOutItem/check-out-item.component"
import './checkout.styles.scss'
const CheckOut = () => {
    const { selected_products, setselected_products } = useContext(ProductContext)

    const cancelHandler = (product) => {
        const modified_selected_products = selected_products.filter((productFind) => {
            if (product.id != productFind.id) {
                return product
            }
        })
        setselected_products(modified_selected_products)
    }
    const reduceHandler = (product) => {

        const modified_selected_products = selected_products.map((productFind) => {
            if (product.id == productFind.id) {
                return { ...product, count: product.count - 1 }
            } else {
                return productFind
            }

        })
        if (product.count-1 == 0)
            cancelHandler(product)
        else
            setselected_products(modified_selected_products)
    }

    const incramentHandler = (product) => {
         const modified_selected_products = selected_products.map((productFind) => {
            if (product.id == productFind.id) {
                return { ...product, count: product.count + 1 }
            } else {
                return productFind
            }
        })
        setselected_products(modified_selected_products)

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