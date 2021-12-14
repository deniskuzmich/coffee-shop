import './beans-descr.scss';

import beansBlack from '../../resources/img/logo/beans-black.png';
import girl from '../../resources/img/coffee-page/girl.png';

const BeansDescr = () => {
    return (
        <div className="beans__wrapper">
        <img className='beans__girl' src={girl} alt="girl" />
        <div className="beans__descr">
            <h2 className="beans__title">About our beans </h2>
            <img src={beansBlack} alt="pair-beans" className='beans__black'/>
            <p className="beans__text">
                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            </p>
            <p className="beans__text">
                Afraid at highly months do things on at. Situation recommend objection do intention
                <br />
                so questions.
                <br /> 
                As greatly removed calling pleased improve an. Last ask him cold feel
                <br />
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face.
            </p>
        </div>
    </div>
    )
}

export default BeansDescr;