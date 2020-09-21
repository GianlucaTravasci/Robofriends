import React, { Component } from 'react';
import Header from '../components/Header';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

export class MainPage extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }
    filteredRobots = () => {
        const {  robots, searchField } = this.props;
        robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
    }
    render() {
        const { onSearchChange, isPending } = this.props;
        
        return (
          <div className='tc'>
            <Header />
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
              { isPending ? <h1>Loading</h1> :
                <ErrorBoundry>
                  <CardList robots={filteredRobots} />
                </ErrorBoundry>
              }
            </Scroll>
          </div>
        );
    }
}

export default MainPage;