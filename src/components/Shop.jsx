import React from 'react'
import list from '../list';
import Card from '../components/Card';

const Shop = ({handleClick}) => {
  return (
    <section className="w-4/5 mx-auto mt-[5%] mb-[5%] grid grid-cols-3 gap-16">
        {
          list.map((items) => (
            <Card item = {items} key = {items.id} handleClick={handleClick}/>
          ))
        }
    </section>
  )
}

export default Shop;
