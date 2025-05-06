import React from 'react'
import CodeForm from '../../../components/CodeForm'
import CodeResult from '../../../components/CodeResult'

const HTMLAdvanced = () => {
  return (
    <>
    
        {/* Meta tags */}
        <p className='font-bold text-xl'>{'</> Meta tags'}</p>
        {/* Unicode */}
        <p className='font-bold text-xl mt-5'>{'<> Unicode'}</p>
        <CodeForm 
            lang="html"
            code={`<meta charset="UTF-8">`}
        ></CodeForm>    


        {/* Responsive */}
        <p className='font-bold text-xl mt-15'>{'<> Responsive on mobile'}</p>
        <CodeForm 
            lang="html"
            code={`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
        ></CodeForm>  


        {/* Description */}
        <p className='font-bold text-xl mt-15'>{'<> Description view on google'}</p>
        <CodeForm 
            lang="html"
            code={`<meta name="description" content=" ">`}
        ></CodeForm> 



        {/* Connect with file.css and file.js */}
        <p className='font-bold text-xl mt-40'>{'</> Connect with file.css and file.js '}</p>
        {/* Connect with file.css */}
        <p className='font-bold text-xl mt-5'>{'<> Connect with file.css '}</p>
        <CodeForm 
            lang="html"
            code={`<link rel="stylesheet" href="">`}
        ></CodeForm> 


        {/* Connect with file.js */}
        <p className='font-bold text-xl mt-5'>{'<> Connect with file.js'}</p>
        <CodeForm 
            lang="html"
            code={`<script src=""></script>`}
        ></CodeForm> 


        {/* Favicon */}
        <p className='font-bold text-xl mt-40'>{'</> Favicon'}</p>
        <CodeForm 
            lang="html"
            code={`<link rel="icon" href=""></link>`}
        ></CodeForm>      



        {/* Entities */}
        <p className='font-bold text-xl mt-40'>{'</> Entities'}</p>
        {/* < */}
        <p className='font-bold text-xl mt-5'>{'<> Entity : " < "'}</p>
        <CodeForm 
            lang="html"
            code={`&lt;`}
        ></CodeForm>    
        <CodeResult>
            &lt;	
        </CodeResult>     


        <p className='font-bold text-xl mt-5'>{'<> Entity : " > "'}</p>
        <CodeForm 
            lang="html"
            code={`&gt;`}
        ></CodeForm>    
        <CodeResult>
            &gt;		
        </CodeResult>  


        <p className='font-bold text-xl mt-5'>{'<> Entity : " © "'}</p>
        <CodeForm 
            lang="html"
            code={`&copy;`}
        ></CodeForm>    
        <CodeResult>
            &copy;		
        </CodeResult>                  


    
    </>   
  )
}

export default HTMLAdvanced