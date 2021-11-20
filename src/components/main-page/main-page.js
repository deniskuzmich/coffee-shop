import { Component, Fragment } from "react";

import MainHeader from "./main-header/main-header";
import MainAbout from "./main-about/main-about";
import BestCoffee from "./best-coffee/best-coffee";
import Footer from "../footer/footer";


class MainPage extends Component {
    render() {
        return (
            <Fragment>
                <MainHeader />
                <MainAbout />
                <BestCoffee />
                <Footer />
            </Fragment>
        )
    }
}

export default MainPage;