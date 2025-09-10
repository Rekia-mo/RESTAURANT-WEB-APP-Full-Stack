import React, { useState } from 'react'
import MenuItemsCart from '../components/MenuItemsCart';
import { useEffect } from 'react';
import { Footer } from '../sections';
import { useNavigate } from 'react-router-dom';


function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const navigate = useNavigate();
  const [active, setActive] = useState(null);
  const [categorieId, setCategorieId] = useState("");
  const [categoriesArr, setCategoriesArr] = useState([{ name: "All", _id: null }]);
  const API_BASE_URL = categorieId ? `http://localhost:3000/api/menuItem/${categorieId}` : 'http://localhost:3000/api/menuItem';

  const fetchMenuItems = async () => {
    try {
      const token = localStorage.getItem('token');

      const API_OPTIONS = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          "x-auth-token": `Bearer ${token}`
        }
      };
      const response = await fetch(API_BASE_URL, API_OPTIONS);

      const data = await response.json();

      if (!response.ok) throw new Error('fail to fetch data');

      setMenuItems(data.menuItems);

    } catch (err) {

      console.log(err);

      if (err.message.includes("invalid token")) {
        // localStorage.removeItem("token");
        navigate('/signUp')
      }
    }
  }

  const fetchCategories = async () => {
    try {
      const token = localStorage.getItem('token');

      const API_OPTIONS = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          "x-auth-token": `Bearer ${token}`
        }
      };
      const response = await fetch('http://localhost:3000/api/categorie', API_OPTIONS);

      const data = await response.json();

      if (!response.ok) throw new Error('fail to fetch data');

      setCategoriesArr([{ name: "All", _id: null }, ...data]);


    } catch (err) {
      console.log(err);

      if (err.message.includes("invalid token")) {
        // localStorage.removeItem("token");
        navigate('/signUp')
      }
    }
  }

  useEffect(() => {
    fetchMenuItems();
  }, [categorieId]);

  useEffect(() => {
    fetchCategories();
  }, []);



  return (
    <>
      <section className='xl:px-30 max-xl:px-8 sm:py-20 py-12 flex flex-col justify-center items-center gap-2 max-sm:gap-5 mb-30'>
        <h1 className='playfair-display-400 text-center leading-none text-oliv-07 max-lg:text-[75px] max-sm:text-[60px] text-[90px]'>
          Our Menu
        </h1>

        <p className='text-[#495460] text-center'>
          We consider all the drivers of change gives you the components  <br /> you need to change to create a truly happens.
        </p>

        <div className='flex justify-center items-center gap-3 mt-6 flex-wrap'>
          {
            categoriesArr.map((categorie, i) => (
              <button
                key={categorie._id || i}
                onClick={() => {

                  setActive(i);

                  setCategorieId(categorie._id);
                }}
                className={`px-6 py-2  active:opacity-80 text-[13px] font-bold rounded-4xl transition duration-200 ease-in-out cursor-pointer ${(active === i) ? "bg-rouge-brick text-white border-none" : "text-black border-1 border-gray-300 hover:bg-[#DBDFD0]"}`}>
                {categorie.name}
              </button>
            ))
          }
        </div>

        <div className='grid grid-cols-4 gap-5 mt-10 max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:gap-10 '>
          {
            menuItems.map((item, _) => (
              <MenuItemsCart
                key={item._id}
                {...item}
              />
            ))
          }
        </div>
      </section>


      <section>
        <Footer />
      </section>
    </>
  )
}

export default Menu