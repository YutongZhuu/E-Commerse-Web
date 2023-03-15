import { Route, Routes } from "react-router-dom"
import ShopPreview from "../Shop-Preview/shop-preview.component"
import ShopCategory from "../ShopCategory/shop-category.component"
const Shop = () => {
    return (
        <Routes>
            <Route index={true} element={<ShopPreview/>}/>
            <Route path=':category' element={<ShopCategory/>} />
        </Routes>
    )
}


export default Shop