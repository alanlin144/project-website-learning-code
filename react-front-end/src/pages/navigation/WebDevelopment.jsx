import React from 'react'
import { Outlet, Link } from "react-router-dom";

const WebDevelopment = () => {
  return (
    <main className='flex flex-row justify-end d w-screen h-fit min-h-300'>
        <div className='fixed left-0 w-15/100 h-full z-0 overflow-x-auto bg-blue-50'>
            <ul className='flex flex-col w-full h-full'>
                <li>
                    <Link to='internet' className='block w-full h-full text-xl pl-10 pt-3 pb-3 font-bold hover:bg-blue-400 rounded-[5px]'>
                        Internet
                    </Link>
                </li>
                <li>
                    <Link to='http' className='block w-full h-full text-xl pl-10 pt-3 pb-3 font-bold hover:bg-blue-400 rounded-[5px]'>
                        HTTP
                    </Link>
                </li>
                <li>
                    <Link to='dns' className='block w-full h-full text-xl pl-10 pt-3 pb-3 font-bold hover:bg-blue-400 rounded-[5px]'>
                        DNS
                    </Link>
                </li>                
                <li>
                    <Link to='hosting' className='block w-full h-full text-xl pl-10 pt-3 pb-3 font-bold hover:bg-blue-400 rounded-[5px]'>
                        Hosting
                    </Link>
                </li>                
                <li>
                    <Link to='browser' className='block w-full h-full text-xl pl-10 pt-3 pb-3 font-bold hover:bg-blue-400 rounded-[5px]'>
                        Browser
                    </Link>
                </li>
                <li>
                    <Link to='html-basic' className='block w-full h-full text-xl pl-10 pt-3 pb-3 font-bold hover:bg-blue-400 rounded-[5px]'>
                        HTML-Basic
                    </Link>
                </li>
                <li>
                    <Link to='html-basic' className='block w-full h-full text-xl pl-10 pt-3 pb-3 font-bold hover:bg-blue-400 rounded-[5px]'>
                        HTML-Basic
                    </Link>
                </li>
                <li>
                    <Link to='html-basic' className='block w-full h-full text-xl pl-10 pt-3 pb-3 font-bold hover:bg-blue-400 rounded-[5px]'>
                        HTML-Basic
                    </Link>
                </li>
                <li>
                    <Link to='html-basic' className='block w-full h-full text-xl pl-10 pt-3 pb-3 font-bold hover:bg-blue-400 rounded-[5px]'>
                        HTML-Basic
                    </Link>
                </li>
                <li>
                    <Link to='html-basic' className='block w-full h-full text-xl pl-10 pt-3 pb-3 font-bold hover:bg-blue-400 rounded-[5px]'>
                        HTML-Basic
                    </Link>
                </li>
                <li>
                    <Link to='html-basic' className='block w-full h-full text-xl pl-10 pt-3 pb-3 font-bold hover:bg-blue-400 rounded-[5px]'>
                        HTML-Basic
                    </Link>
                </li>
                <li>
                    <Link to='html-basic' className='block w-full h-full text-xl pl-10 pt-3 pb-3 font-bold hover:bg-blue-400 rounded-[5px]'>
                        HTML-Basic
                    </Link>
                </li>
                <li>
                    <Link to='html-basic' className='block w-full h-full text-xl pl-10 pt-3 pb-3 font-bold hover:bg-blue-400 rounded-[5px]'>
                        HTML-Basic
                    </Link>
                </li>
                <li>
                    <Link to='html-basic' className='block w-full h-full text-xl pl-10 pt-3 pb-3 font-bold hover:bg-blue-400 rounded-[5px]'>
                        HTML-Basic
                    </Link>
                </li>
                <li>
                    <Link to='html-basic' className='block w-full h-full text-xl pl-10 pt-3 pb-3 font-bold hover:bg-blue-400 rounded-[5px]'>
                        HTML-Basic
                    </Link>
                </li>
                <li>
                    <Link to='html-basic' className='block w-full h-full text-xl pl-10 pt-3 pb-3 font-bold hover:bg-blue-400 rounded-[5px]'>
                        HTML-Basic
                    </Link>
                </li>
                <li>
                    <Link to='html-basic' className='block w-full h-full text-xl pl-10 pt-3 pb-3 font-bold hover:bg-blue-400 rounded-[5px]'>
                        HTML-Basic
                    </Link>
                </li>
                <li>
                    <Link to='html-basic' className='block w-full h-full text-xl pl-10 pt-3 pb-3 font-bold hover:bg-blue-400 rounded-[5px]'>
                        HTML-Basic
                    </Link>
                </li>
                <li>
                    <Link to='html-basic' className='block w-full h-full text-xl pl-10 pt-3 pb-3 font-bold hover:bg-blue-400 rounded-[5px]'>
                        HTML-Basic
                    </Link>
                </li>
                <li>
                    <Link to='html-basic' className='block w-full h-full text-xl pl-10 pt-3 pb-3 font-bold hover:bg-blue-400 rounded-[5px]'>
                        HTML-Basic
                    </Link>
                </li>
                <li>
                    <Link to='html-basic' className='block w-full h-full text-xl pl-10 pt-3 pb-3 font-bold hover:bg-blue-400 rounded-[5px]'>
                        HTML-Basic
                    </Link>
                </li>
            </ul>
        </div>
        <div className='w-70/100 h-fit min-h-300 p-30'>
            <Outlet />
        </div>
        <div className='w-15/100 h-fit min-h-300 bg-gray-200'></div>
    </main>
  )
}

export default WebDevelopment