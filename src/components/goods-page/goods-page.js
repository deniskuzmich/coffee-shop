
import GoodsAbout from "./goods-about/goods-about";
import GoodsHeader from "./goods-header/goods-header";

const GoodsPage = (props) => {
        return (
            <>
                <GoodsHeader />
                <GoodsAbout data={props.data}/>
            </>
        )
}

export default GoodsPage;