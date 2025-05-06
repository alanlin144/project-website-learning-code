import React from 'react';
import CodeForm from '../../../components/CodeForm';
import CodeResult from '../../../components/CodeResult';

const HTMLBasic = () => {
  return (
    <>
      {/* Basic structure */}
      <p className='font-bold text-xl'>{'<> Basic structure of a file.html'}</p>
      <CodeForm 
              lang  = "html"
              code = 
{`<!DOCTYPE html>
<html>
  <head>...</head>
  <body>...</body>
</html>`}>
      </CodeForm>


      {/* Heading tag <h1> to <h6> */}
      <p className='font-bold text-xl mt-15'>{'<> Title tag : from <h1> to <h6>'}</p>
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


      {/* Passage tag <p> */}
      <p className='font-bold text-xl mt-15'>{'<> Passage tag : <p>'}</p>
      <CodeForm
        lang  = "html"
        code = {`<p>text</p>`}
      ></CodeForm>


      {/* Horizontal tag <hr> */}
      <p className='font-bold text-xl mt-15'>{'<> Horizontal line tag : <hr>'}</p>
      <CodeForm 
        lang  = "html"
        code = {`<hr>`}
      ></CodeForm>


      {/* break tag <br> */}
      <p className='font-bold text-xl mt-15'>{'<> Break tag : <br>'}</p>
      <CodeForm 
        lang  = "html"
        code = {`<br>`}
      ></CodeForm>


      {/* Division tag <div> */}
      <p className='font-bold text-xl mt-15'>{'<> Division tag : <div>'}</p>
      <CodeForm
        lang  = "html"
        code = {`<div></div>`}
      ></CodeForm>    


      {/* Span tag <span> */}
      <p className='font-bold text-xl mt-15'>{'<> Span tag : <span>'}</p>
      <CodeForm
        lang  = "html"
        code = {`<span></span>`}
      ></CodeForm>         


      {/* Bold tag <br> */}
      <p className='font-bold text-xl mt-15'>{'<> Bold tag : <strong>'}</p>
      <CodeForm 
        lang  = "html"
        code = {`<strong>text</strong>`}
      ></CodeForm>
      {/* Bold tag result */}
      <CodeResult>
        <strong>text</strong>
      </CodeResult>


      {/* Emphasis tag <br> */}
      <p className='font-bold text-xl mt-15'>{'<> Emphasis tag : <em>'}</p>
      <CodeForm 
        lang  = "html"
        code = {`<em>text</em>`}
      ></CodeForm>
      {/* Emphasis tag result */}
      <CodeResult>
        <em>text</em>
      </CodeResult>


      {/* Link tag <a> */}
      <p className='font-bold text-xl mt-15'>{'<> Link tag : <a>'}</p>
      <CodeForm 
        lang  = "html"
        code = {`<a href="#">text</a>`}
      ></CodeForm>
      {/* Link tag result */}
      <CodeResult>
        <a href="#" className='text-blue-700'><u>text</u></a>
      </CodeResult>


      {/* Odered list */}
      <p className='font-bold text-xl mt-15'>{'<> Odered list'}</p>
      <CodeForm 
        lang  = "html"
        code =
{`<ol>
  <li>list 1</li>
  <li>list 2</li>
  <li>list 3</li>
</ol>`}
      ></CodeForm>
      {/* Ordered list result */}
      <CodeResult>
        <ol>
            <li>1. list 1</li>
            <li>2. list 2</li>
            <li>3. list 3</li>
        </ol>
      </CodeResult>


      {/* Unodered list */}
      <p className='font-bold text-xl mt-15'>{'<> Unodered list'}</p>
      <CodeForm 
        lang  = "html"
        code =
{`<ul>
  <li>list 1</li>
  <li>list 2</li>
  <li>list 3</li>
</ul>`}
      ></CodeForm>
      {/* Unordered list result */}
      <CodeResult>
        <ul>
            <li>• list 1</li>
            <li>• list 2</li>
            <li>• list 3</li>
        </ul>
      </CodeResult>   


      {/* Defination list */}
      <p className='font-bold text-xl mt-15'>{'<> Defination list'}</p>
      <CodeForm 
        lang  = "html"
        code =
{`<dl>
  <dt>defination term 1</dt>
  <dd>defination description 1</dd>
  <dd>defination description 1</dd>
  <dt>defination term 2</dt>
  <dd>defination description 2</dd>
  <dd>defination description 2</dd>
</dl>`}
      ></CodeForm>
      {/* Defination list result */}
      <CodeResult>
        <dl>
          <dt>defination term 1</dt>
          <dd className='ml-15'>defination description 1</dd>
          <dd className='ml-15'>defination description 1</dd>
          <dt>defination term 2</dt>
          <dd className='ml-15'>defination description 2</dd>
          <dd className='ml-15'>defination description 2</dd>
        </dl>
      </CodeResult>     


      {/* Table */}
      <p className='font-bold text-xl mt-15'>{'<> Table'}</p>
      <CodeForm 
        lang  = "html"
        code =
{`<table>
  <tr>
    <th>table heading 1</th>
    <th>table heading 2</th>
    <th>table heading 3</th>
  </tr>
  <tr>
    <td>table data 1</td>
    <td>table data 2</td>
    <td>table data 3</td>
  </tr>
</table>`}
      ></CodeForm>
      {/* Table result */}
      <CodeResult>
        <table>
          <tr>
            <th>table heading 1</th>
            <th>table heading 2</th>
            <th>table heading 3</th>
          </tr>
          <tr>
            <td>table data 1</td>
            <td>table data 2</td>
            <td>table data 3</td>
          </tr>
        </table>
      </CodeResult>            

    </>
  )
}

export default HTMLBasic