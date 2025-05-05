import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='flex flex-row sticky top-0 w-screen h-15 bg-black z-2'>

        {/* Logo */}
        <div className='flex justify-center w-1/10 h-full'>
            <Link to='/' className='block w-fit h-full'>
                <img src='/logo.png' 
                    alt='logo' 
                    className='w-20 h-full'>
                </img>
            </Link>
        </div>

        {/* Navigation */}
        <nav className='w-8/10 h-full'>
            <ul className='flex flex-row w-full h-full'>
                <li className='block w-fit h-full'> 
                    <Link to='/' className='block pl-10 pr-10 pt-4 w-full h-full text-xl text-white font-bold hover:bg-white hover:text-black hover:rounded-[5px]'>
                        Home
                    </Link>
                </li>
                <li className='block w-fit h-full'> 
                    <Link to='./machine-learning' className='block pl-10 pr-10 pt-4 w-full h-full text-xl text-white font-bold hover:bg-white hover:text-black hover:rounded-[5px]'>
                        Machine Learning
                    </Link>
                </li>
                <li className='block w-fit h-full'> 
                    <Link to='./deep-learning' className='block pl-10 pr-10 pt-4 w-full h-full text-xl text-white font-bold hover:bg-white hover:text-black hover:rounded-[5px]'>
                        Deep Learning
                    </Link>
                </li>
                <li className='block w-fit h-full'> 
                    <Link to='/web-development' className='block pl-10 pr-10 pt-4 w-full h-full text-xl text-white font-bold hover:bg-white hover:text-black hover:rounded-[5px]'>
                        Web Development
                    </Link>
                </li>
            </ul>
        </nav>
        
        {/* Sign in */}
        <div className='flex items-center justify-center w-1/10 h-full'>
            <Link to='/account-sig-in' className='block pl-5 pr-5 pt-4 w-fit h-full text-xl text-white font-bold hover:bg-white hover:text-black hover:rounded-[10px]'>
                Sign In
            </Link>
        </div>
    </header>
  )
}

export default Header