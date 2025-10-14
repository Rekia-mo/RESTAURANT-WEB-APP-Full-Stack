import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Order from '../components/Order';

function Orders({ cart }) {

  const [orders, setOrders] = useState([]);
  const API_BASE_URL = 'http://localhost:3000/api/order';

  const fetchOrders = async () => {
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
      console.log(data);

      if (!response.ok) throw new Error('fail to fetch data');

      setOrders(data.orders);

    } catch (err) {

      console.log(err);

      if (err.message.includes("invalid token")) {
        navigate('/signUp')
      }
    }
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <>
      <Nav cart={cart} />
      <section className='relative overflow-auto scrollbar-hide scroll-smooth  xl:px-60 max-xl:px-8  py-12 flex flex-col justify-center gap-8 max-sm:gap-15  '>

        <h1 className='playfair-display-400 text-center leading-none text-oliv-07 max-lg:text-[50px] max-sm:text-[60px] text-[60px]'>
          Orders
        </h1>

        <p className='playfair-display-400 font-bold text-3xl text-oliv-07 mb-0 '>
          Your Orders
        </p>

        <div className='flex flex-col justify-center items-start gap-12'>
          {
            orders&&orders.map((order)=>(
              <Order key={order._id} {...order}/>
            ))
          }

        </div>

      </section>
    </>
  )
}

export default Orders