import React from 'react'
import './about.css';
import ME from "../../assets/me_about.jpg";
import {FaAward} from "react-icons/fa";
import {CgOrganisation} from "react-icons/cg";
import {VscFolderLibrary} from "react-icons/vsc";

const About = () => {
  return (
    <section id = "about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small> 1+ Years Coding</small>
            </article>

            <article className='about__card'>
              <CgOrganisation className='about__icon'/>
              <h5>Companies</h5>
              <small> Amazon, Deloitte...</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small> 50+ Completed</small>
            </article>

          </div>

          <p>
          - Enthusiastic Full Stack Developer <br></br>
          - Economics and Finance Master Degree from University College London <br></br>
          - Retail Vendor Manager at Amazon <br></br>
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About