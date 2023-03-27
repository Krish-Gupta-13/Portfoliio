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
            <p>Hii there, this is Krish Gupta from Bhilai, Chhattisgarh. Currently I am pursuing my Bachelors in Mining Engeneering from, one of the reputed college of our country, that is National Institute of Technology. </p>

            <p>
            Though I am pursuing my degree in mining, I am very much fascinated towards tech domain and coding is kind of pleasure to me. I started coding in C++ from 1st sem itself and futher in the 2nd sem I started learning WebDevelopment. Through practing I got a good command in frontend and Data Structures and Algorithms and currently I am working on my Backend Development aswell to enhance and add on new skills.
            </p>
        </div>
        </div>
      
    </div>
  )
}
