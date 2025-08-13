import React from 'react';
import { useEffect, useState } from 'react';
import CategorieCart from '../components/CategorieCart'

const API_BASE_ULR = 'http://localhost:3000/api';

const API_OPTIONS = {
  method:'GET',
  Headers:{
    accept:'application/json'
  }
};

function Categories() {
const [categories, setCategories] = useState([]);

  const fetchCategories = async()=>{
    try{
      const endPoint = `${API_BASE_ULR}/categorie`

      const response = await fetch(endPoint, API_OPTIONS);

      if(!response.ok) {throw new Error('failed to fetch data');}

      const data = await response.json();
      setCategories(data);

    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    fetchCategories(); 
  },[])

  return (
    <section id='Ctegories' className='flex justify-center items-center flex-col w-full gap-13'>

      <h1 className='playfair-display-400 text-5xl text-oliv-07 '>
        Browse Our Menu
      </h1>

      <div className='grid grid-cols-4 gap-20 max-xl:grid-cols-2 max-xl:gap-10  max-md:grid-cols-1'>
        {
          categories.map((categorie,_)=>(
            <CategorieCart
              key={categorie._id}
              {...categorie}
            />
          ))
        }
      </div>
        

    </section>
  )
}

export default Categories