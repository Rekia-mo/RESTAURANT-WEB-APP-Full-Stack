import React from 'react'
import { Link } from 'react-router-dom';


function LogIn() {

  return (
    <section className='flex justify-center items-center text-center h-screen'>
      <div className="form-box">
        <form className="form">
            <span className="title">Log In</span>
            <span className="subtitle">Enter your Password and Email</span>
            <div className="form-container">
              <input type="email" className="input" placeholder="Email"/>
              <input type="password" className="input" placeholder="Password"/>
            </div>
            <button type="button">Log In</button>
        </form>
        <div className="form-section">
          <p>dont have an account? <a><Link to={'/signUp'}>Sign Up</Link></a>  <br />
          <a><Link to={'/'}>Back Home</Link></a> </p>
        </div>
      </div>
    </section>
  )
}

export default LogIn