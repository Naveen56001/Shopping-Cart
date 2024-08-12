import React from 'react'
import '../styles/cart.css';

const Cart = ({cart, setCart}) => {

    return (
        <div className="main">
            {
                cart?.map((item) => (
                    <div className="cart-box" key={item.id}>
                        <div className="cart-img">
                            <img src={item.img} alt="Selected" />
                        </div>
                        <div className='content'>
                            <p className="title">{item.title}</p>
                            <p>{item.author}</p>
                            <p className="price">Price - {item.price}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Cart
