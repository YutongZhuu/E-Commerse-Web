import './item.style.scss'
import { useNavigate } from 'react-router-dom'

const Item = ({ catagory }) => {
    const { imageUrl, title } = catagory
    const navigate=useNavigate()

    const onRouteHandler=()=>navigate("/shop"+catagory.route)
    return (
        <div className="category-container" onClick={onRouteHandler}>
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`

            }}></div>
            <div className="category-body-container">
                <h2>{title}</h2>
                <p>shop Now</p>
            </div>
        </div>
    )
}

export default Item