import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
          <h1>Carlos Cherindza</h1>
            <p>I am a student with abition to became a software developer</p>
    
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Carlos Cherindza. All rights reserved.</p>
        <div className="footer-bottom-right">
        <ul>
                  <li><a target="_blank" href="https://github.com/Carlos28042003">GitHub</a></li>
                  <li><a target="_blank" href="www.linkedin.com/in/carlos-cherindza-8b9576239">LinkedIn</a></li>
                  <li><a target="_blank" href="https://www.facebook.com/profile.php?id=100011854264967">Facebook</a></li>
                 
          </ul>

        </div>
      </div>
    </div>
  )
}

export default Footer
