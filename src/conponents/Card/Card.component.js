import React from 'react';
import './Card.styles.css';

const Card = (props) => {
  return(
    <div className='card-container'>
    <img src={`https://robohash.org/${props.monster.id}?set=set2`} alt='A random monster'/>
      <h1> { props.monster.name } </h1>
    </div>
  )
}

export default Card;