import HeaderNav from '../../header-nav/header-nav';
import './coffee-header.scss';

const CoffeeHeader = () => {
    return (
        <div className="coffee">
            <HeaderNav />
            <h1 className="coffee__title">Our Coffee</h1>
        </div>
    )
}

export default CoffeeHeader;