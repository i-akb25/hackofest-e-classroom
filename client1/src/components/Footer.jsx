import React from 'react'

const Footer = () => {
  return (
<footer>
  <div className="footer-container">
    <div className="left-col">
      <img src="images/FOOTER LOGO.png" style={{ width: 200 }} />
      <div className="logo" />
      <div className="social-media">
        <a href="#">
          <img src="../images/icon\fb.png" />
        </a>
        <a href="#">
          <img src="../images/icon\insta.png" />
        </a>
        <a href="#">
          <img src="../images/icon\tt.png" />
        </a>
        <a href="#">
          <img src="../images/icon\ytube.png" />
        </a>
        <a href="#">
          <img src="../images/icon\linkedin.png" />
        </a>
      </div>
      <br />
      <br />
      <p className="rights-text">
        Copyright © 2024 Created By Team ByteBlitz, ByteBlitz All Rights Reserved.
      </p>
      <br />
      <p>
        <img src="../images/icon/location.png" /> National Institute of Technology Patna
        <br />
        Patna University Campus, Patna, Bihar 800005
      </p>
      <br />
      <p>
    
        <img src="../images/icon/mail.png" />
        &nbsp; anuragaryanofficial@gmail.com
      </p>
    </div>
    <div className="right-col">
      <h1 style={{ color: "#fff" }}>Our Newsletter</h1>
      <div className="border" />
      <br />
      <p>Enter Your Email to get our News and updates.</p>
      <form className="newsletter-form">
        <input className="txtb" type="email" placeholder="Enter Your Email" />
        <input className="btn" type="submit" defaultValue="Submit" />
      </form>
    </div>
  </div>
</footer>

  )
}

export default Footer