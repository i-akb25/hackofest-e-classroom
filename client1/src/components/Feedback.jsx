import React from 'react'

const Feedback = () => {
  return (
    <div className="feedbox">
  <div className="feed">
    <form
      action="mailto:abhijitmaxxim@gmail.com"
      method="post"
      encType="text/plain"
    >
      <label>Your Name</label>
      <br />
      <input type="text" name="" className="fname" required="required" />
      <br />
      <label>Email</label>
      <br />
      <input type="email" name="mail" required="required" />
      <br />
      <label>Additional Details</label>
      <br />
      <textarea name="addtional" defaultValue={""} />
      <br />
      <button type="submit" id="csubmit">
        Send Message
      </button>
    </form>
  </div>
</div>
  )
}

export default Feedback
