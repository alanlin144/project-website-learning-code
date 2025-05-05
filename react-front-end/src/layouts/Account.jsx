import React from 'react'
import {Outlet, Link} from "react-router-dom";


const Account = () => {
  return (
    <>
        <div className='flex items-center justify-center w-screen h-screen bg-black'>
            <Link to='/' className='block fixed top-10 left-10 w-fit h-fit'>
                <img src='/logo.png' 
                    alt='logo' 
                    className='w-50 h-30'>
                </img>
            </Link>
            <Outlet/>
        </div>
    </>
  )
}

export default Account