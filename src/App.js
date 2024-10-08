import React from 'react'
import NavBar from './components/NavBar';
import Shop from './components/Shop';
import Cart from './components/Cart';
import {useState} from 'react';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const[warning, setWarning] = useState(false);
  const [show, setShow] = useState(true);

  const handleClick = (item) => {
    
    let isPresent = false;
    cart.forEach((product) => {
      if(item.id === product.id)
        isPresent = true;
    })
    if(isPresent)
    {
      setWarning(true);
      setTimeout(() => {
        setWarning(false)
      },2000)
      return;
    }
    setCart([...cart, item]);
  }

  return (
    <div>
      <NavBar size={cart.length} setShow={setShow}/>
      {
        show ? <Shop handleClick={handleClick}/>
        : <Cart cart={cart} setCart={setCart}/>      
      }
      {warning && <div className="absolute scroll-m-4 w-[450px] font-bold italic right-0 top-[10%] text-[25px] text-red-600">
        Item is already present in the cart !!!
        </div>
        }
    </div>
  )
}

export default App;

