import './goods-about.scss';

import BeansDescr from '../../beans-descr/beans-descr';
import CoffeeCatalog from '../../coffee-catalog/coffee-catalog';

const GoodsAbout = (props) => {
    return (
        <div className="about-beans">
            <BeansDescr />
        <hr />
            <CoffeeCatalog data={props.data}/>
        </div>
    )
}

export default GoodsAbout;