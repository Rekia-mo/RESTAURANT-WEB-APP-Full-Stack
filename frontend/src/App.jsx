import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import './index.css';
import MainPg from './pages/MainPg';
import SignUp from './pages/SignUp';
import Menu from './pages/Menu';
import LogIn from './pages/LogIn'
import CheckOut  from './pages/CheckOut';
import Orders from './pages/Orders'; 


function App() {

  return (
    <>
      <Routes>
        <Route index element={<MainPg />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/checkOut' element={<CheckOut />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/logIn' element={<LogIn />} />
      </Routes>
    </>
  )
}

export default App
