import React from 'react'

function OrderItems({ menuItem, quantity, addToCart }) {
  return (
    <>
      <div className='flex flex-row justify-start items-center gap-5 w-full'>
        <img src={`http://localhost:3000/${menuItem.imageURL}`} alt="dish img"
          width={170} />

        <div className='flex flex-col justify-center items-start dm-sans-ver2 gap-4'>
          <p className='text-[21px]  font-semibold'>
            {menuItem.name}
          </p>

          <p>Quantity: {quantity}</p>

          <button className='bg-rouge-brick text-white px-9 py-1.5  active:opacity-90 text-[14px] hover:opacity-70 font-bold rounded-3xl transition duration-200 ease-in-out cursor-pointer shadow-md shadow-rouge-brick/30'
          onClick={()=>{
            addToCart(menuItem._id)
          }}>
            Add Dish
          </button>
        </div>
      </div>
    </>
  )
}

export default OrderItems