import React from 'react'
import { Link } from 'react-router-dom'

const SigUp = () => {
  return (
    <form action='/sig-up' method='post' className='w-150 h-150 pt-5 pl-23 pr-20 bg-white rounded-4xl'>
        <fieldset className='flex flex-col'>
            <legend className='text-center text-5xl font-bold'>Sig Up</legend>

            <label for="username" className='w-fit mt-20 font-bold hover:cursor-pointer'>Username</label>
            <input type="text" id="username" name="username" required className='w-100 h-12 pl-5 rounded-2xl bg-gray-600 text-white' />

            <label for="password" className='w-fit mt-5 font-bold hover:cursor-pointer'>Password</label>
            <input type="password" id="password" name="password" required className='w-100 h-12 pl-5 rounded-2xl bg-gray-600 text-white' />

            <label for="confirm" className='w-fit mt-5 font-bold hover:cursor-pointer'>Confirm</label>
            <input type="password" id="confirm" name="confirm" required className='w-100 h-12 pl-5 rounded-2xl bg-gray-600 text-white' />

            <div className='flex flex-row w-100 h-12 mt-15'>
              <button type="submit" className='flex items-center justify-center w-1/2 h-full bg-gray-600 border-r-1 rounded-l-2xl text-white font-bold text-xl hover:bg-gray-900 hover:cursor-pointer'>Sig Up</button>
              <Link to='/account-sig-in' className='flex items-center justify-center w-1/2 h-full bg-gray-600 border-l-1 rounded-r-2xl text-white font-bold text-xl hover:bg-gray-900'>Sig In</Link>
            </div>
        </fieldset>
    </form>
  )
}

export default SigUp