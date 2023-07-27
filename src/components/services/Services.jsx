import React from 'react'
import './services.css'
import {BsCheckLg} from 'react-icons/bs'

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='services__list'>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, velit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, velit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, velit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, velit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, velit.</p>
            </li>
          </ul>
        </article>
        {/* End of UI/Ux */}

        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='services__list'>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, velit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, velit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, velit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, velit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, velit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, velit.</p>
            </li>
          </ul>
        </article>
        {/* End of Web Development */}

        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='services__list'>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, velit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, velit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, velit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, velit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, velit.</p>
            </li>
          </ul>
        </article>
        {/* End of Content creation */}
      </div>
    </section>
  )
}

export default Services