import React from 'react'
import img1 from '../Images/facebook.png'
import img2 from '../Images/instagram.png'
import img3 from '../Images/linkedin.png'
import img4 from '../Images/github.png'
import img5 from '../Images/discord.png'
import img6 from '../Images/cf.jpg'
import img7 from '../Images/cc.png'
import img8 from '../Images/geeks.png'
import img9 from '../Images/leetcode.jpg'
import img10 from '../Images/hr.jpg'


export default function Footer() {
  return (
    <div className="footerbody" id='footer'>
    <div className="footerheader">  
    <h1>Let's Connect </h1>
    </div>
    
        <div className="footerlinks">
          <div className="leftf">
            <h3>Social Media</h3>
            <ul>
              <li><a href="https://www.facebook.com/profile.php?id=100078260750876"><img src={img1} alt="" /></a></li>
              <li><a href="https://instagram.com/_krish_gupta_13_?igshid=ZDdkNTZiNTM="><img src={img2} alt="" /></a></li>
              <li><a href="https://www.linkedin.com/in/krish-gupta-1b92a4229/"><img src={img3} alt="" /></a></li>
              <li><a href="https://github.com/Krish-Gupta-13"><img src={img4} alt="" /></a></li>
              <li><a href="https://discord.com/channels/@me"><img src={img5} alt="" /></a></li>
            </ul>
          </div>
          

          <div className="rightf">
            <h3>Coding Platforms</h3>
            <ul>
              <li><a href="https://codeforces.com/profile/KrishGupta"><img src={img6} alt="" /></a></li>
              <li><a href="https://www.codechef.com/users/krish_gupta_13"><img src={img7} alt="" /></a></li>
              <li><a href="https://auth.geeksforgeeks.org/user/krishguptaa13/"><img src={img8} alt="" /></a></li>
              <li><a href="https://leetcode.com/Krish-Gupta/"><img src={img9} alt="" /></a></li>
              <li><a href="https://www.hackerrank.com/krishguptaa13"><img src={img10} alt="" /></a></li>
            </ul>     
          </div>
        </div>

        <div className="foot">
          <h6>Created By Krish Gupta</h6>
        </div>
    </div>
    
  )
}
