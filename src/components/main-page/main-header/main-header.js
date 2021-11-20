import './main-header.scss';
import beansWhite from '../../../resources/img/logo/beans-white.png';
import HeaderNav from '../../header-nav/header-nav';
// import pairBeansWhite from '../../../resources/img/logo/pair-beans-white.png';


const MainHeader = () => {
    return (
        <div className="main">
            <HeaderNav />
            <h1 className='main__title'>Everything You Love About Coffee</h1>
            <img src={beansWhite} alt="beans-logo" className='main__beans'/>
            <p className='main__text'>We makes every day full of energy and taste</p>
            <p className='main__text'>Want to try our beans?</p>
            <button className='main__btn'>More</button>
        </div>
    )
}

export default MainHeader;
