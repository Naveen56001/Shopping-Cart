import React from 'react'

const Cart = ({cart, setCart}) => {

    return (
        <div className="w-4/5 mx-auto mt-[5%] grid grid-cols-3 mb-[10%]">
            {
                cart?.map((item) => (
                    <div className = "w-64 p-5 hover:shadow-2xl hover:cursor-pointer" key={item.id}>
                        <div>
                            <img className="w-44 h-60" src={item.img} alt="Selected" />
                        </div>
                        <div className="m-3 p-1 font-sans">
                            <p className="font-bold text-lg">{item.title}</p>
                            <p className="font-mono">{item.author}</p>
                            <p className="text-lg">Price - {item.price}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Cart
