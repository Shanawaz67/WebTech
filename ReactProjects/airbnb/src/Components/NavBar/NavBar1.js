import React from 'react'
import airbnb from '../../Images/svgexport-1.svg'
import world from '../../Images/world.svg'
import menu from '../../Images/Menu.svg'
import contact from '../../Images/Contact.svg'
import { Link } from 'react-scroll'
import './NavBar.css'

const NavBar1 = () => {
  return (
    <nav className='navOfAirBnb'>
        <div className='AirBnbImg'>
            <Link href='https://www.airbnb.co.in/'><img src={airbnb} alt='airbnblogo' className='logo'/> </Link>
        </div>
        <div className='navOfAirBnbContent'>
            <button className='navBtn1'>Stays</button>
            <button className='navBtn1'>Experiences</button>
            <button className='navBtn1'><Link>Online Experiences</Link></button>
        </div>
        <div className='navLinkbtn'>
            <nav className='navLinkParent'>
                <Link className='airLink'>Airbnb your home</Link>
                <button className='worldbtn'><img src={world} alt='world' className='worldimg'/></button>
                <div className='navDivContact'>
                    <button className='navDivBtn'>
                        <img src={menu} alt='menu' className='menuImg'/>
                        <img src={contact} alt='contact' className='contactImg'/>
                    </button>
                </div>
            </nav>
        </div>
    </nav>
  )
}

export default NavBar1