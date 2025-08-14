import React from 'react'

function CustomersCart({titel, par, img, name, loc}) {
  return (
    <div className='flex flex-col bg-bg-gray justify-start px-7 py-6 items-start w-[330px] gap-4 rounded-2xl'>
      <h3 className='dm-sans-ver2 font-semibold text-rouge-brick text-[19px]'>{titel}</h3>

      <p className='text-oliv-06 text-start dm-sans-ver2 text-[14px]'>{par}</p>

      <div className="w-full border-t border-[#DBDFD0] my-2"></div>


      <div className='flex flex-row justify-start items-center gap-5'>
        <img 
        src={img} 
        alt={name}
        width={55}
        height={55} />

        <div className='flex flex-col justify-start items-start gap-1'>

          <p className='text-[12px] text-oliv-07 font-bold'>
            {name}
          </p>

          <p className='text-[13px] text-oliv-06' >
            {loc}
          </p>
        </div>
        
      </div>
      

      
    </div>
  )
}

export default CustomersCart