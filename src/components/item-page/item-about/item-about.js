import './item-about.scss';

import beansBlack from '../../../resources/img/logo/beans-black.png';
import coffeeItem from '../../../resources/img/coffee-item.png';

const ItemAbout = () => {
    return (
        
        <div className="item">
        <img className='item__image' src={coffeeItem} alt="coffeeImage" />
        <div className="item__descr">
            <h2 className="item__title">About it</h2>
            <img src={beansBlack} alt="beans-black" />
            <p className="item__text">
               <b>Country:</b> 
               <span> Brasil</span>
            </p>
            <p className="item__text">
                <b>Description:</b> 
                <span> Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </p>

            <p className="item__price">Price: <span>$16.99</span></p>
        </div>
    </div>
    )
}

export default ItemAbout;