import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
  const[isSignInForm , setIsSignInForm]=useState(true);
   const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm);
   };
  return (
    <div>
      <Header/>
      <div className='absolute'>
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_medium.jpg" alt='background'/>
    </div> 
    <form className= 'absolute bg-black w-3/12  p-12 my-44 mx-auto left-0 right-0 bg-opacity-80  rounded-lg'>
    <h1 className='font-bold text-white text-3xl py-4'>{isSignInForm?"Sign In":"Register"} </h1>
     {!isSignInForm&&(<input type='text' placeholder='Full Name'  className='p-2 my-4 w-full bg-gray-700'/>)}
 {!isSignInForm && (<input type='text' maxlength="10" placeholder='Mobile Number' className='p-2 my-4 w-full bg-gray-700'/>)}
      <input type='text' placeholder='Email Address' className='p-2 my-4 w-full bg-gray-700 '/>
      <input type='password' placeholder='Password'  className='p-2 my-4 w-full bg-gray-700'/> 
      <button className='p-2 my-2 bg-red-700 text-white w-full rounded-lg'>{isSignInForm?"Sign In":"Register"}</button>
      <p className='text-white cursor-pointer underline' onClick={toggleSignInForm}>{isSignInForm?"New to Netflix ? Register Now":"Already a User, Sign In Now"}</p>
    </form> 
 
    </div>
  )
}

export default Login;
