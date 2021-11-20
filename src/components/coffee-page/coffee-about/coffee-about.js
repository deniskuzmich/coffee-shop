import './coffee-about.scss';


import BeansDescr from '../../beans-descr/beans-descr';
import CoffeeCatalog from '../../coffee-catalog/coffee-catalog';
import { Component } from 'react';

class CoffeeAbout extends Component { 
    state = {
        term: ''
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }
    
    render() {
        const buttonsData = [  //создаем кнопки
            {country: 'Brazil', label: 'Brazil'},
            {country: 'Kenya', label: 'Kenya'},
            {country: 'Columbia', label: 'Columbia'},
        ]
    
        const buttons = buttonsData.map(({country, label}) => {
            // const clazz = 'search-btn';
            return (
                <button 
                className={'search-btn'} 
                type='button'
                key={country}
                onClick={() => this.props.onFilterSelect(country)}>
                    {label}
                </button>
            )
        })
        return (
            <div className="beans">
                <BeansDescr />
                <hr />
                <div className="about-beans_form">
                    <form className="searching-form">
                        <span>Looking for</span>
                        <input type='text'
                               className='search-input'
                               placeholder='start typing here' 
                               value= {this.state.term}
                               onChange={this.onUpdateSearch}/>
                    </form>
                    <form className="filter-form">
                        <span>Or filter</span>
                        <div className="btn-group">
                            {buttons}
                        </div>
                    </form>
                </div>
                <CoffeeCatalog data={this.props.data}/>
            </div>
        )
    }
}

export default CoffeeAbout;