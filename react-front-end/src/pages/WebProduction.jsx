import React from 'react'
import { Outlet, Link } from "react-router-dom";

const WebProduction = () => {
  return (
    <main className='flex flex-row d w-screen h-fit min-h-200'>
        <div className='fixed left-0 w-15/100 h-full z-0 bg-blue-50'>
            <ul className='flex flex-col w-full h-full'>
                <li className='text-center'>
                    <Link to='internet' className='block w-full h-full text-xl font-bold hover:bg-blue-400 rounded-[5px]'>
                        Internet
                    </Link>
                </li>
                <li className='text-center'>
                    <Link to='http' className='block w-full h-full text-xl font-bold hover:bg-blue-400 rounded-[5px]'>
                        HTTP
                    </Link>
                </li>
                <li className='text-center'>
                    <Link to='dns' className='block w-full h-full text-xl font-bold hover:bg-blue-400 rounded-[5px]'>
                        DNS
                    </Link>
                </li>                <li className='text-center'>
                    <Link to='hosting' className='block w-full h-full text-xl font-bold hover:bg-blue-400 rounded-[5px]'>
                        Hosting
                    </Link>
                </li>                <li className='text-center'>
                    <Link to='browser' className='block w-full h-full text-xl font-bold hover:bg-blue-400 rounded-[5px]'>
                        Browser
                    </Link>
                </li>
            </ul>
        </div>
        <div className='w-15/100 h-fit'></div>
        <div className='w-70/100 h-fit p-10'>
            <Outlet />
        </div>
        <div className='w-15/100 h-fit bg-blue-50'></div>
    </main>
  )
}

export default WebProduction