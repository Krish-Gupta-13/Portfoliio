import React from 'react'
import img1 from '../Images/bg2.webp'

export default function About() {
  return (
    <div className='aboutbody' id='about'>
    {/*}<img src={img1} alt=""/>{*/}
        <div className="left">
            <h1>Hii There!!</h1>
            <h2>
            This is Krish Gupta</h2>
            <button id='btna' className='abtn'><a href="https://docs.google.com/document/d/1CNLl_UyUQ1htoozDjhSPkB5oxBK1MbMK/edit?usp=drivesdk&ouid=112476948555225174066&rtpof=true&sd=true">RESUME</a></button>
        </div>
    </div>
  )
}
