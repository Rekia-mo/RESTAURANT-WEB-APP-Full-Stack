import React from 'react'
import Pt1 from '../assets/images/photo1.png';
import Pt2 from '../assets/images/photo2.png';
import Pt3 from '../assets/images/photo3.png';
import CustomersCart from '../components/CustomersCart';


function CustomerRev() {

  const items = [
    {
      titel: '“The best restaurant”',
      par: 'Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.',
      img: Pt1,
      name: 'Matt Cannon',
      loc: 'Los Angeles, CA'
    },
    {
      titel: '“Simply delicious”',
      par: 'Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.',
      img: Pt2,
      name: 'Sophire Robson',
      loc: 'San Diego, CA'
    },
    {
      titel: '“One of a kind restaurant”',
      par: 'The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.',
      img: Pt3,
      name: 'Andy Smith',
      loc: 'San Francisco, CA'
    },
  ]
  return (
    <section className='flex justify-center items-center flex-col w-full gap-13'>

      <h1 className='playfair-display-400 text-5xl text-oliv-07 '>
        What Our Customers Say
      </h1>

      <div className='grid grid-cols-3 gap-20 max-xl:grid-cols-1 max-xl:gap-10'>
       {
        items.map((item,i)=>(
          <CustomersCart
          key={i}
          {...item}
          />
        ))
       }
      </div>
        

    </section>
  )
}

export default CustomerRev