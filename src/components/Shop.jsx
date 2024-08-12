import React from 'react'
import list from '../list';
import Card from '../components/Card';

const Shop = ({handleClick}) => {
  return (
    <section>
        {
          list.map((items) => (
            <Card item = {items} key = {items.id} handleClick={handleClick}/>
          ))
        }
    </section>
  )
}

export default Shop;
