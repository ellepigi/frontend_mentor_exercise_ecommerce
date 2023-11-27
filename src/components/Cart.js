import React from 'react'
import { useCartContext } from '../context/cartContext'

export const Cart = () => {
    
    const {cart} = useCartContext();

  return (
    <div className='h-60 w-60 bg-white border border-black rounded'>
        <div className="title w-full border-b border-gray-400">
            <h1>Cart</h1>
        </div>
        <div className="cart-text flex items-start justify-center h-full p-2 ">
            {cart === 0 ? (
                <h4>Il carrello è vuoto</h4>
            ) : (
                <div className='flex items-center gap-2 w-full'>
                    <img className='h-14 rounded' src="/image-product-1-thumbnail.jpg" alt="" />
                    <div className="text-info flex flex-col">
                    <h1 className='font-bold'>Fall sneakers</h1>
                    <h4>125$x{cart} {cart*125}$</h4>
                    </div>
                </div>
            )}
           
        </div>
    </div>
  )
}
