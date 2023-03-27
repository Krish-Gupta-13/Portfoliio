import React from 'react'
import video1 from '../Images/MiniProject.mp4'
import video2 from '../Images/GFG.mp4'
import video3 from '../Images/Atrilabs.mp4'
import video4 from '../Images/Cafessa.mp4'
import img1 from '../Images/github.png'


export default function Projects() {
  return (
    <div className='bg'>
      <div className="projectheader">
          <h1>Projects</h1>
      </div>
      <div className='projectbody' id='projects'>
<section id='projects'>

    <div class="containerrr">
        <div class="card1">
            <div class="card">
                <div class="front">
                <video src={video1} width="220" height="200" controls="controls" autoplay="false"/>
                </div>
                <div className="con">
                <p>PortFolio</p>
                <a href="https://github.com/Krish-Gupta-13/Web-Cifar"><img src={img1} alt="" /></a>
                </div>
            </div>
    </div>
     </div>
     <div class="containerrr">
        <div class="card2">
        <div class="card">
            <div class="front">
            <video src={video2} width="220" height="200" controls="controls" autoplay="false" />
            </div>
            <div className="con">
            <p>GFG Clone</p>
            <a href="https://github.com/Krish-Gupta-13/GeeksForGeekss"><img src={img1} alt="" /></a>
            </div>
            
            </div>
    </div>
     </div>
     
     <div class="containerrr">
        <div class="card3">
        <div class="card">
            <div class="front">
            <video src={video3} width="220" height="200" controls="controls" autoplay="false"/>
            </div>
            <div className="con">
            <p>Clone</p>
            <a href="https://github.com/Krish-Gupta-13/Atri-Labs"><img src={img1} alt="" /></a>
            </div>
        </div>
    </div>
     </div>

     <div class="containerrr">
        <div class="card4">
        <div class="card">
            <div class="front">
            <video src={video4} width="220" height="200" controls="controls" autoplay="false" />
            </div>
            <div className="con">
            <p>Cafe Shop</p>
            <a href="https://github.com/Krish-Gupta-13/Cafessa"><img src={img1} alt="" /></a>
            </div>
        </div>
    </div>
     </div>
     </section>
     </div>
     </div>
// </div>
  )
}
