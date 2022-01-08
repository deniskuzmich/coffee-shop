import './goods-about.scss';


import CoffeeCatalog from '../../coffee-catalog/coffee-catalog';
import GoodsDescr from '../../goods-descr/goodsDescr';

const GoodsAbout = (props) => {
    return (
        <div className="about-beans">
            <GoodsDescr />
        <hr />
            <CoffeeCatalog data={props.data}/>
        </div>
    )
}

export default GoodsAbout;