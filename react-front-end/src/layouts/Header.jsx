import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='flex flex-row sticky top-0 w-screen h-15 bg-blue-100'>

        {/* Logo */}
        <div className='flex items-center justify-center w-1/10 h-full'>
            <Link to='/' className='block w-fit h-fit'>
                <img src='./public/vite.svg' alt='logo' className='w-10 h-10'></img>
            </Link>
        </div>

        {/* Navigation */}
        <nav className='w-8/10 h-full'>
            <ul className='flex flex-row w-full h-full'>
                <li className='block w-fit h-full'> 
                    <Link to='/' className='block pl-10 pr-10 pt-4 w-full h-full text-xl font-bold hover:bg-blue-400 rounded-[5px]'>
                        Home
                    </Link>
                </li>
                <li className='block w-fit h-full'> 
                    <a href='./machine-learning' className='block pl-10 pr-10 pt-4 w-full h-full text-xl font-bold hover:bg-blue-400 rounded-[5px]'>
                        Machine Learning
                    </a>
                </li>
                <li className='block w-fit h-full'> 
                    <a href='./deep-learning' className='block pl-10 pr-10 pt-4 w-full h-full text-xl font-bold hover:bg-blue-400 rounded-[5px]'>
                        Deep Learning
                    </a>
                </li>
                <li className='block w-fit h-full'> 
                    <Link to='/web-production' className='block pl-10 pr-10 pt-4 w-full h-full text-xl font-bold hover:bg-blue-400 rounded-[5px]'>
                        Web Production
                    </Link>
                </li>
            </ul>
        </nav>
        
        {/* Sign in */}
        <div className='flex items-center justify-center w-1/10 h-full'>
            <a href='./sign-in' className='text-xl font-bold hover:bg-blue-400 rounded-[5px]'>Sign in</a>
        </div>
    </header>
  )
}

export default Header