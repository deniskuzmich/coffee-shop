import './footer.scss';
import pairBeansWhite from '../../resources/img/logo/pair-beans-black.png';
import beansBlack from '../../resources/img/logo/beans-black.png';

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <nav className='footer__nav'>
            <img src={pairBeansWhite} alt="pair-beans" className='footer__beans_pair'/>
                <Link exact to="/mainPage" className='footer__nav_item' href='#'>Coffe house</Link>
                <Link exact to ="/coffeePage" className='footer__nav_item' href='#'>Our coffee</Link>
                <Link exact to ="/goods" className='footer__nav_item' href='#'>For your pleasure</Link>
            </nav>
            <img src={beansBlack} alt="pair-beans" className='main__beans'/>
        </footer>
    )
}

export default Footer;