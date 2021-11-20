import { Component, Fragment } from "react";


import ItemHeader from "./item-header/item-header";
import Footer from "../footer/footer";
import ItemAbout from "./item-about/item-about";

class ItemPage extends Component {
    render() {
        return (
            <Fragment>
                <ItemHeader />
                <ItemAbout />
                <Footer />
            </Fragment>
        )
    }
}

export default ItemPage;