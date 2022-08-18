// React Imports
import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
// Custom Imports
import Button from './Button';
// Context Provider
import { useStateContext } from '../contexts/ContextProvider';

const Cart = () => {
  const { handleClick, currentColor } = useStateContext();

  return (
    <div className='nav-item absolute right-5 md:right-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-3'>
          <p className='font-semibold text-lg dark:text-gray-200'>
            Notifications
          </p>
        </div>
        <button
          type='button'
          onClick={() => handleClick('cart', true)}
          style={{ color: 'rgb(153,171,180)', borderRadius: '50%' }}
          className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
        >
          <MdOutlineCancel />
        </button>
      </div>
      <div className='mt-5 flex justify-center items-center'>
        <button
          type='button'
          className='text-white text-sm rounded p-1 px-2'
          style={{ background: 'rgb(254, 201, 15)' }}
        >
          {' '}
          No items in the cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
