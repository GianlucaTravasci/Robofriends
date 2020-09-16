import React, {Component} from 'react';
import Card from '../components/Card';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css';

class App extends Component {
    render() {
        return(          
            <div>
                <div className="tc">
                    <h1>Helloo!!</h1>
                </div>
                <Card />
            </div>
        )
    }
    
}

export default App;