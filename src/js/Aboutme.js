import React from 'react'
import img1 from '../Images/me1.jpg'

export default function About_me() {
  return (
    <div className='aboutmebody' id='aboutme'>
      <div className="header">
        <h1>About Me</h1>
      </div>
      <div className="holder">
          <div className="left">
          <img src={img1} alt="" />
          </div>
          <div className="right">
              <p>Hii there, this is Krish Gupta from Bhilai, Chhattisgarh. Currently I am pursuing my Bachelors in Mining Engineering from, one of the reputed college of our country, that is National Institute of Technology, Raipur. 
<br></br><br></br>
          
              Though I am pursuing my degree in mining, I am very much fascinated towards tech domain and coding is kind of pleasure to me. I have a good command on data structures and alogorithm and have solved over a lot of DSA problems. I am also interested towards the development side and have gained the knowledge of HTML, CSS, JavaScript, ReactJs, Bootstrap as a knowledge of front end development. I am a beginner in backend development and enhancing my skills to become a full-stack deleloper. 
              </p>
          </div>
      </div>
      
    </div>
  )
}
