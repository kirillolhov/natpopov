import React from 'react'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
import ME from '../../assets/me.jpg'
import './intro.css'

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know me</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>20+ years</small>
            </article>
          </div>
          <p>
            Celebrating the ethereal beauty of watercolor, I am an artist driven
            by fluidity and vibrant hues. With each delicate stroke, I capture
            emotions and fleeting moments, weaving them into captivating
            aquarelle compositions. Nature’s serenity and the play of light
            inspire my palette, infusing life into my artworks. Through the
            unpredictable dance of water and pigment, I breathe life into
            evocative landscapes and intricate portraits. My journey as an
            aquarelle artist is a testament to spontaneity and meticulous
            craftsmanship. Join me in exploring the evocative world of
            watercolors, where every creation whispers its own unique story,
            inviting you to immerse yourself in its mesmerizing beauty.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default Intro
