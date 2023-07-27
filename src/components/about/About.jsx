import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import Particles from 'react-tsparticles'

const About = () => {
  return (
    <section id="about">

      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ years Experience</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Client</h5>
              <small>200+ world wide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed projects</small>
            </article>
          </div>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, provident. Voluptate perspiciatis numquam voluptatibus animi alias incidunt maxime, rerum nihil consequuntur voluptatum tempore enim aut dolorem, molestias error, sapiente sit quisquam modi eaque qui veritatis. Amet, ratione quia veritatis repellendus architecto omnis beatae recusandae quidem maxime, culpa eos blanditiis nisi ab voluptatum, commodi dolor? Aliquid suscipit in placeat inventore incidunt.</p>

          <a href="#contact" className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About