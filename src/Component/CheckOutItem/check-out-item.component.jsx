import './checkout-item.styles.scss'
const CheckOutItem = ({ product, reduceHandler, incramentHandler, cancelHandler }) => {
    return (
        <div className="checkout-item-container" key={product.id}>
            <div className="image-container">
                <img src={product.imageUrl}></img>
            </div>

            <span className='name'>{product.name}</span>
            <span className='quantity'>
                <span className="arrow" onClick={() => { reduceHandler(product) }}><strong>{'<'}</strong></span>
                <span className='value'>{product.count}</span>
                <span className="arrow" onClick={() => { incramentHandler(product) }}><strong>{'>'}</strong></span>
            </span>
            <span className='price'> {product.count * product.price}$</span>
            <div className="remove-button" onClick={() => { cancelHandler(product) }}>&#10005;</div>
        </div>
    )
}

export default CheckOutItem