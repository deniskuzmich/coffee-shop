import ProductCard from "../product-card/product-card";
import BestCoffeeItem from "../product-card/bestCoffee-card";

function CoffeeService() {

    const getAllCoffee =  () => {
        const res = ProductCard;
        return res.map(_transformCoffee);
    }  

    const getItemCoffee = (id) => {
        return _transformCoffee(ProductCard[id]);
    }

    const getBestCoffee = () => {
        const res = BestCoffeeItem;
        return res.map(_transformCoffee);
    }

    const _transformCoffee = (item) => {
        return {
            id: item.id,
            thumbnail: item.thumbnail,
            name: item.name,
            country: item.country,
            price: item.price
        }
    }
    return {getAllCoffee, getItemCoffee, getBestCoffee}
}


export default CoffeeService;



