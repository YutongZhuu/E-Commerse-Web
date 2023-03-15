import './item.style.scss'

const Item = ({ catagory }) => {
    const { imageUrl, title } = catagory
    return (
        <div className="category-container">
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