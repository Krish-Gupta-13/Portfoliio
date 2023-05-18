import React from 'react'
import App from '../App.js'
import img1 from '../Images/html.png'
import img2 from '../Images/css.png'
import img3 from '../Images/js.png'
import img4 from '../Images/react.png'
import img5 from '../Images/bootstrap.png'
import img8 from '../Images/mongo.svg'
import img6 from '../Images/node.jpg'
import img7 from '../Images/express.jpg'
import img9 from '../Images/c.png'
import img10 from '../Images/rc.png'
import img11 from '../Images/java.png'
// import { BrowserRouter } from 'react-router-dom'

// import { ReactComponent as Logo } from '../Images/bg.jpg'
// import { ReactComponent as Logo } from './bg1.jpg'
// import Logo from './bg1.jpg'

export default function Skills() {
  return (
    <section id='skills'>
    <div className='skillsbody'>

      <div className="header">
        <h1>Skills</h1>
      </div>
      <div className="heading">
        <h1>Front-End</h1>
      </div>
      <div className="mainbox">

        <div className="borderbox">
            <div className="box1 ">
              <img src={img1} alt="" />
              <h2>HTML</h2>
              <p>(Intermediate-Advanced)</p>
            </div>
        </div>
    
        <div className="borderbox">
            <div className="box1">
              <img src={img2} alt="" />
              <h2>CSS</h2>
              <p>(Intermediate-Advanced)</p>
            </div>
        </div>
        
        <div className="borderbox">
          <div className="box1">
              <img src={img3} alt="" />
              <h2>JS</h2>
              <p>(Intermediate)</p>
            </div>
          </div>
      </div> 

   <div className="flexi">
        <div className="borderbox2">
          <div className="box2">
            <img src={img4} alt="" />
              <h2>REACTJS</h2>
              <p>(Basics)</p>
          </div>
        </div>
        <div className="borderbox2">
          <div className="box2">
            <img src={img5} alt="" />
            <h2>BOOTSTRAP</h2>
            <p>(Intermediate)</p>
          </div>
        </div> 
    </div>
    
      <div className="heading">
        <h1>Back-End</h1>
      </div>
      <div className="mainbox">

        <div className="borderbox">
            <div className="box1">
              <img src={img6} alt="" />
              <h2>NODEJS</h2>
              <p>(Basics)</p>
            </div>
        </div>
    
        <div className="borderbox">
            <div className="box1">
              <img src={img7} alt="" />
              <h2>EXPRESSJS</h2>
              <p>(Basics)</p>
            </div>
        </div>
        
        <div className="borderbox">
          <div className="box1">
              <img src={img8} alt="" />
              <h2>MONGODB</h2>
              <p>(Basics)</p>
            </div>
          </div>
      </div> 



      <div className="heading">
        <h1>Languages</h1>
      </div>
      <div className="mainbox">

        <div className="borderbox">
            <div className="box1">
              <img src={img9} alt="" />
              <h2>C++</h2>
              <p>(Advanced)</p>
            </div>
        </div>
    
        <div className="borderbox">
            <div className="box1">
              <img src={img10} alt="" />
              <h2>C</h2>
              <p>(Intermediate)</p>
            </div>
        </div>
        
        <div className="borderbox">
          <div className="box1">
              <img src={img11} alt="" />
              <h2>JAVA</h2>
              <p>(Intermediate)</p>
            </div>
          </div>
      </div> 

    </div>
    </section>
  )
}
