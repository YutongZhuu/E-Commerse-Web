import ShopCard from "../ShopCard/shop.component"
import { Link } from "react-router-dom"
import './category-preview.styles.scss'
const ProductPreview=({products, title})=>{
    console.log(products)
    return(
        <div className="category-preview-container"> 
            <h1 ><Link  className='title' to={title}>{title}</Link></h1>
            <div className="preview">
            {products.filter((_, i)=>i<4).map((product)=><ShopCard product={product} key={product.id}/>)}
            </div>
        </div>
    )
}
export default ProductPreview