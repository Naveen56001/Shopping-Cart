/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../styles/card.css';

const Card = ({item, handleClick}) => {

    const {title, author, price, img} = item;
  return (
    <div className="card">
        <div className="image-box">
            <img src = {img} />
        </div>
        <div className="details">
            <p className="title">{title}</p>
            <p>{author}</p>
            <p>Price - {price} Rs</p>
            <button onClick={() => handleClick(item)}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Card;
