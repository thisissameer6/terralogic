import React from 'react'

function Contact() {
  return (
    <div className='container contact-section'>
      <div className='info'>
        <h2>Our 15 years of achievements includes:</h2>
        <div>
          <p>
            <span>10M+</span>
            lines of codes
          </p>
          <p>
            <span>2400+</span>
            projects completed
          </p>
          <p>
            <span>900+</span>
            satisfied clients
          </p>
          <p>
            <span>16+</span>
            countries served
          </p>
        </div>
      </div>
      <form>
        <input type='text' placeholder='Name'/>
        <input type='email' placeholder='Email'/>
        <input type='number' placeholder='Phone Number'/>
        <textarea placeholder='Tell us about your project....'/>
      </form>
    </div>
  )
}

export default Contact