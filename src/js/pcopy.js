import React from 'react'
import img1 from '../Images/html.png'
import img2 from '../Images/html.png'
import img3 from '../Images/html.png'
import img4 from '../Images/html.png'
import video1 from '../Images/video1.mp4'

export default function Projects() {
  return (
    <>
      <div className="projectheader">
          <h1>Projects</h1>
      </div>
      <div className='projectbody' id='projects'>
<section id='projects'>
    <div class="containerrr">
        <div class="card1">
            <div class="card">
                <div class="back">
                    <h1>Siddharth pandey</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum itaque, necessitatibus consequuntur nobis earum officiis </p>
                </div>
                <div class="front">
                <video src={video1} width="200" height="170" controls="controls" autoplay="false" />
                    // <img src={img1} alt=""/>
                </div>
            </div>
    </div>
     </div>
     <div class="containerrr">
        <div class="card2">
        <div class="card">
            <div class="front">
                <img src={img2} alt=""/>
            </div>
            <div class="back">
                <h1>Krish Gupta</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum itaque, necessitatibus consequuntur amet ex vel.</p>
            </div>
        </div>
    </div>
     </div>
     
     <div class="containerrr">
        <div class="card3">
        <div class="card">
            <div class="front">
                <img src={img3} alt=""/>
            </div>
            <div class="back">
                <h1>Chaman Patel</h1>
                <p>Lorem ipsum dolor sit amet quuntur nobis earum officiis explicabo, magni maxime fugit qui recusandae, harum accusantium voluptatum voluptates. Provident ea amet ex vel.</p>
            </div>
        </div>
    </div>
     </div>

     <div class="containerrr">
        <div class="card4">
        <div class="card">
            <div class="front">
                <img src={img4} alt=""/>
            </div>
            <div class="back">
                <h1>Chaman Patel</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sandae, harum accusantium voluptatum voluptates. Provident ea amet ex vel.</p>
            </div>
        </div>
    </div>
     </div>
     </section>
     </div>
     </>
  )
}
