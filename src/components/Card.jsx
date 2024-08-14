/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const Card = ({item, handleClick}) => {

    const {title, author, price, img} = item;
  return (
      <div className="w-64 p-5 hover:shadow-2xl hover:cursor-pointer">
          <div> 
              <img className="w-44 h-60" src = {img} />
          </div>
          <div className="m-3 p-1 font-sans">
              <p className="font-bold text-lg">{title}</p>
              <p className="font-mono">{author}</p>
              <p className="text-lg">Price - {price} Rs</p>
              <button className="px-1 py-2 mt-2 border-none font-bold text-white bg-violet-700 rounded-md cursor-pointer hover:bg-violet-500" onClick={() => handleClick(item)}>Add to Cart</button>
          </div>
      </div>
  )
}

export default Card;
