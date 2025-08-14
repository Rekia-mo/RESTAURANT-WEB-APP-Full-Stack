import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <section className='flex justify-center items-center text-center h-screen'>
      <div className="form-box">
        <form className="form">
            <span className="title">Sign up</span>
            <span className="subtitle">Create a free account with your email.</span>

            <div className="form-container">

              <input onChange={()=>{}} type="text" className="input" placeholder="Full Name"/>

              <input type="email" className="input" placeholder="Email"/>

              <input type="password" className="input" placeholder="Password"/>

            </div>

            <button type="button">
              Sign up
            </button>

        </form>

        <div className="form-section">

          <p>
            Have an account? 
            <a>
              <Link to={'/logIn'}>
              Log in
              </Link>
            </a> 
            <a className='ml-10'>
              <Link to={'/'}>
                Back Home
              </Link>
            </a> 
          </p>
        </div>
      </div>
    </section>
  )
}

export default SignUp