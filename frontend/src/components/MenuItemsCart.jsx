import React from 'react'

function MenuItemsCart({_id, name, description, price, imageURL}) {
  return (
    <div className='transition duration-200 ease-in-out cursor-pointer flex flex-col justify-center items-center gap-4 border-[1.5px] border-[#DBDFD0] rounded-2xl'>
      <img 
      className='w-full'
      src={`http://localhost:3000/${imageURL}`} 
      alt={name} />

      <div className='flex flex-col justify-center items-center gap-2 text-center'>

        <p className='text-[18px] dm-sans-ver2 font-semibold text-oliv-07 tracking-wide mt-2'>
          {name}
        </p>

        <p  className='text-rouge-brick font-semibold text-[17px] dm-sans-ver2'>
          ${price}
        </p>
        
        <p className='text-[13px] text-oliv-06 mb-5 mx-5'>
          {description}
        </p>

        <button className='bg-rouge-brick text-white  px-15 py-2  active:opacity-90 text-[15px] hover:opacity-70 font-bold rounded-4xl transition duration-200 ease-in-out cursor-pointer shadow-md shadow-rouge-brick/30 mb-7'>
          Add Dish
        </button>
      </div>
    </div>
  )
}

export default MenuItemsCart