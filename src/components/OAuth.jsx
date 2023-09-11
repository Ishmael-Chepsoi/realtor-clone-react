import {FcGoogle} from 'react-icons/fc'
import React from 'react'

export default function OAuth() {
  return (
    <div>
      <button className='flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 text-sm hover:bg-red-800 active:bg-red-800 shadow-lg transition duration-150 ease-in-out rounded'>
      <FcGoogle className='text-2xl bg-white rounded-full mr-2' />continue with google
      </button>
    </div>
  )
}
