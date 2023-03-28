import React from 'react'
import img5 from '../Images/mp.png'
import img2 from '../Images/gfg.png'
import img3 from '../Images/atri.png'
import img4 from '../Images/cafessa.png'
import img1 from '../Images/github.png'


export default function Projects() {
  return (
    <div className='bg'>
      <div className="projectheader">
          <h1>Projects</h1>
      </div>
      <div className='projectbody' id='projects'>
<section id='projects'>
<div className="containerrr">
        <div class="card1">
            <div class="card">
                <div class="front">
                <img src={img5} alt="" />
                </div>
                <div className="con">
                <a href="https://github.com/Krish-Gupta-13/Web-Cifar"><img src={img1} alt="" /></a>
                </div>
            </div>
    </div>
     </div>
     <div className="containerrr">
        <div class="card2">
        <div class="card">
            <div class="front">
            <img src={img2} width="220" height="200" controls="controls" autoplay="false" />
            </div>
            <div className="con">
            <a href="https://github.com/Krish-Gupta-13/GeeksForGeekss"><img src={img1} alt="" /></a>
            </div>
            
            </div>
    </div>
     </div>
     
     <div className="containerrr">
        <div class="card3">
        <div class="card">
            <div class="front">
            <img src={img3} width="220" height="200" controls="controls" autoplay="false"/>
            </div>
            <div className="con">
            <a href="https://github.com/Krish-Gupta-13/Atri-Labs"><img src={img1} alt="" /></a>
            </div>
        </div>
    </div>
     </div>

     <div className="containerrr">
        <div class="card4">
        <div class="card">
            <div class="front">
            <img src={img4} width="220" height="200" controls="controls" autoplay="false" />
            </div>
            <div className="con">
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
