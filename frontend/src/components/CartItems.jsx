import React from 'react';
import dishImg from '../assets/images/eggs.png';
import { formatMoney } from '../utils/money';

function CartItems({ menuItem, quantity }) {
  return (
    <>
      <div className='flex flex-col gap-4 w-full'>

        <div className='flex flex-col gap-3 py-5 px-5 border-2 border-[#DBDFD0] rounded-2xl hover:bg-bg-gray transition duration-200 ease-in-out '>

          <div className='flex flex-row justify-start items-center gap-6 '>

            <img src={`http://localhost:3000/${menuItem.imageURL}`} alt="dish img" width={170} />

            <div className='flex flex-col gap-3 justify-center items-start'>
              <p className='text-[21px] dm-sans-ver2 font-semibold text-oliv-07 tracking-wide mt-2'>
                {menuItem.name}
              </p>

              <p className='text-rouge-brick font-semibold text-[18px] dm-sans-ver2'>
                {formatMoney(menuItem.price)}
              </p>

              <div className='flex flex-row items-center'>
                <span>
                  Quantity: <span> {quantity} </span>
                </span>

                <span className='text-rouge-brick ml-4 cursor-pointer hover:opacity-55 transition duration-200 ease-in-out'>
                  Update
                </span>

                <span className='text-rouge-brick ml-4 cursor-pointer hover:opacity-55 transition duration-200 ease-in-out'>
                  Delete
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItems;