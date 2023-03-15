import Button from '../Button/button.component'
import { ProductContext } from '../../Context/product.context'
import './product-card.styles.scss'
import { useContext } from 'react'

const ShopCard = ({ product }) => {
    const { incramentHandler } = useContext(ProductContext)
    
    return (
        <div className='product-card-container'>
            <img src={product.imageUrl} alt={product.name} />
            <div className='footer'>
                <span className='name'>{product.name}</span>
                <span className='price'>{product.price}$</span>
            </div>
            <Button value="Add to Cart" ClassNAME="inverted" onClick={() => { incramentHandler(product) }} />
        </div>
    )
}

export default ShopCard