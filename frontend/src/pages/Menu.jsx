import React, { useState } from 'react'
import MenuItemsCart from '../components/MenuItemsCart';
import { useEffect } from 'react';
import { Footer } from '../sections';

const API_BASE_URL = 'http://localhost:3000/api/menuItem';

const API_KEY = localStorage.getItem('token');

const API_OPTIONS = {
  method:'GET',
  headers:{
    accept:'application/json',
    Authorization: `Bearer ${API_KEY}` 
  }
};

function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  const fetchMenuItems = async()=>{
    try{
      const response  = await fetch(API_BASE_URL, API_OPTIONS);  
      
      if(!response.ok) throw new Error(await response.json());

      const data = await response.json();
      setMenuItems(data);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    fetchMenuItems(); 
  },[])

  return (
    <>
      <section className='xl:px-30 max-xl:px-8 sm:py-20 py-12 flex flex-col justify-center items-center gap-2 max-sm:gap-5'>
        <h1 className='playfair-display-400 text-center leading-none text-oliv-07 max-lg:text-[75px] max-sm:text-[60px] text-[90px]'>
          Our Menu
        </h1>
        
        <p className='text-[#495460] text-center'>
          We consider all the drivers of change gives you the components  <br /> you need to change to create a truly happens.
        </p>

        <div className='grid grid-cols-4 gap-5 mt-10 max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:gap-10 '>
          {
            menuItems.map((item, _)=>(
              <MenuItemsCart
                key={item._id}
                {...item}
              />
            ))
          }
        </div>
      </section>


      <section className='bg-[#474747] padding-x padding-y pb-8'>
            <Footer/>
      </section>
    </>
  )
}

export default Menu