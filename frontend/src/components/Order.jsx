import React from 'react'
import dayjs from "dayjs";
import { formatMoney } from '../utils/money';
import OrderItems from './OrderItems';

function Orders({ createdAt, total, _id, items, addToCart }) {
  return (
    <div className='flex flex-col gap-4 py-6 px-7 border-2 border-[#DBDFD0] rounded-2xl w-full '>

      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row justify-start items-center gap-6'>

          <div className='flex flex-col gap-1'>
            <div className='font-bold'>Order Placed:</div>
            <div>
              {dayjs(createdAt).format('MMMM D')}
            </div>
          </div>

          <div className='flex flex-col gap-1'>
            <div className='font-bold'>Total:</div>
            <div>
              {formatMoney(total)}
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-1'>
          <div className='font-bold'>Order ID:</div>
          <div>
            {_id}
          </div>
        </div>

      </div>

      <div className="border-t border-1 border-[#DBDFD0] my-1 -mx-7" />

      <div className='flex flex-col gap-13 justify-center items-start w-full py-7'>
        {
          items.map((orderItem) => (
            <OrderItems key={orderItem._id} {...orderItem} addToCart={addToCart} />
          ))
        }
      </div>

    </div>
  )
}

export default Orders