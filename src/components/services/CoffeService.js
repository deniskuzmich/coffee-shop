import ProductCard from "../product-card/product-card";

function CoffeeService() {

    const getAllCoffee =  () => {
        const res = ProductCard;
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
    return {getAllCoffee}
}

export default CoffeeService;



