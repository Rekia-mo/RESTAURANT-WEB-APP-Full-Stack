import React from 'react'
import logo from "../assets/icons/Vector.png"
import { useNavigate, Outlet, useLocation, Link } from 'react-router-dom';
import cartImage from '../assets/icons/serving.png'

function Nav() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#Servises", label: "Services" },
    { href: "/#Menu", label: "Menu" },
    { href: "#Contact", label: "Contact" }
  ]

  const navigate = useNavigate();

  const location = useLocation();

  return (
    <>
      <header className='padding-x pt-4 pb-4 z-10 w-full bg-white shadow-[0_10px_15px_rgba(0,0,0,0.1)]'>
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
            <h3 className='playfair-display-400 text-3xl text-[#474747]'>Bistro Bliss</h3>
          </a>

          <ul className='flex felx-row flex-1 justify-center items-center gap-x-2 text-oliv-07 dm-mono-medium font-semibold max-lg:hidden'>
            {navLinks.map((link, i) => (
              <li
                className='hover:bg-[#DBDFD0] flex justify-center items-center transition duration-300 ease-in-out text-[14px] py-1 px-4 rounded-4xl'
                key={i}>
                <a href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {(location.pathname === '/') &&
            <button className='font-semibold text-oliv-07 border-oliv-07 border-2 py-2 px-4 rounded-4xl hover:text-white text-[14px] dm-mono-medium hover:bg-oliv-07 active:opacity-80 transition duration-300 ease-in-out cursor-pointer'
              onClick={() => navigate('/signUp')}>
              Sign up
            </button>
          }




          {
            (location.pathname != '/') &&
            <>
              <button className='font-semibold text-oliv-07 border-oliv-07  py-1.5 px-4 rounded-4xl hover:text-white text-[18px] dm-mono-medium hover:bg-oliv-07 active:opacity-80 transition duration-300 ease-in-out cursor-pointer ml-8 '
                onClick={() => navigate('/orders')}>
                Orders
              </button>

              <Link to={'/checkOut'} className='ml-7 flex justify-center items-center relative cursor-pointer hover:opacity-60 transition duration-200 ease-in-out active:opacity-80'>
                <img src={cartImage} alt="cartImg"
                  width={73} height={70}
                >
                </img>
                <div className='absolute top-6 right-7.5 text-white text-[22px] font-bold'>
                  3
                </div>

                <div className='width-[73px] font-bold text-center text-oliv-07 text-[13px] absolute -bottom-1'>
                  Dishes
                </div>
              </Link>

            </>
          }


        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default Nav