import {Fragment } from "react";

import CoffeeAbout from "./coffee-about/coffee-about";
import CoffeeHeader from "./coffee-header/coffee-header";
import Footer from "../footer/footer";

const CoffeePage = (props) => {
    return (
        <Fragment>
            <CoffeeHeader />
            <CoffeeAbout data={props.data} onUpdateSearch={props.onUpdateSearch} onFilterSelect={props.onFilterSelect}/>
            <Footer />
        </Fragment>
    )
}


export default CoffeePage;