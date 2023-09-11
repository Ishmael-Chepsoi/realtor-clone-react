import React from 'react'
import {AiFillEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';

export default function Signup() {
  const [showPassword, setShowpassword] = useState(false) 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const {name, email, password } = formData;
  function onChange(e) {
    setFormData((prevState) => ({...prevState,
      [e.target.id]: e.target.value}))
  }
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Sign up</h1>
      <div className='flex justify-center flex-wrap
       items-center px-6 py-12 max-6xl mx-auto'>

        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80" alt="Key" 
          className='w-full rounded-2xl'/>
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form action="" >
          <input type="name" name="" id="name"
             value={name} onChange={onChange}
             placeholder='full name'
             className='w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white
             border-gray-300
             rounded transition ease-out'/>
            <input type="email" name="" id="email"
             value={email} onChange={onChange}
             placeholder='email address'
             className='w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white
             border-gray-300
             rounded transition ease-out'/>
             <div className='relative mb-6'>
              <input type={showPassword ? "text" : "password"} name="" id="password"
              value={password} onChange={onChange}
              placeholder='password'
              className='w-full px-4 py-2 text-xl text-gray-700 bg-white
              border-gray-300
              rounded transition ease-out'/>
              {showPassword ? (
                <AiOutlineEyeInvisible className='absolute right-3 top-3 text-xl cursor-pointer' 
                onClick={() => setShowpassword
                ((prevState) => !prevState)}/>
              ): (<AiFillEye className='absolute right-3 top-3 text-xl cursor-pointer mb-6' 
                  onClick={() => setShowpassword
                ((prevState) => !prevState)}/>)}             
             </div>
             <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
              <p className='mb-6'>Have an account? 
                <Link to ="/sign-in" className='text-red-600 hover:text-red-700
                transition duration-200 ease-in-out ml-1'>sign in</Link>
              </p>
              <p>
                <Link to="/forgot-password" className='text-blue-600 hover:text-blue-800
                transition duration-200 ease-in-out ml-1'>Forgot password?</Link>
              </p>
             </div>
             <button className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800' type='submit'>
            sign up
          </button>
         
          </form>
          <div className= "my-4 items-center flex before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
            <p className='text-center font-semibold mx-4'>OR</p>
          </div>
          <OAuth />
        </div>
      </div>
    </section>
  )
}
