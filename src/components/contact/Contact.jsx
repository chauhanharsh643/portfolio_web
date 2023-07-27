import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

  emailjs.sendForm('service_vjiy1c1', 'template_nkuvbuh', form.current, 'Z30f8Zr3fZWDShyJB')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
  };

  return (
    <section id="contact" >
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>chauhanharsh643@gmail.com</h5>
            <a href="mailto:chauhanharsh643742@gmail.com" target='_blank'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messanger</h4>
            <h5>SinghChauhanHarsh</h5>
            <a href="https://m.me/" target='_blank'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+123456789</h5>
            <a href="https://api.whatsapp.com/send?phone+91 9235918366" target='_blank'>Send a Message</a>
          </article>
        </div>
        {/* End of contact option */}
        <form ref={form} onSubmit={sendEmail} action=''>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact