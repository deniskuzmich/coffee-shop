import './best-coffee.scss';

import solimo from '../../../resources/img/main-page/solimo.png';
import presto from '../../../resources/img/main-page/presto.png';
import aromistico from '../../../resources/img/main-page/aromistico.png';

const BestCoffee = () => {
    return (
        <div className="best">
            <h2 className="best__title">Our best</h2>
            <div className="best__list">
                <div className="best__item">
                    <img src={solimo} alt="Solimo" className='best-coffee'/>
                    <p className="best__name">Solimo Coffee Beans 2 kg</p>
                    <p className="best__price">10.73$</p>
                </div>
                <div className="best__item">
                <img src={presto} alt="Presto" className='best-coffee'/>
                    <p className="best__name">Presto Coffee Beans 1 kg</p>
                    <p className="best__price">15.99$</p>
                </div>
                <div className="best__item">
                <img src={aromistico} alt="Aromistico" className='best-coffee'/>
                    <p className="best__name">AROMISTICO Coffee 1 kg</p>
                    <p className="best__price">6.99$</p>
                </div>
            </div>
        </div>
    )
}

export default BestCoffee;