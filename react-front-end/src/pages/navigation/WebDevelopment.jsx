import React from 'react'
import { Outlet, Link } from "react-router-dom";

const WebDevelopment = () => {
  return (
    <main className='flex flex-row w-screen h-fit min-h-screen'>
        <div className='fixed left-0 w-15/100 h-fit min-h-screen z-0 overflow-x-auto bg-black'>
            <ul className='flex flex-col pt-10 pb-10'>

                {/* HTML */}
                <span className='w-full h-full text-xl pl-10 pt-3 pb-3 text-white font-bold'>{'</> HTML'}</span>
                <li>
                    <Link to='html-history' className='block w-full h-full text-xl pl-10 pt-3 pb-3 text-white font-bold hover:bg-white hover:text-black'>
                        - History
                    </Link>
                </li>                
                <li>
                    <Link to='html-basic' className='block w-full h-full text-xl pl-10 pt-3 pb-3 text-white font-bold hover:bg-white hover:text-black'>
                        - Basic
                    </Link>
                </li>
                <li>
                    <Link to='html-form' className='block w-full h-full text-xl pl-10 pt-3 pb-3 text-white font-bold hover:bg-white hover:text-black'>
                        - Form
                    </Link>
                </li>      
                <li>
                    <Link to='html-multimedia' className='block w-full h-full text-xl pl-10 pt-3 pb-3 text-white font-bold hover:bg-white hover:text-black'>
                        - Multimedia
                    </Link>
                </li>                   
                <li>
                    <Link to='html-semantic' className='block w-full h-full text-xl pl-10 pt-3 pb-3 text-white font-bold hover:bg-white hover:text-black'>
                        - Semantic
                    </Link>
                </li>                                         
                <li>
                    <Link to='html-attribute' className='block w-full h-full text-xl pl-10 pt-3 pb-3 text-white font-bold hover:bg-white hover:text-black'>
                        - Attribute
                    </Link>
                </li>  
                <li>
                    <Link to='html-advanced' className='block w-full h-full text-xl pl-10 pt-3 pb-3 text-white font-bold hover:bg-white hover:text-black'>
                        - Advanced
                    </Link>
                </li> 

                {/* CSS*/}
                <span className='w-full h-full text-xl mt-10 pl-10 pt-3 pb-3 text-white font-bold'>{'</> CSS'}</span>
            </ul>
        </div>


        <div className='fixed right-0 w-15/100 h-screen'>
            <img src='/src/assets/images/rocket.png' 
                alt='rocket' 
                className='w-full h-full'>
            </img>
        </div>



        <div className='w-15/100 h-fit min-h-screen'></div>
        <div className='w-70/100 h-fit min-h-screen pt-30 pl-50 pb-30 bg-black text-white tracking-wide leading-loose'>
            <Outlet />
        </div>
        <div className='w-15/100 h-fit min-h-screen'></div>
    </main>
  )
}

export default WebDevelopment