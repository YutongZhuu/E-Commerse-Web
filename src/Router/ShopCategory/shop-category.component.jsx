import { useParams } from "react-router-dom"
import { Fragment, useContext, useEffect, useState } from "react"
import { ProductContext } from "../../Context/product.context"
import ShopCard from "../../Component/ShopCard/shop.component"
import './shop-category.styles.scss'
const ShopCategory = () => {
    const { category } = useParams()
    const { products } = useContext(ProductContext)
    const [currentProducts, setcurrentProducts] = useState(products[category])
    console.log({ 1: (products==undefined) }, { 2: currentProducts })
    useEffect(() => {
        setcurrentProducts(products[category])
    }, [products, category])

    return (
        <Fragment>
        <h1 className="h1">{category}</h1>
        <div className="category-contashopiner">
            
            {currentProducts!=undefined && currentProducts.map((product) => {
                return (<ShopCard product={product} key={product.id}/>)
            })}
        </div>
        </Fragment>
    )
}

export default ShopCategory