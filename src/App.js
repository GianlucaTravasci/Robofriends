import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends Component {
    constructor () {
        super()
        this.state = {
            robots: robots,
            searchField: ''
        }
    }
    render() {
        return (
            <div>
                <h1>RoboFriends</h1>
                <SearchBox />
                <CardList robots = {robots}/>
            </div>
        )
    }
}

export default App;