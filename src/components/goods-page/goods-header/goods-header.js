import './goods-header.scss';

import HeaderNav from '../../header-nav/header-nav';

const GoodsHeader = () => {
    return (
        <div className="goods">
            <HeaderNav />
            <h2 className="goods__title">For your pleasure</h2>
        </div>
    )
}

export default GoodsHeader;