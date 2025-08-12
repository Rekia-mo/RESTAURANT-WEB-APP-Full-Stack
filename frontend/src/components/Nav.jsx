import React from 'react'
import logo from "../assets/icons/Vector.png"

function Nav() {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#Servises", label: "Services" },
    { href: "#Menu", label: "Menu" },
    { href: "#Contact", label: "Contact" }
  ]

  return (
    <header className='padding-x py-6 z-10 absolute w-full'>
      <nav className='flex flex-row justify-between items-center max-container '>
        <a 
        className='flex flex-row justify-center items-center'
        href='/'>
          <img 
          src={logo} 
          alt="Logo"
          width={45}
          height={45}
          />
          <h3 className='playfair-display-400 text-4xl text-[#474747]'>Bistro Bliss</h3>
        </a>

        <ul className='flex felx-row flex-1 justify-center items-center gap-x-2 text-oliv-07 dm-mono-medium font-semibold max-lg:hidden'>
          {navLinks.map((link,i)=>(
            <li 
            className='hover:bg-[#DBDFD0] flex justify-center items-center transition duration-300 ease-in-out py-0.5 px-3 rounded-4xl'
            key={i}>
              <a href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

          <button className='font-semibold text-oliv-07 border-oliv-07 border-2 py-2 px-4 rounded-4xl hover:text-white dm-mono-medium hover:bg-oliv-07 transition duration-300 ease-in-out'>
            Sign up
          </button>

      </nav>
    </header>
  )
}

export default Nav