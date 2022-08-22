import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs';

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__option">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <a href="mailto:ukshuhong@gmail.com" target="_blank">Send an email</a>
          </article>
          <article className="contact__option">
            <BsLinkedin />
            <h4>Linkedin</h4>
            <a href="https://www.linkedin.com/in/shuhong-lu" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <a href="https://wa.me/447477028979" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
      </div>
    </section>
  )
}

export default Contact