import React from 'react'

const ReviewByStud = () => {
  return (
    <>
  <div id="makeitfull">
    <a href="#review_section">
      <img src="images/icon/makeitfull.png" />
    </a>
  </div>
  <div className="review">
    <div className="diffSection" id="review_section">
      <center>
        <p
          style={{
            fontSize: 40,
            padding: 100,
            paddingBottom: 40,
            color: "#2E3D49"
          }}
        >
          What the Students Say About Us?
        </p>
      </center>
    </div>
    <div className="rev-container">
      <div className="rev-card">
        <div className="identity">
          <img src="../images/creator/humanNotExist1.jpg" />
          <p>Sophie Daniel</p>
          <h6>Java</h6>
          <div className="rating">
            <img src="../images/icon/star.png" />
            <img src="../images/icon/star.png" />
            <img src="../images/icon/star.png" />
            <img src="../images/icon/star.png" />
            <img src="../images/icon/star.png" />
          </div>
        </div>
        <div className="rev-cont">
          <p id="title">Review:</p>
          <p id="content">
            I did Java Fundamenetal course with Rishab Sir. It was a great
            experience. The brain teasers and assignments, actually the whole
            lot of content was really good. Some problems were challenging yet
            interesting. Was explained very well where ever I stuck...
          </p>
        </div>
      </div>
      <div className="rev-card">
        <div className="identity">
          <img src="images/creator/humanNotExist2.jpg" />
          <p>Clayton Clair</p>
          <h6>C/C++</h6>
          <div className="rating">
            <img src="../images/icon/star.png" />
            <img src="../images/icon/star.png" />
            <img src="../images/icon/star.png" />
            <img src="../images/icon/star.png" />
            <img src="../images/icon/star.png" />
          </div>
        </div>
        <div className="rev-cont">
          <p id="title">Review:</p>
          <p id="content">
            When I was watching "Dear Zindagi", I could relate Sharukh Khan to
            Arnav Bhaiya. The way Sharukh Khan was giving life lessons to Alia
            Bhatt, in the same way Arnav Bhaiya will give coding life lessons
            which will guide you throughout your code life...
          </p>
        </div>
      </div>
      <div className="rev-card">
        <div className="identity">
          <img src="../images/creator/humanNotExist3.jpg" />
          <p>Devyn Sethi</p>
          <h6>IIT</h6>
          <div className="rating">
            <img src="../images/icon/star.png" />
            <img src="../images/icon/star.png" />
            <img src="../images/icon/star.png" />
            <img src="../images/icon/star.png" />
            <img src="../images/icon/star.png" />
          </div>
        </div>
        <div className="rev-cont">
          <p id="title">Review:</p>
          <p id="content">
            RDR Home Tutorial was an amazing experience for me. I belong to
            electronics department and had a little experience in coding but I
            think it has helped me think things through in a much more
            analytical manner. Coding is important no matter which branch you
            are in. It gives you a better understanding about how to approach a
            problem...
          </p>
        </div>
      </div>
      <div className="rev-card">
        <div className="identity">
          <img src="../images/creator/humanNotExist4.jpg" />
          <p>Rylee Phillips</p>
          <h6>Python</h6>
          <div className="rating">
            <img src="../images/icon/star.png" />
            <img src="../images/icon/star.png" />
            <img src="../images/icon/star.png" />
            <img src="../images/icon/star.png" />
            <img src="../images/icon/star.png" />
          </div>
        </div>
        <div className="rev-cont">
          <p id="title">Review:</p>
          <p id="content">
            This was my first complete course at coding blocks. I attended the
            Python course in Winter 2020 and loved it which made me join the
            full course. Shubham bhaiya and Ayush Bhaiya(TA) have good knowledge
            about the field and were very helpful in making us understand the
            concepts. I would certainly recommend this to anyone...
          </p>
        </div>
      </div>
    </div>
  </div>
  
  
</>

  )
}

export default ReviewByStud