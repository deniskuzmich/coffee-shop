import './item-about.scss';

import beansBlack from '../../../resources/img/logo/beans-black.png';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CoffeeService from '../../services/CoffeService';
import CoffeeHeader from '../../coffee-page/coffee-header/coffee-header';


const ItemAbout = () => {
    const {coffeeId} = useParams();
    const [coffee, setCoffee] = useState({});

    const {getItemCoffee} = CoffeeService();

    useEffect(() => {
        updateCoffee();
    }, [coffeeId])

    const result = getItemCoffee(coffeeId);
    console.log(result)

    const updateCoffee = () => {
         setCoffee(result)
    }

    return (
        <>
            <CoffeeHeader />
            <View coffee={coffee}/>
        </>
    )
}

const View = ({coffee}) => {
    const {thumbnail, country, price} = coffee;

    return (
        
        <div className="item">
        <img className='item__image' src={thumbnail} alt="coffeeImage" />
        <div className="item__descr">
            <h2 className="item__title">About it</h2>
            <img src={beansBlack} alt="beans-black" />
            <p className="item__text">
            <b>Country:</b> 
            <span>{country}</span>
            </p>
            <p className="item__text">
                <b>Description:</b> 
                <span> Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </p>

            <p className="item__price">Price: <span>{price}</span></p>
        </div>
    </div>
    )
}

export default ItemAbout;