import React from 'react'
import './Creative.css'
import pexels from '../../../public/images/pexels.png'
import Rectangle from '../../../public/images/Rectangle.png'
import phom from '../../../public/images/phom.png'
import { MdEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Creative = () => {
   return (
      <div className='main'>



         <div className='navbar'>

            <div className='logo'>
               Madelyn Torff
            </div>

            <div className='nav-item'>
               <ul>
                  <li>
                     <a href='#'>Home</a>
                  </li>
                  <li>
                     <a href='#'>About Us</a>
                  </li>
                  <li>
                     <a href='#'>Contact</a>
                  </li>
               </ul>
            </div>
         </div>


         <div className='banner'>

            <div className='banner-content'>
               <p className='banner-title'>UI/UX Designer</p>



               <h1 className='banner-heading'>Hello,  my name is Madelyn Torff</h1>

               <p className='banner-dis'>
                  Short text with details about you, what you do or your professional career. You can add more information on the about page.
               </p>


               <div className='button-main'>
                  <button className='projects-button'>
                     Projects
                  </button>
                  <button className='LinkedIn-button'>
                     LinkedIn
                  </button>
               </div>
            </div>

            <div className='banner-image'>

            </div>

         </div>



         <div className='Projects'>
            <p>Projects</p>


         </div>
         <div className='main-projects'>
            <div className='projectContainer'>
               <div className='firstProject'>
                  <p className='first-project-title'>Project Name</p>
                  <p className='first-project-dis'>
                     Short text with details about you, what you do or your professional career. You can add more information on the about page.
                  </p>

                  <button className='first-project-button'>
                     View Project
                  </button>


               </div>
               <div className='first-project-image'>
                  <img src={pexels} />
               </div>


            </div>
         </div>





<div className='main-projects'>
            <div className='projectContainer'>
             
               <div className='first-project-image-2'>
                  <img src={Rectangle} />
               </div>

  <div className='firstProject'>
                  <p className='first-project-title'>Project Name</p>
                  <p className='first-project-dis'>
                     Short text with details about you, what you do or your professional career. You can add more information on the about page.
                  </p>

                  <button className='first-project-button'>
                     View Project
                  </button>


               </div>

            </div>
         </div>



   <div className='main-projects'>
            <div className='projectContainer'>
               <div className='firstProject'>
                  <p className='first-project-title'>Project Name</p>
                  <p className='first-project-dis'>
                     Short text with details about you, what you do or your professional career. You can add more information on the about page.
                  </p>

                  <button className='first-project-button'>
                     View Project
                  </button>


               </div>
               <div className='first-project-image'>
                  <img src={phom} />
               </div>


            </div>
         </div>



<div className='footer'>

<div className='icons'>

<div> <MdEmail size={45}/></div>
<div> <FaInstagramSquare size={40} /></div>
<div> <FaLinkedin size={40}/></div>
</div>

<p className='first-project-dis'> Madelyn Torff 2021 </p>


</div>
      </div>
   )
}

export default Creative
