import React from 'react'

function MenuItemsCart({_id, name, description, price, imageURL}) {
  return (
    <div className='hover:bg-gray-100 transition duration-200 ease-in-out cursor-pointer flex flex-col justify-center items-center gap-4 border-[1.5px] border-[#DBDFD0] rounded-2xl'>
      <img 
      className='w-full'
      src={`http://localhost:3000/${imageURL}`} 
      alt={name} />

      <div className='flex flex-col justify-center items-center gap-2 text-center'>
        <p  className='text-rouge-brick font-semibold text-[20px] dm-sans-ver2'>
          ${price}
        </p>

        <p className='text-[15px] dm-sans-ver2 font-semibold text-oliv-07 tracking-wide'>
          {name}
        </p>

        <p className='text-[13px] text-oliv-06 mb-6 mx-5'>
          {description}
        </p>
      </div>
    </div>
  )
}

export default MenuItemsCart