import React from 'react'
import './IntroOfMe.css'
import bg from '../../Images/assets/me-removebg.png'
import btnImg from '../../Images/assets/hireme.png'
import { Link } from 'react-scroll'

const IntoOfMe = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Shanawaz</span> <br /> Java Full Stack Developer</span>
            <p className='introPara'>
                I am a skilled Java , Web Developer & Designer and Sql programmer as a Fresher <br />
                I can write the codes in Java , Develope & Design Web Pages and DataBase to.
            </p>
            <Link><button className='btn'><img src={btnImg} alt='HireMe' className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt='Profile' className='bg'/>
    </section>
  )
}

export default IntoOfMe