import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    /*if (true) { Checking the ErrorBoundary
        return new Error("nooo");
    }*/
    const robotsArray = robots.map((user, i) => {
        return (
            <Card
                key= {i}
                id = {robots[i].id}
                name = {robots[i].name}
                email = {robots[i].email}
            />
        );
    })
    return (
        <div>
            {robotsArray}
        </div>
    );
}

export default CardList;