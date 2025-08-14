import { useState } from 'react'
import './index.css';
import MainPg from './pages/MainPg';
import SignUp from './pages/SignUp';
import Nav from './components/Nav';
import {Route, Routes, Link} from 'react-router-dom';
import Menu from './pages/Menu';
import LogIn from './pages/LogIn'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Nav/>}>
          <Route index element={<MainPg/>}/>
          <Route path='/menu' element={<Menu/>}/>  
        </Route>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/logIn' element={<LogIn/>}/>
      </Routes>    
    </>
  )
}

export default App
