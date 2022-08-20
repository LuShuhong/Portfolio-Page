import React from 'react'
import "./header.css";
import CTA from './CTA';
import ME from '../../assets/pic.png'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I am</h5>
        <h1>Shuhong Lu</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>

        <div className="me">
          <img src={ME} alt="myself" />
        </div>
      </div>
    </header>
  )
}

export default Header
