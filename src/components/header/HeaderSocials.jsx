import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/harsh-chauhan-23625325b" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/chauhanharsh643" target='_blank'><BsGithub/></a>
        <a href="https://dribbble.com" target='_blank'><BsDribbble/></a>
    </div>
  )
}

export default HeaderSocials