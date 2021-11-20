import pairBeansWhite from '../../resources/img/logo/pair-beans-white.png'
import './header-nav.scss';

const HeaderNav = () => {
    return (
        <div className="nav">
            <nav className='nav__wrapper'>
                <img src={pairBeansWhite} alt="pair-beans" className='nav__beans'/>
                <a className='nav__item' href='#'>Coffe house</a>
                <a className='nav__item' href='#'>Our coffee</a>
                <a className='nav__item' href='#'>For your pleasure</a>
            </nav>
        </div>
    )
}

export default HeaderNav;