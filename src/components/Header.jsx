import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Header() {
  const [pageState, setPageState] = useState("Sign in");
    const location = useLocation();
    console.log(location.pathname);
    const navigate = useNavigate();
    const auth = getAuth();
    useEffect(()=>{
      onAuthStateChanged(auth, (user)=>{
        if(user){
          setPageState("profile");
      } else {
        setPageState("Sign in");
      } 
      })
    }, [auth]);
    function pathMatchRoute(route){
       if (route === location.pathname){
           return true
       }
    }
    return (
        <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div>
            <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo" 
        className='h-5 cursor-pointer' 
        onClick={()=>navigate("/")}
        />
            </div>
      <div>
        <ul className='flex space-x-10'>
            <li className={`cursor-pointer py-3 text-sm font-semibold 
            text-gray-400  ${pathMatchRoute("/") && " border-b-[3px] text-black border-b-red-500"}`} 
              onClick={()=>navigate("/")}>Home</li>
            <li className={`cursor-pointer py-3 text-sm font-semibold 
            text-gray-400  
            ${pathMatchRoute("/Offers") && "border-b-[3px] text-black border-b-red-500"}`} 
              onClick={()=>navigate("/Offers")}>Offers</li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold 
              text-gray-400   
              ${pathMatchRoute("/profile") && "border-b-[3px] text-black border-b-red-500"}`}
              onClick={() => {
                if (pageState === "profile") {
                  navigate("/profile");
                } else {
                  navigate("/sign-in");
                }
              }}
            >
              {pageState}
            </li>
        </ul>
      </div>

        </header>
    </div>
  )
}
