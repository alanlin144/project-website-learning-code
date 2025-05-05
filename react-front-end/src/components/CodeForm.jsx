import React from 'react'

const CodeForm = ({ lang, code }) => {
  return (
    <figure className='flex flex-col w-200 h-fit mt-5 mb-5 bg-white text-black rounded-xl'>
        <div className='flex flex-row w-full h-12 rounded-t-xl bg-gray-500'>
            <div className='block w-fit h-full pl-5 pt-3 font-bold text-xl'>{lang}</div>
            {/* <a href='#' className='ml-auto w-fit h-fit mt-3 mr-5 font-bold text-xl'>copy</a> */}
        </div>
        <pre >
            <code className='block w-full h-fit p-4 border-2 rounded-b-xl font-bold border-gray-500'>
                {code}
            </code>
        </pre>
    </figure>
  )
}

export default CodeForm