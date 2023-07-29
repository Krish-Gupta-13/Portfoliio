import React from 'react'
import img5 from '../Images/mp.png'
import img2 from '../Images/gfg.png'
import img3 from '../Images/atri.png'
import img4 from '../Images/chess.png'
import img1 from '../Images/github.png'


export default function Projects() {
  return (
    <div className='bg'>
      <div className="projectheader">
          <h1>Projects</h1>
      </div>
      <div className='projectbody' id='projectss'>

            <div className="card">
            <img src={img4} width="220" height="200" controls="controls" autoplay="false" />
            <div className="cardbot">
                <a href="https://github.com/Krish-Gupta-13/Chess-Clock"><img src={img1} alt="" /></a>
                <button className='btnn'><a href="https://chess-clock-8ks3q18uk-krish-gupta-13.vercel.app/">Visit Here</a></button>
            </div>
            {/*}      <a href="https://github.com/Krish-Gupta-13/Web-Cifar"><img src={img1} alt="" /></a>{*/}
            </div>
            
            <div className="card">
                <img src={img3} width="220" height="200" controls="controls" autoplay="false"/>
                <div className="cardbot">
                    <a href="https://github.com/Krish-Gupta-13/Atri-Labs"><img src={img1} alt="" /></a>
                    <button className='btnn'><a href="https://heroic-nasturtium-afb4af.netlify.app/">Visit Here</a></button>
                </div>
               {/*}      <a href="https://github.com/Krish-Gupta-13/Web-Cifar"><img src={img1} alt="" /></a>{*/}
            </div>

            <div className="card">   
                <img src={img5} alt="" />
                <div className="cardbot">
                    <a href="https://github.com/Krish-Gupta-13/Web-Cifar"><img src={img1} alt="" /></a>
                    <button className='btnn'><a href="https://www.youtube.com/watch?v=9_dRgUf6GFc">Visit Here</a></button>
                </div>
            </div>

            <div className="card">
                <img src={img2} width="220" height="200" controls="controls" autoplay="false" />
                <div className="cardbot">
                    <a href="https://github.com/Krish-Gupta-13/GeeksForGeekss"><img src={img1} alt="" /></a>
                    <button className='btnn'><a href="https://geeks-for-geekss.vercel.app/">Visit Here</a></button>
                </div>
                {/*}      <a href="https://github.com/Krish-Gupta-13/Web-Cifar"><img src={img1} alt="" /></a>{*/} 
            </div>

        
            
     </div>

</div>

  )
}
