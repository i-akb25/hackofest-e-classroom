import React from 'react'

const Services = () => {
  return (
    <div className="service-swipe">
  <div className="diffSection" id="services_section">
    <center>
      <p
        style={{ fontSize: 50, padding: 100, paddingBottom: 40, color: "black" }}
      >
        Services
      </p>
    </center>
  </div>
  <a href="subjects/computer_courses.html">
    <div className="s-card">
      <img src="../images/icon/computer-courses.png" />
      <p>Free Online Computer Courses</p>
    </div>
  </a>
  <a href="subjects/jee.html">
    <div className="s-card">
      <img src="../images/icon/brainbooster.png" />
      <p>Building Concepts for Competitive Exams</p>
    </div>
  </a>
  <a href="#">
    <div className="s-card">
      <img src="../images/icon/online-tutorials.png" />
      <p>Online Video Lectures</p>
    </div>
  </a>
  <a href="subjects/jee.html#sample_papers">
    <div className="s-card">
      <img src="../images/icon/papers.jpg" />
      <p>Sample Papers of Various Competitive Exams</p>
    </div>
  </a>
  <a href="#">
    <div className="s-card">
      <img src="../images/icon/p3.png" />
      <p>Performance and Ranking Report</p>
    </div>
  </a>
  <a href="#contactus_section">
    <div className="s-card">
      <img src="../images/icon/discussion.png" />
      <p>Discussion with Our Tutors &amp; Mentors</p>
    </div>
  </a>
  <a href="subjects/quiz.html">
    <div className="s-card">
      <img src="../images/icon/q1.png" />
      <p>Daily Brain Teasing Questions to Improve IQ</p>
    </div>
  </a>
  <a href="#contactus_section">
    <div className="s-card">
      <img src="../images/icon/help.png" />
      <p>24x7 Online Support</p>
    </div>
  </a>
</div>

  )
}

export default Services