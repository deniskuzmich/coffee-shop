import pairBeansWhite from '../../resources/img/logo/pair-beans-white.png'
import './header-nav.scss';

import { Link } from 'react-router-dom';

const HeaderNav = () => {
    return (
        <div className="nav">
            <nav className='nav__wrapper'>
                <img src={pairBeansWhite} alt="pair-beans" className='nav__beans'/>
                <Link exact to="/mainPage" className='nav__item'>Coffe house</Link>
                <Link exact to="/coffeePage" className='nav__item'>Our coffee</Link>
                <Link exact to="/goods" className='nav__item'>For your pleasure</Link>
            </nav>
        </div>
    )
}

export default HeaderNav;