import ProductPreview from '../../Component/ProductsPreview/products-preview.component'
import { useContext, Fragment } from 'react'
import { ProductContext } from '../../Context/product.context'
const ShopPreview = () => {
    const { products } = useContext(ProductContext)
    return (
        <Fragment>
            {Object.keys(products).map(title => {
                const productLists = products[title]
                return (
                    <ProductPreview key={title} title={title} products={productLists} />
                )
            })}
        </Fragment>
    )
}

export default ShopPreview