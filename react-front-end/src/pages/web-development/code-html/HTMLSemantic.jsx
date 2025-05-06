import React from 'react'
import CodeForm from '../../../components/CodeForm'
import CodeResult from '../../../components/CodeResult'

const HTMLSemantic = () => {
  return (
    <>
    
      {/* Header */}
      <p className='font-bold text-xl'>{'<> Header : heading of the page'}</p>
      <CodeForm 
        lang="html"
        code={`<header></header>`}
      ></CodeForm>


      {/* Navigation */}
      <p className='font-bold text-xl mt-15'>{'<> Navigation : navbar of the page'}</p>
      <CodeForm 
        lang="html"
        code={`<nav></nav>`}
      ></CodeForm>


      {/* Main */}
      <p className='font-bold text-xl mt-15'>{'<> Main : container section (once a page)'}</p>
      <CodeForm 
        lang="html"
        code={`<main></main>`}
      ></CodeForm>
      
            
      {/* Section */}
      <p className='font-bold text-xl mt-15'>{'<> Section : cover relative contents'}</p>
      <CodeForm 
        lang="html"
        code={`<section></section>`}
      ></CodeForm>

      {/* Article */}
      <p className='font-bold text-xl mt-15'>{'<> Article : cover dependence contents'}</p>
      <CodeForm 
        lang="html"
        code={`<article></article>`}
      ></CodeForm>

      {/* Aside */}
      <p className='font-bold text-xl mt-15'>{'<> Aside : sidebar, advertisement'}</p>
      <CodeForm 
        lang="html"
        code={`<aside></aside>`}
      ></CodeForm>

      {/* Footer */}
      <p className='font-bold text-xl mt-15'>{'<> Footer : foot of the page'}</p>
      <CodeForm 
        lang="html"
        code={`<footer></footer>`}
      ></CodeForm>


      {/* Visualization */}
      <p title='Visualization' className='font-bold text-xl mt-15 mb-7'>{'<> Vizualization'}</p>
      <CodeResult>
        <div className=' m-auto w-180 h-100'>
          <header className='w-full h-1/10 bg-amber-500 text-center'>{`<header>`}</header>
          <nav className='w-full h-1/10 bg-teal-500 text-center'>{`<nav>`}</nav>
          <main className='flex felx-row w-full h-7/10'>
            <aside className='w-15/100 h-full bg-red-500 text-center pt-30'>{`<aside>`}</aside>
            <section className='w-35/100 h-full bg-green-500 text-center pt-30'>{`<section>`}</section>
            <article className='w-35/100 h-full bg-blue-500 text-center pt-30'>{`<article>`}</article>
            <aside className='w-15/100 h-full bg-red-500 text-center pt-30'>{`<aside>`}</aside>
          </main>
          <footer className='w-full h-1/10 bg-cyan-500 text-center'>{`<footer>`}</footer>
        </div>
      </CodeResult>
    
    </>
  )
}

export default HTMLSemantic