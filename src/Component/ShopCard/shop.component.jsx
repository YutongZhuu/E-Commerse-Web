import Button from '../Button/button.component'
// import { ProductContext } from '../../Context/product.context'
import './product-card.styles.scss'
// import { useContext } from 'react'
import { useSelector } from "react-redux"
import { selectCartItems } from '../../Store/cart/cart.selector'
import { addCartItems } from '../../Store/cart/cart.action'
import { useDispatch } from 'react-redux'
const ShopCard = ({ product }) => {
    // const { incramentHandler } = useContext(ProductContext)
    const dispatch=useDispatch()
    const currentCartProducts = useSelector(selectCartItems)

    return (
        <div className='product-card-container'>
            <img src={product.imageUrl} alt={product.name} />
            <div className='footer'>
                <span className='name'>{product.name}</span>
                <span className='price'>{product.price}$</span>
            </div>
            <Button value="Add to Cart" ClassNAME="inverted" onClick={() => { 
                dispatch(addCartItems(currentCartProducts, product))
                }} />
        </div>
    )
}

export default ShopCard