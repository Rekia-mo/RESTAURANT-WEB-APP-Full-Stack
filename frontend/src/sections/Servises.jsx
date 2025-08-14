import React from 'react'
import galery from '../assets/images/img.png'
import icon1 from '../assets/icons/icon1.png';
import icon2 from '../assets/icons/icon2.png';
import icon3 from '../assets/icons/icon3.png';

function Servises() {

  const items = [{img:icon1 , par:'Delivery within 30 minutes'},{img:icon3, par:'Best Offer & Prices'},{img:icon2 , par:'Online Services Available'}]

  return (
    <section 
    className=' flex justify-between items-center felx-row gap-15 max-lg:flex-col-reverse'>

      <img 
      src={galery} 
      alt="galery"
      width={580}
      height={580} className='max-xl:w-[400px]' />

      <div className='flex flex-col text-start justify-start items-start gap-4'>
        <h1 className='playfair-display-400 text-5xl text-oliv-07 '>
          Fastest Food<br />Delivery in City
        </h1>

        <p className='text-oliv-06 text-start dm-sans-ver2 text-[13px]'>
          Our visual designer lets you quickly and of drag a down<br />your way to customapps for both keep desktop. 
        </p>

        <ul className='flex flex-col mt-5 text-start justify-center align-center item-start gap-3'>
          {items.map((item,i)=>(
            <li className='flex flex-row gap-3' key={i}>
              <img 
              src={item.img} 
              alt='icon'
              width={25}
              height={10}/>

              <p className='text-[17px]'>
                {item.par}
              </p>
            </li>
          ))}
        </ul>
      </div>

    </section>
  )
}

export default Servises