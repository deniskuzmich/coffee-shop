import './main-about.scss';
import beansBlack from '../../../resources/img/logo/beans-black.png';

const MainAbout = () => {
    return (
        <div className="about__wrapper">
            <h2 className='about__title'>About us</h2>
            <img src={beansBlack} alt="pair-beans" className='beans__black'/>
            <p className='about__text'>
                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                Afraid at highly months do things on at. Situation recommend objection do intention
                so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face.
            </p>
            <p className='about__text'>
                Now residence dashwoods she excellent you. Shade being under his bed her, Much
                read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                horrible but confined day end marriage. Eagerness furniture set preserved far
                recommend. Did even but nor are most gave hope. Secure active living depend son
                repair day ladies now.
            </p>
        </div>
    )
}

export default MainAbout;