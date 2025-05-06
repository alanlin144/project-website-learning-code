import React from 'react'
import CodeForm from '../../../components/CodeForm'
import CodeResult from '../../../components/CodeResult'

const HTMLMultimedia = () => {
  return (
    <>
      {/* Image */}
      <p className='font-bold text-xl'>{'<> Image'}</p>
      <CodeForm 
        lang  = "html"
        code = {`<img src="#" alt="alterlative">`}
      ></CodeForm>
      {/* Image result */}
      <CodeResult>
        <img src="#" alt="alterlative"/>
      </CodeResult> 


      {/* Video */}
      <p className='font-bold text-xl mt-15'>{'<> Video'}</p>
      <CodeForm 
        lang  = "html"
        code = {`<video src="#" controls ></video>`}
      ></CodeForm>
      {/* Video result */}
      <CodeResult>
        <video src="#" controls ></video>
      </CodeResult> 


      {/* Audio */}
      <p className='font-bold text-xl mt-15'>{'<> Audio'}</p>
      <CodeForm 
        lang  = "html"
        code = {`<audio src="#" controls></audio>`}
      ></CodeForm>
      {/* Audio result */}
      <CodeResult>
        <audio src="#" controls></audio>
      </CodeResult>       


      {/* Iframe */}
      <p className='font-bold text-xl mt-15'>{'<> Iframe'}</p>
      <CodeForm 
        lang  = "html"
        code = {`<iframe src="https://www.youtube.com/"></iframe>`}
      ></CodeForm>
      {/* Iframe result */}
      <CodeResult>
        <iframe src="https://www.youtube.com/"></iframe>
      </CodeResult>   


    </>
  )
}

export default HTMLMultimedia