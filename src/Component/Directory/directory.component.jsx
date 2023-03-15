import Item from '../Item/item.component'
import '../Directory/directory.styles.scss'
const Directory=({catagories})=>{
    return(
        <div className="categories-container">
        {catagories.map((catagory) => {
          return (
            <Item key={catagory.id} catagory={catagory} />
          )
        })}
      </div>
    )
}

export default Directory