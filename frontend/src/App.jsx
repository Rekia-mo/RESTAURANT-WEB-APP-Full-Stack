import { useState, useEffect } from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import './index.css';
import MainPg from './pages/MainPg';
import SignUp from './pages/SignUp';
import Menu from './pages/Menu';
import LogIn from './pages/LogIn'
import CheckOut from './pages/CheckOut';
import Orders from './pages/Orders';


function App() {
  const [cart, setCart] = useState(null);
  const API_BASE_URL = 'http://localhost:3000/api/cart';


  const loadCart = async () => {
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

      setCart(data.cart);



    } catch (err) {

      console.log(err);

      if (err.message.includes("invalid token")) {
        navigate('/signUp')
      }
    }
  }

  useEffect(() => {
    loadCart();
  }, [])

  return (
    <>
      <Routes>
        <Route index element={<MainPg />} />
        <Route path='/menu' element={<Menu cart={cart}/>} />
        <Route path='/checkOut' element={<CheckOut cart={cart}/>} />
        <Route path='/orders' element={<Orders cart={cart}/>} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/logIn' element={<LogIn />} />
      </Routes>
    </>
  )
}

export default App
