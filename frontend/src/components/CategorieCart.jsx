import React from 'react'
import { useNavigate } from 'react-router-dom'


function CategorieCart({_id, description, imageURL, name}) {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col w-[240px] h-[300px] px-3 text-center justify-center items-center gap-4 border-2 border-[#DBDFD0] rounded-2xl hover:bg-bg-gray transition duration-200 ease-in-out'>

      <img 
      src={`http://localhost:3000${imageURL}`} 
      alt={name} 
      width={80}
      height={80}/>

      <p className='text-oliv-07 pt-2 dm-sans-400 text-[18px] font-bold '>
        {name}
      </p>

      <p className='text-oliv-06 dm-sans-ver2 text-[13px]'>
        {description}
      </p>
    
       <button 
       onClick={()=>{navigate('/menu')}}
       className='hover:bg-rouge-brick hover:text-white  text-rouge-brick px-4 py-3  active:opacity-80 text-[13px] font-bold rounded-4xl transition duration-200 ease-in-out cursor-pointer'>
          Explore Menu
        </button>
    </div>
  )
}

export default CategorieCart