import './Navbar.css'

import logo from '../../../public/images/Logo.png'
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BsBrowserEdge } from "react-icons/bs";

import { FaLinkedin } from "react-icons/fa";

const Navbars = () => {
  return (
    <div className="main">
      <div className='navbar' >

        <div className='logo'>
          <img className='logo-img' src={logo} />
        </div>

       
        <div className='navitem'>
          <ul>
            <li>
              <a href='#'> Home</a>
            </li>
            <li>
              <a href='#'> About</a>
            </li>
            <li>
              <a href='#'> Blog</a>
            </li>
             <li>
              <a href='#'> studio</a>
            </li>
            <li>

              <a href='#'> Contact</a>
            </li>
          
          </ul>


        </div>
            <div className='profile'>
       <ul>
          <li>

              <a href='#'> <FaInstagram /></a>
            </li>
            <li>

              <a href='#'> <FaGithub /> </a>
            </li>
            <li>

              <a href='#'> <BsBrowserEdge /></a>
            </li>
            <li>

              <a href='#'> <FaLinkedin /></a>
            </li>
       </ul>
        </div>
        
      

      </div>

    </div>
  )
}

export default Navbars


