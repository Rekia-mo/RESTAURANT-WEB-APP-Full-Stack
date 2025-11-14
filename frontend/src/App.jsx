import { useState, useEffect } from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import './index.css';
import MainPg from './pages/MainPg';
import SignUp from './pages/SignUp';
import Menu from './pages/Menu';
import LogIn from './pages/LogIn'
import CheckOut from './pages/CheckOut';
import Orders from './pages/Orders';
import Page from './app/dashboard/Page';
import ProtectedRoute from './components/ProtectedRoute';
import { useNavigate } from 'react-router-dom';
import NavOrders from './admin/pages/NavOrdes';
import NavMenu from './admin/pages/NavMenu';
import NavUsers from './admin/pages/NavUsers';


function App() {
  const [cart, setCart] = useState(null);

  const loadCart = async () => {
    try {
      const API_BASE_URL = 'http://localhost:3000/api/cart';
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
      console.error("Error loading cart:", err.message);

      alert("Something went wrong while loading your cart. Please try again.");
    }
  }


  const addToCart = async (id) => {
    try {
      const API_BASE_URL = `http://localhost:3000/api/cart`;
      const token = localStorage.getItem('token');

      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": `Bearer ${token}`,
          accept: 'application/json'
        },
        body: JSON.stringify({ menuItemId: id, quantity: 1 })
      });

      if (!response.ok) throw new Error('faid to log in');

      loadCart();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Routes>
        <Route index element={<MainPg />} />
        <Route path='/menu' element={<Menu cart={cart} loadCart={loadCart} addToCart={addToCart} />} />
        <Route path='/checkOut' element={<CheckOut cart={cart} loadCart={loadCart} />} />
        <Route path='/orders' element={<Orders cart={cart} addToCart={addToCart} />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/logIn' element={<LogIn />} />
        <Route
          path='/DashBoard'
          element={
            <ProtectedRoute>
              <Page />
            </ProtectedRoute>
          }>
            <Route path='orders' element={<NavOrders/>}/>
            <Route path='menu' element={<NavMenu/>}/>
            <Route path='users' element={<NavUsers/>}/>
          </Route>
      </Routes>
    </>
  )
}

export default App
