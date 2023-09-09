import React from 'react'

function HeroSection() {
  return (
    <div className='container hero-section'>
      <div className='info'>
        <h1>Design Driven Technology Innovations</h1>
        <p>We are an IT Services Company that translates your business needs to scalable solutions.</p>
        <button>Learn More</button>
      </div>
      <img src={require("../assets/hero.png")}/>
    </div>
  )
}

export default HeroSection