import ProductPreview from '../../Component/ProductsPreview/products-preview.component'
import { useSelector } from 'react-redux'
import { Fragment } from 'react'
import { selectProducts } from '../../Store/products/products.selector'

const ShopPreview = () => {
    const products=useSelector(selectProducts)

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