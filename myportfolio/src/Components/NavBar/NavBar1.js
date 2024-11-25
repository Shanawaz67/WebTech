import React from 'react'
import './navBar.css'
import logo from '../../Images/assets/logo.png'
import {Link} from 'react-scroll';
import contactImg from '../../Images/assets/contact.png'

const NavBar1 = () => {
  return (
    <nav className='navBar'>
        <img src={logo} alt="logo" className='logo'/>
        <div className='desktopMenu'>
            <Link className='desktopMenuListItem'>Home</Link>
            <Link className='desktopMenuListItem'>About</Link>
            <Link className='desktopMenuListItem'>Portfolio</Link>
            <Link className='desktopMenuListItem'>My Education</Link>
            <Link className='desktopMenuListItem'>My Projects</Link>
            
        </div>
        <button className='desktopMenuBtn'>
            <img src={contactImg} alt="contact" className='desktopMenuImg'/>Contact Me
        </button>
    </nav>
  )
}
export default NavBar1