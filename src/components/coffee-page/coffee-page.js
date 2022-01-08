import {Fragment } from "react";

import CoffeeAbout from "./coffee-about/coffee-about";
import CoffeeHeader from "./coffee-header/coffee-header";


const CoffeePage = (props) => {
    return (
        <Fragment>
            <CoffeeHeader />
            <CoffeeAbout data={props.data} onUpdateSearch={props.onUpdateSearch} onFilterSelect={props.onFilterSelect}/>
        </Fragment>
    )
}


export default CoffeePage;