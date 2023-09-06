import React from 'react'
import {ImLinkedin} from 'react-icons/im'
import {BsGithub} from 'react-icons/bs'
import {FaDribbbleSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <div className="headersocial__icon">
        <a href="http://linkedin.com" target="blank"><ImLinkedin/></a>
        </div>
        <a href="http://github.com" target="blank"><BsGithub/> </a>
        <a href="http://dribble.com" target="blank"><FaDribbbleSquare/> </a>
        
    </div>
  )
}

export default HeaderSocials