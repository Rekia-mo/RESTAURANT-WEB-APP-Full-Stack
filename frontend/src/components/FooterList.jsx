import React from 'react'

function FooterList({title, items, img}) {
  return (
    <div className='flex flex-col justify-start text-start gap-6 mt-3'>

      <p className='text-white font-semibold text-[14px]'>
        {title}
      </p>

      {
        items?
        <ul className='flex flex-col gap-4 justify-start text-start text-[12px] items-start text-[#DBDFD0]'>
        {
          items.map((item, i )=>(
            <a 
            className='hover:text-bg-gray transition duration-200 ease-in-out'
            key={i}
            href={item.href? item.href: '#'}>

              {item.label? item.label: item}
            </a>
          ))
        }
        </ul>:
        <img 
        src={img} 
        alt='img'
        width={300}
        height={300}/>
      }
      
    </div>
  )
}

export default FooterList