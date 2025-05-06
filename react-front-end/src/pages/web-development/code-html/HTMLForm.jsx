import React from 'react'
import CodeForm from '../../../components/CodeForm'
import CodeResult from '../../../components/CodeResult'

const HTMLForm = () => {
  return (
    <>
    
      {/* Form*/}
      <p className='font-bold text-xl'>{'<> Form'}</p>
      <CodeForm 
              lang  = "html"
              code = 
{`<form action="#" method="#">
  <input type="text"/>
  <input type="password"/>
  <input type="email"/>
  <input type="checkbox"/>
  <input type="radio"/>
  <input type="submit"/>
  <input type="file"/>
  <input type="number"/>
  <input type="date"/>
</form>`}
      ></CodeForm>
      {/* Form result */}
      <CodeResult>
        <form>
          <input type='text' placeholder='text' className='border-1 rounded-[4px]'/><br></br><br></br>
          <input type="password" placeholder='password' className='border-1 rounded-[4px]'/><br></br><br></br>
          <input type="email" placeholder='email' className='border-1 rounded-[4px]'/><br></br><br></br>
          <input type="checkbox"/><br></br><br></br>
          <input type="radio"/><br></br><br></br>
          <input type="submit" className='border-1 rounded-[4px] bg-gray-200'/><br></br><br></br>
          <input type="file" className='block w-fit h-fit border-1 rounded-[4px]'/><br></br>
          <input type="number" className='border-1 rounded-[4px]'/><br></br><br></br>
          <input type="date" className='border-1 rounded-[4px]'/>
        </form>    
      </CodeResult>


      {/* Label */}
      <p className='font-bold text-xl mt-15'>{'<> Label'}</p>
      <CodeForm 
        lang  = "html"
        code =
{`<form action="#" method="#">
  <label for="name">label</label>
  <input type="text" id="name" name="name"/>
</form>`}
      ></CodeForm>
      {/* Label result */}
      <CodeResult>
        <form action="#" method="#">
          <label for="name">Label</label><br></br>
          <input type='text' id='name' name='name' placeholder='text' className='border-1 rounded-[4px]'/>
        </form>
      </CodeResult>      


      {/* Select and Option */}
      <p className='font-bold text-xl mt-15'>{'<> Select and Option '}</p>
      <CodeForm 
        lang  = "html"
        code =
{`<select>
  <option>option 1</option>
  <option>option 2</option>
  <option>option 3</option>
</select>`}
      ></CodeForm>
      {/* Select and Option  result */}
      <CodeResult>
        <select>
          <option>option 1</option>
          <option>option 2</option>
          <option>option 3</option>
        </select>
      </CodeResult>     


      {/* Textarea */}
      <p className='font-bold text-xl mt-15'>{'<> Textarea'}</p>
      <CodeForm 
        lang  = "html"
        code = {`<textarea></textarea>`}
      ></CodeForm>
      {/* Textarea result */}
      <CodeResult>
        <textarea className='border-1 rounded-[4px]'></textarea>
      </CodeResult>      


      {/* Button */}
      <p className='font-bold text-xl mt-15'>{'<> Button'}</p>
      <CodeForm 
        lang  = "html"
        code = {`<button>button</button>`}
      ></CodeForm>
      {/* Button result */}
      <CodeResult>
        <form action="#" method="#">
          <button className='border-1 rounded-[4px] bg-gray-200'>button</button>
        </form>
      </CodeResult>    


      {/* Some values */}
      <p className='font-bold text-xl mt-15 mb-5'>{'<> Some values'}</p>     
      <CodeResult>
        <strong>required, placeholder, value, readonly, disabled, checked, selected, maxlength, min, max,...</strong>
      </CodeResult>         

    </>
  )
}

export default HTMLForm