import { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.scss';

import MainPage from "../main-page/main-page";
import CoffeePage from "../coffee-page/coffee-page";
import ItemPage from "../item-page/item-page";
import GoodsPage from "../goods-page/goods-page";
import CoffeeService from '../services/CoffeService';
import Footer from '../footer/footer';
import ItemAbout from '../item-page/item-about/item-about';


const App = () =>  {
    const [coffeeList, setCoffeeList] = useState([]);
    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('');

    const {getAllCoffee} = CoffeeService();

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
         setCoffeeList(getAllCoffee);
    }


    const searchProd = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.country.indexOf(term) > -1
        })
    }

    const onUpdateSearch = (term) => {
        setTerm(term);
    }

    const filterProd = (items, filter) => {
        switch(filter) {
            case 'Brazil':
                return items.filter(item => item.country === 'Brazil');
            case 'Kenya':
                return items.filter(item => item.country === 'Kenya');
            case 'Columbia':
                return items.filter(item => item.country === 'Columbia');
            default:
                return items;
        }
    }

    const onFilterSelect = (filter) => {
        setFilter(filter);
    }

    const visibleProd = filterProd(searchProd(coffeeList, term), filter);
        
        return (
            <Router>           
                <Routes>  
                <Route  path="/coffee-shop" element={<MainPage />} />           
                <Route  path="/coffee-shop/:coffeeId" element={<ItemAbout />} />           
                    <Route   path="/coffeePage" element={
                        <CoffeePage data={visibleProd} 
                        onUpdateSearch={onUpdateSearch} 
                        onFilterSelect={onFilterSelect}/>
                    } />
                    <Route  path="/item" element={<ItemPage />} />
                    <Route  path="/goods" element={<GoodsPage data={visibleProd}/>} />
                </Routes>
                <Footer />
            </Router>
        )
}

export default App;



// class App extends Component {
//     state = {
//         products: [
//             {name: 'AROMISTICO Coffee 1 kg', thumbnail: aromistico, country: 'Brazil', price: '6.99$', id: 1},
//             {name: 'AROMISTICO Coffee 1 kg', thumbnail: aromistico, country: 'Kenya', price: '6.99$', id: 2},
//             {name: 'AROMISTICO Coffee 1 kg', thumbnail: aromistico, country: 'Columbia', price: '6.99$', id: 3},
//             {name: 'AROMISTICO Coffee 1 kg', thumbnail: aromistico, country: 'Brazil', price: '6.99$', id: 4},
//             {name: 'AROMISTICO Coffee 1 kg', thumbnail: aromistico, country: 'Brazil', price: '6.99$', id: 5},
//             {name: 'AROMISTICO Coffee 1 kg', thumbnail: aromistico, country: 'Brazil', price: '6.99$', id: 6},
//         ],
//         term: '',
//         filter: ''
//     }

//     searchProd = (items, term) => {
//         if (term.length === 0) {
//             return items;
//         }

//         return items.filter(item => {
//             return item.country.indexOf(term) > -1
//         })
//     }

//     onUpdateSearch = (term) => {
//         this.setState({term});
//     }

//     filterProd = (items, filter) => {
//         switch(filter) {
//             case 'Brazil':
//                 return items.filter(item => item.country === 'Brazil');
//             case 'Kenya':
//                 return items.filter(item => item.country === 'Kenya');
//             case 'Columbia':
//                 return items.filter(item => item.country === 'Columbia');
//             default:
//                 return items;
//         }
//     }

//     onFilterSelect = (filter) => {
//         this.setState({filter});
//     }

//     render() {
//         const {products, term, filter} = this.state;
//         const visibleProd = this.filterProd(this.searchProd(products, term), filter);
        
//         return (
//             <>
//                 <MainPage />
//                 <CoffeePage data={visibleProd} onUpdateSearch={this.onUpdateSearch} onFilterSelect={this.onFilterSelect}/>
//                 <ItemPage />
//                 <GoodsPage data={visibleProd}/>
//             </>
//         )
//     }
// }