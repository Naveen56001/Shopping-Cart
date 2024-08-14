import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

const NavBar = ({size, setShow}) => {
  return (
    <nav className = "w-[100%] bg-violet-600 h-16">
        <div className="w-[80%] m-auto flex justify-between items-center">
            <span className="text-2xl font-bold text-[#fff] font-sans m-3 cursor-pointer" onClick={() => setShow(true)}>
                KIDDIES BOOKS
            </span>
            <div className="cursor-pointer" onClick={() => setShow(false)}>
                <span className = "text-3xl text-white">
                    <i className="fas fa-cart-plus"></i>
                </span>
                <span className = "relative p-[3px] bg-red-500 text-white font-bold top-[-15px] rounded-2xl">{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default NavBar;
