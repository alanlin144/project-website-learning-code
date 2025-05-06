import React from 'react'
import CodeForm from '../../../components/CodeForm'
import CodeResult from '../../../components/CodeResult'

const HTMLAttribute = () => {
  return (
    <>
    
        {/* General attribute */}
        <p className='font-bold text-xl'>{'</> General attribute'}</p>

        {/* Id */}
        <p className='font-bold text-xl mt-5'>{'<> Id'}</p>
        <CodeForm 
            lang="html"
            code={`<div id="id_name"></div>`}
        ></CodeForm>


        {/* Class */}
        <p className='font-bold text-xl mt-15'>{'<> Class'}</p>
        <CodeForm 
            lang="html"
            code={`<div class="class_name"></div>`}
        ></CodeForm>


        {/* Style */}
        <p className='font-bold text-xl mt-15'>{'<> Style'}</p>
        <CodeForm 
            lang="html"
            code={`<div style=" "></div>`}
        ></CodeForm>


        {/* Title */}
        <p className='font-bold text-xl mt-15'>{'<> Title'}</p>
        <CodeForm 
            lang="html"
            code={`<div title="title"></div>`}
        ></CodeForm>
        <CodeResult>
            <div title='title' className='flex items-center justify-center w-fit h-20 pl-10 pr-10 border-1'>Move your mouse here</div>
        </CodeResult>


        {/* Language */}
        <p className='font-bold text-xl mt-15'>{'<> Language'}</p>
        <CodeForm 
            lang="html"
            code={`<html lang="en">

</html>`}
        ></CodeForm>


        {/* Event attribute */}
        <p className='font-bold text-xl mt-40'>{'</> Event attribute'}</p>


        {/* Onclick */}
        <p className='font-bold text-xl mt-5'>{'<> Onclick'}</p>
        <CodeForm 
            lang="html"
            code={`<div onclick="code_js"></div>`}
        ></CodeForm>
        <CodeResult>
            <div onClick={() => alert('You clicked !')} className='flex items-center justify-center w-fit h-20 pl-10 pr-10 border-1'>Click here</div>
        </CodeResult>


        {/* Onchange */}
        <p className='font-bold text-xl mt-5'>{'<> Onchange'}</p>
        <CodeForm 
            lang="html"
            code={`<input type="text" onchange="code_js"/>`}
        ></CodeForm>
        <CodeResult>
            <input type="text" placeholder='text' onChange={() => alert('You have changed the content !')} className='border-1 rounded-[4px]'/>
        </CodeResult>


        {/* Onmouseover */}
        <p className='font-bold text-xl mt-5'>{'<> Onmouseover'}</p>
        <CodeForm 
            lang="html"
            code={`<div onmouseover="code_js"></div>`}
        ></CodeForm>
        <CodeResult>
            <div onMouseOver={() => alert('Your mouse here !')} className='flex items-center justify-center w-fit h-20 pl-10 pr-10 border-1'>Move your mouse here</div>
        </CodeResult>                      


        
    </>
  )
}

export default HTMLAttribute