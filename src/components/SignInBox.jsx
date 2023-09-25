"use client";
import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import { AiFillApple } from 'react-icons/ai'

const SignIn = () => {
  return (
    <div className='w-auto h-full -mt-4 '>
      <div className='font-montserrat font-bold text-4xl leading-[44px] text-white lg:text-black'>
        Sign In
      </div>
      <div className="font-Lato font-normal text-base leading-[19px] mt-2 text-white lg:text-black">Sign in to your account</div>

      <div className='flex flex-col lg:flex-row mt-8 items-center justify-between gap-2'>
        <div className='flex w-full lg:w-auto px-5 py-2 bg-white font-normal text-xs text-[#858585] font-montserrat rounded-xl items-center justify-around'><FcGoogle className='mr-3' size={20} /> <span className='mr-2'> Sign in with Google</span></div>
        <div className='flex w-full lg:w-auto px-4 py-2 bg-white font-normal text-xs text-[#858585] font-montserrat rounded-xl items-center justify-around'><AiFillApple className='mr-3' size={20}/> <span className='mr-2'>Sign in with Apple</span> </div>
      </div>

      <form className='bg-white w-[80vw] lg:w-full rounded-xl mt-4 lg:mt-8 pb-10 lg:pb-0 p-4 relative'>
        <div className="mb-6">
          <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Email Address</label>
          <input type="email" id="email" className="bg-[#F5F5F5] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
        </div>
        <div className="mb-6">
          <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
          <input type="password" id="password" className="bg-[#F5F5F5] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required/>
        </div>
        <div className="flex items-start mb-6">
          <label for="remember" className="ml-2 text-sm font-medium text-blue-500">Forgot password?</label>
        </div>
        <button type="submit" className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Submit</button>
      </form>
      <div className='absolute bottom-2 lg:-bottom-8 left-8 lg:left-10'>
          <div className='text-sm lg:text-base'>Don&apos;t have an account? <span className='text-[#346BD4] cursor-pointer'>Register here</span></div>
      </div>
    </div>
  )
}

export default SignIn
