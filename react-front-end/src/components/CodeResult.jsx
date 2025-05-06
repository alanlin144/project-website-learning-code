import React from 'react'

const CodeResult = ({children}) => {
  return (
    <div className='w-200 h-fit p-4 border-2 border-gray-500 rounded-[5px] text-black bg-white'>
        {children}
    </div>
  )
}

export default CodeResult