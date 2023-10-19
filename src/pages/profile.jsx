import { getAuth, updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {db} from '../firebase'
import { doc} from 'firebase/firestore';
import {FcHome} from "react-icons/fc"
// import { icons } from 'react-icons';
export default function Profile() {
  const [changeDetails, setChangeDetails] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email:auth.currentUser.email,
  });
  const {name, email} = formData

  function onLogout (){
    auth.signOut();
    navigate("/")
  }

  function onChange(e) {
    setFormData((prevState)=> ({...prevState,
      [e.target.id]: e.target.value,
    }))
  }
 async function onSubmit(){
    try {
      if (auth.currentUser.displayName !== name){
        //udate display name in firebase authentification
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        //update name in the firestore

        const docRef = doc(db, "users", auth.currentUser.uid);
        await updateProfile(docRef, {
          name,
        })
      }
      toast.success("profile Details updated")
    } catch (error) {
      toast.error("Could not update the profile details");
    }
  }
  return (
    <section className='max-w-6xl mx-auto flex justify-center items-center
    flex-col'>
      <h1 className='text-3xl text-center mt-6'>My Profile</h1>
      <div className='w-full md:w-[50%] mt-6 px-3'>
        <form action="">
          {/* Name Inputs  */}
          <input type="text" id='name' value={name}
            disabled={!changeDetails}
            onChange={onChange}
          className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300
          rounded transition ease-in-out ${changeDetails && "bg-red-200 focus:bg-red-200"}`} />

          {/* Email Input */}
          <input type="email" id='email' value={email}
          disabled={!changeDetails}
          onChange={onChange}
          className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300
          rounded transition ease-in-out' />

          <div className='flex justify-between whitespace-nowrap first-letter:text-sm sm:text-lg'>
            <p className='flex items-center mb-6'>Do you want to change your name? 
              <span onClick={()=>{//{()=>} should be included to prevent an infinite loop
                changeDetails && onSubmit();
                setChangeDetails((prevState) => !prevState)} 
              }
               className='text-red-600 hover:text-red-700 transition 
              first-letter:ease-out duration-200 ml-l cursor-pointer'> 
              {changeDetails ? "Apply Change": "Edit"}
              </span>
            </p>
            <p onClick={onLogout} className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out
            cursor-pointer'>sign out</p>
          </div>
        </form>
        <button type='submit' className='w-full bg-blue-600
        text-white uppercase px-7 py-3 text-sm font-medium
        rounded shadow-md hover:bg-blue-700 transition duration-150
        ease-in-out hover:shadow-lg active:bg-blue-800'>
          <Link to="/create-listing" className='flex
          justify-center items-center'>
            <FcHome className='mr-2 text-3xl bg-red-200
            rounded-full p-1 border-2'/>
            Sell or rent your home
          </Link>

        </button>
      </div>
    </section>
  )
}
