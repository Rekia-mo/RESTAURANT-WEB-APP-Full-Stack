import React from 'react';
import bg from '../assets/images/bg.png';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();
    
  const token = localStorage.getItem('token');

  return (
    <section id="hero" 
    className='max-container bg-cover bg-center h-[90vh] w-screen flex justify-center items-center' 
    style={{ backgroundImage: `url(${bg})` }}>

      <div className="flex flex-col text-center justify-center item-center gap-5">

        <h1 className='playfair-display-400 leading-none text-oliv-07 max-lg:text-[75px] max-sm:text-[60px] text-[90px] '>Best food for <br /> your taste</h1>

        <p className='text-oliv-07 '>Discover delectable cuisine and unforgettable moments <br /> in our welcoming, culinary haven.</p>

        <div>
          <button 
          onClick={()=>{token? navigate('/menu') : navigate('/signUp')}}
          className='bg-rouge-brick text-white px-6 py-4 hover:opacity-80 active:opacity-100 text-[12px] font-semibold rounded-4xl transition duration-300 ease-in-out cursor-pointer'>
          Explore Menu
        </button>
        </div>
        
      
      </div>
    </section>
  )
}

export default Hero