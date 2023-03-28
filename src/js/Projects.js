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
      <div className='projectbody' id='projectss'>
            <div className="card">   
                <img src={img5} alt="" />
  {/*}      <a href="https://github.com/Krish-Gupta-13/Web-Cifar"><img src={img1} alt="" /></a>{*/}
            </div>

            <div className="card">
                <img src={img2} width="220" height="200" controls="controls" autoplay="false" />
                {/*}      <a href="https://github.com/Krish-Gupta-13/Web-Cifar"><img src={img1} alt="" /></a>{*/} 
            </div>

            <div className="card">
                <img src={img3} width="220" height="200" controls="controls" autoplay="false"/>
               {/*}      <a href="https://github.com/Krish-Gupta-13/Web-Cifar"><img src={img1} alt="" /></a>{*/}
            </div>
        
            <div className="card">
                <img src={img4} width="220" height="200" controls="controls" autoplay="false" />
          {/*}      <a href="https://github.com/Krish-Gupta-13/Web-Cifar"><img src={img1} alt="" /></a>{*/}
            </div>
     </div>

</div>

  )
}
