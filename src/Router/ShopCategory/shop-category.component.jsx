import { useParams } from "react-router-dom"
import { Fragment, useContext, useEffect, useState } from "react"
import ShopCard from "../../Component/ShopCard/shop.component"
import './shop-category.styles.scss'
import { useSelector } from "react-redux"
import { selectProducts } from "../../Store/products/products.selector"

const ShopCategory = () => {
    const products=useSelector(selectProducts)
    const { category } = useParams()
    const [currentProducts, setcurrentProducts] = useState(products[category])
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