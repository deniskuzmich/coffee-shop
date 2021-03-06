import { Link } from 'react-router-dom'
import './coffee-catalog.scss'

const CoffeeCatalog = ({data}) => {
    const listItems = data.map((item) => {
        const {id, thumbnail, name, country, price} = item //создаем карточки товара
        return (
            <Link to={`/coffee-shop/${id}`}>
            <div className="coffee-catalog_item" key={id}>
                <img src={thumbnail} alt="coffee" className="coffee-item_img" />
                <p className="coffee-catalog_name">{name}</p>
                <p className="coffee-catalog_country">{country}</p>
                <p className="coffee-catalog_price">{price}</p>
            </div>
            </Link>
        )
})
    return (
        <div className="coffee-catalog">
            {listItems}
        </div>
    ) 
}

export default CoffeeCatalog;

