import './footer.scss';
import pairBeansWhite from '../../resources/img/logo/pair-beans-black.png';
import beansBlack from '../../resources/img/logo/beans-black.png';

const Footer = () => {
    return (
        <footer className="footer">
            <nav className='footer__nav'>
            <img src={pairBeansWhite} alt="pair-beans" className='footer__beans_pair'/>
                <a className='footer__nav_item' href='#'>Coffe house</a>
                <a className='footer__nav_item' href='#'>Our coffee</a>
                <a className='footer__nav_item' href='#'>For your pleasure</a>
            </nav>
            <img src={beansBlack} alt="pair-beans" className='main__beans'/>
        </footer>
    )
}

export default Footer;