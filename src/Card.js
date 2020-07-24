import React from 'react';

const Card = ({ id, name, email }) => { //destructoring 
    /**
     * otherwise, with no destructring i had to do somthing like
     * (props) => {
     *  props.id
     *  props.name
     *  props.email
     * }
     * 
     *or with the simple destructoring
        {id, name, email} = props
    */
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt='robot on the list'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;