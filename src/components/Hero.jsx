import React from 'react'
import './Hero.css'
import PrimaryButton from './PrimaryButton'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Hey! I'm Matt Szypula</h1>
          <p className="hero-subtitle">
            I'm a NCAA Division I student-athlete at Colgate University studying Computer Science and Economics.
          </p>
          <PrimaryButton as="a" href="/resume.pdf" download>
            Download Resume
          </PrimaryButton>
        </div>
        <div className="hero-media">
          {/* Replace the src with your image or video */}
          <img src="https://via.placeholder.com/500x300.png?text=Your+Image+or+Video" alt="Hero visual" className="hero-image" />
        </div>
      </div>
    </section>
  )
}

export default Hero 