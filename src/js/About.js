import React from 'react'
import img1 from '../Images/bg2.webp'


export default function About() {
  return (
    <div className='aboutbody reveal' id='about'>
    {/*}<img src={img1} alt=""/>{*/}
        <div className="left">
            <h1>Hii There!!</h1>
            <h2>This is&nbsp; <span>K</span>rish&nbsp; <span>G</span>upta</h2>
            <button id='btna' className='abtn'><a href="">RESUME</a></button>
        </div>
    </div>
  )
}
