import { Component, Fragment } from "react";

import Footer from "../footer/footer";
import GoodsAbout from "./goods-about/goods-about";
import GoodsHeader from "./goods-header/goods-header";


class GoodsPage extends Component {
    render() {
        return (
            <Fragment>
                <GoodsHeader />
                <GoodsAbout data={this.props.data}/>
                <Footer />
            </Fragment>
        )
    }
}

export default GoodsPage;