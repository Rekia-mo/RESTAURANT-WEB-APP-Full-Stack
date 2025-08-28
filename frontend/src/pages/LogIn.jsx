import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = 'http://localhost:3000/api/log'

function LogIn() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

  function handelEmail(e){
    setEmail(e.target.value);
  }

  function handelPasword(e){
    setPassword(e.target.value);
  }

  const handelLogin = async(email, password)=>{
    try{
      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers:{
          "Content-Type": "application/json",
          accept:'application/json'
        },
        body:JSON.stringify({email, password }) 
      });

      const data = await response.json();

      if(!response.ok) {
        setErr(data.message);
        throw new Error('faid to log in');
      }
      
      localStorage.setItem("token", data.token);
      navigate('/menu');
      
    }catch(err){
      console.log(err);
    }
  }

 

  return (
    <section className='flex justify-center items-center text-center h-screen'>
      <div className="form-box">


        <form className="form">
            <span className="title">
              Log In
            </span>

            <span className="subtitle">
              Enter your Password and Email
            </span>

            <div className="form-container">

              <input type="email" onChange={handelEmail} className="input" placeholder="Email" name="email" autoComplete="email" />

              <input type="password" onChange={handelPasword} className="input" placeholder="Password" name="password" autoComplete="current-password"/>

            </div>

            <p className='text-rouge-brick font-semibold text-[12px]'>
              {err}
            </p>

            <button onClick={()=>{
                handelLogin(email, password);
              }
            } 
            type="button">
              Log In
            </button>
        </form>

        <div className="form-section">

          <p>
            dont have an account? <span><Link to={'/signUp'}>Sign Up</Link></span>  <br />
            <span><Link to={'/'}>Back Home</Link></span> 
          </p>
        </div>

      </div>
    </section>
  )
}

export default LogIn