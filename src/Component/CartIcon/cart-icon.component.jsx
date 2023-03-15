import { ReactComponent as ShoppingBag } from '../../Assets/shopping-bag.svg'
import { useContext } from 'react'
import { ProductContext } from '../../Context/product.context'
import './cart-icon.styles.scss'
const ShopIcon=({onClick})=>{
    const {selected_products} =useContext(ProductContext)
    const items_array=selected_products.map((product)=>{
        return(product.count)
    })
    
    let items=0
    if(items_array.length){
        items=items_array.reduce((accumulator, currentValue)=>{
            return accumulator+currentValue
        })
    }

    return(
        <div className="cart-icon-container" onClick={onClick}>
            <div className="shopping-icon"><ShoppingBag/></div>
            <span className="item-count">{items}</span>
        </div>
    )
}

export default ShopIcon