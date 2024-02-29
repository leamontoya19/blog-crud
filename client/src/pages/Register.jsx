import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register= () => {
  //connecting with back: creating inputs
  const [inputs, setInputs] = useState ({
    username:"",
    email:"",
    password:"",
  })

// const [err, setError] = useState (null);

const navigate = useNavigate();

const handleChange = (e) =>{
  setInputs( (prev) => ({...prev, [e.target.username]: e.target.value}));
};

//SETTING THE ENDPOINT

const handleSubmit= async(e) => {
  e.preventDefault();
  try{
    // const res = 
    await axios.post("/auth/register", inputs);
    navigate("/login");

    // console.log(res)
  } catch (err){
    // console.log(err)
  // setError(err, response.data);
  }
}

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input 
        required type='text' 
        placeholder='username' 
        name='username' 
        onChange={handleChange}
        />
        <input 
        required 
        type='email' 
        placeholder='e-mail' 
        name='email' 
        onChange={handleChange}
        />
        <input 
        required 
        type='password' 
        placeholder='password' 
        name='password' 
        onChange={handleChange}
        />
        <button onClick={handleSubmit}>Register</button>
        {/* {err && <p>{err} </p>} */}
        <span>Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>

    </div>
  )
}

export default Register