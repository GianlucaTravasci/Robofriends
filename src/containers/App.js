import React, {Component} from 'react';
import Card from '../components/Card';

//import CardList from '../components/CardList';
//import SearchBox from '../components/SearchBox';
//import Scroll from '../components/Scroll';
//import ErrorBoundary from '../components/ErrorBoundary'
import './App.css';

import {robots} from '../robots'

class App extends Component {
    render() {
        return(          
            <div>
                <div className="tc">
                    <h1>Helloo!!</h1>
                </div>
                {robots.map(({ id, name, email }) => {
                    return (<Card id={id} name={name} email={email}/>)
                })}
            </div>
        )
    }
    
}

export default App;