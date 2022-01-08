import './best-coffee.scss';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import CoffeeService from '../../services/CoffeService';

const BestCoffee = () => {
    const [bestCoffee, setBestCoffee] = useState([]);

    const {getBestCoffee} = CoffeeService();
    
    useEffect(() => {
        updateBestCoffee();
    }, [])

    const updateBestCoffee = () => {
        setBestCoffee(getBestCoffee)
    }

    function renderItems(arr) {
        const data = arr.map((item, i) => {
            return (
                <Link to={`/coffee-shop/${item.id}`}>
                    <div className="best__item" key={i}>
                        <img src={item.thumbnail} alt="Solimo" className='best-coffee'/>
                        <p className="best__name">{item.name}</p>
                        <p className="best__price">{item.price}</p>
                    </div>
                </Link>
            )
        })

        return (
            <>
            {data}
            </>
            
        )
    }

    const items = renderItems(bestCoffee);

    return (
        <div className="best">
            <h2 className="best__title">Our best</h2>
            <div className="best__list">
                {items}
            </div>
        </div>
    )
}




export default BestCoffee;



// import './best-coffee.scss';

// import solimo from '../../../resources/img/main-page/solimo.png';
// import presto from '../../../resources/img/main-page/presto.png';
// import aromistico from '../../../resources/img/main-page/aromistico.png';

// import { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';

// import CoffeeService from '../../services/CoffeService';

// const BestCoffee = () => {
//     const [bestCoffee, setBestCoffee] = useState([]);

//     // const {getItemCoffee} = CoffeeService();

//     // const onRequest = () => {
//     //     getItemCoffee()
//     // }

//     return (
//         <div className="best">
//             <h2 className="best__title">Our best</h2>
//             <div className="best__list">
//                 <Link to={`/coffee-shop/${0}`}>
//                     <div className="best__item">
//                         <img src={solimo} alt="Solimo" className='best-coffee'/>
//                         <p className="best__name">Solimo Coffee Beans 2 kg</p>
//                         <p className="best__price">10.73$</p>
//                     </div>
//                 </Link>
//                 <Link  to={`/coffee-shop/${1}`}>
//                 <div className="best__item">
//                     <img src={presto} alt="Presto" className='best-coffee'/>
//                         <p className="best__name">Presto Coffee Beans 1 kg</p>
//                         <p className="best__price">15.99$</p>
//                     </div>
//                 </Link>      
//                 <Link  to={`/coffee-shop/${2}`}>
//                     <div className="best__item">
//                     <img src={aromistico} alt="Aromistico" className='best-coffee'/>
//                         <p className="best__name">AROMISTICO Coffee 1 kg</p>
//                         <p className="best__price">6.99$</p>
//                     </div>
//                 </Link>
//             </div>
//         </div>
//     )
// }