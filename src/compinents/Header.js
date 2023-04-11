import React, { useState } from 'react'
import { FaWeightHanging } from "react-icons/fa";
import Order from './Order';

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)
    return (
            <header>
            <div>
                <span className='logo'>House Staff</span>
                <ul className='nav'>
                    <li>About us</li>
                    <li>Contacts</li>
                    <li>Cabinet</li>
                </ul>
                <FaWeightHanging onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-buttom ${cartOpen && 'active'}`} />

                {cartOpen && (
                    <div className='shop-cart'>
                        {props.orders.map(el => (
                            <Order key={el.id} item={el} />
                        ))}
                        </div>
                )}

            </div>
            <div className='presentation'></div>
            </header>
        )
}

