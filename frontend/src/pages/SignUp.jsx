import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = 'http://localhost:3000/api/user';


function SignUp() {

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handelName(e){
    setName(e.target.value);
  }

  function handelEmail(e){
    setEmail(e.target.value);
  }

  function handelPasword(e){
    setPassword(e.target.value);
  }

  const handelSignUp = async(name, email, password)=>{
    try{
      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers:{
          "Content-Type": "application/json",
          accept:'application/json'
        },
        body:JSON.stringify({ name, email, password }) 
      });

      const data = await response.json();

      if(!response.ok) {
        alert(response|| 'log in faild');
        throw new Error(response);
      }
      
      localStorage.setItem("token", data.token);
      
      navigate('/menu')
    }catch(err){
      console.log(err);
    }
  }

  return (
    <section className='flex justify-center items-center text-center h-screen'>
      <div className="form-box">
        <form className="form">
            <span className="title">Sign up</span>
            <span className="subtitle">Create a free account with your email.</span>

            <div className="form-container">

              <input onChange={handelName} type="text" className="input" placeholder="Full Name" name="name" autoComplete="name"/>

              <input type="email" onChange={handelEmail} className="input" placeholder="Email" name="email" autoComplete="email"/>

              <input type="password" onChange={handelPasword} className="input" placeholder="Password" name="password"  autoComplete="new-password" />

            </div>

            <button 
            type="button"
            onClick={()=>{handelSignUp(name, email, password);
            }}>
              Sign up
            </button>

        </form>

        <div className="form-section">

          <p>
            Have an account? 
            <span><Link to={'/logIn'}>
              Log in
            </Link></span>

            <span className='ml-10'><Link to={'/'}>
                Back Home
            </Link></span> 
          </p>
        </div>
      </div>
    </section>
  )
}

export default SignUp