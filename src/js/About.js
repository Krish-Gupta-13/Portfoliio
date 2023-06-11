import React from 'react'
import img1 from '../Images/bg2.webp'

window.addEventListener('scroll', reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i=0; i<reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop<windowheight-revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}


export default function About() {
  return (
    <div className='aboutbody reveal' id='about'>
    {/*}<img src={img1} alt=""/>{*/}
        <div className="left">
            <h1>Hii There!!</h1>
            <h2>This is Krish Gupta</h2>
            <button id='btna' className='abtn'><a href="">RESUME</a></button>
        </div>
    </div>
  )
}
