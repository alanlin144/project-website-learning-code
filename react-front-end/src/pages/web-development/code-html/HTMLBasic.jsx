import React from 'react';
import CodeForm from '../../../components/CodeForm';
import CodeResult from '../../../components/CodeResult';

const HTMLBasic = () => {
  return (
    <>
      {/* basic structure */}
      <p className='font-bold text-xl'>{'</> Basic structure of a file.html'}</p>
      <CodeForm 
              lang  = "html"
              code = 
{`<!DOCTYPE html>
<html>
  <head>...</head>
  <body>...</body>
</html>`}>
      </CodeForm>


      {/* tag <h1> to <h6> */}
      <p className='font-bold text-xl mt-15'>{'</> Basic tags of HTML'}</p>
      <p className='text-xl mt-5'>{'<> title tag : from <h1> to <h6>'}</p>
      <CodeForm 
              lang  = "html"
              code = 
{`<h1>heading 1</h1>
<h2>heading 2</h2>
<h3>heading 3</h3>
<h4>heading 4</h4>
<h5>heading 5</h5>
<h6>heading 6</h6>`}
      ></CodeForm>


      {/* tag <p> */}
      <p className='text-xl mt-5'>{'<> passage tag : <p>'}</p>
      <CodeForm
        lang  = "html"
        code = {`<p>passage</p>`}
      ></CodeForm>


      {/* tag <hr> */}
      <p className='text-xl mt-5'>{'<> Horizontal line tag : <hr>'}</p>
      <CodeForm 
        lang  = "html"
        code = {`<hr>`}
      ></CodeForm>


      <p className='text-xl mt-5'>{'<> Break tag : <br>'}</p>
      <CodeForm 
        lang  = "html"
        code = {`<br>`}
      ></CodeForm>

      <CodeResult>
        <video src='' controls></video>
      </CodeResult>

    </>
  )
}

export default HTMLBasic