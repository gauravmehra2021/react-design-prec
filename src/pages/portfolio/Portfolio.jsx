import React from 'react'
import "./Portfolio.css"
import herophoto from '../../../public/images/herophoto.png'
import sponser from '../../../public/images/sponser.png'
import Mask from '../../../public/images/Mask.png'
import Mask1 from '../../../public/images/Mask1.png'
import Mask2 from '../../../public/images/Mask2.png'
import Client from '../../../public/images/Client.png'
import Maskgroup from '../../../public/images/Maskgroup.png'
import Maskgroup1 from '../../../public/images/Maskgroup1.png'


import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
const Portfolio = () => {
    return (
        <div className='main'>

            <div className='main-wraper'>


                <header >
                    <div className='header-wraper'>
                        <nav className='nav-items'>
                            <ul>
                                <li><a href='#'> Home</a></li>
                                <li><a href='#'> Case Studies</a></li>
                                <li><a href='#'> Testimonials</a></li>
                                <li><a href='#'>Recent work</a></li>
                                <li><a href='#'> Get In Touch</a></li>
                                <li className='nav-icons'>
                                    <FaRegHeart size={20} />
                                    <CgProfile size={20} />
                                    <FaRegHeart size={20} />

                                </li>
                            </ul>
                        </nav>


                    </div>

                </header>

                <section>
                    <div className='hero-wraper'>
                        <div className='hero'>
                            <div className='hero-content'>
                                <p className='heading'>Your Name Here</p>
                                <p className='dis'>Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <button className='hero-button'>
                                    Let’s get started
                                </button>

                            </div>
                            <div className='hero-image'>
                                <img src={herophoto} />
                            </div>
                        </div>

                        <div className='Worked'>
                            <p>Worked with</p>
                        </div>

                        <div className='hero-muli-button'>
                            <img src={sponser} />
                            <img src={sponser} />
                            <img src={sponser} />
                            <img src={sponser} />
                            <img src={sponser} />
                        </div>

                    </div>

                </section>
            </div>


            <section>

                <div className='case'>
                    <div className='case-wraper'>
                        <div className='case-topic-heading'>
                            <div className='case-hero'>

                                <p className='case-topic-title'>
                                    Case Studies</p>
                                <p className='case-topic-dis'>Solving user & business problems since last 15+ years.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Fintech</p>
                            </div>

                        </div>


                        <div className='main-cases'>
                            <div className='cases-content'>
                                <p className='fintech'> Fintech</p>
                                <p className='cases-heading'> Work name here</p>
                                <p className='cases-dis'> Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

                                <button className='case-button'>View case study</button>

                            </div>
                            <div className='cases-image'>
                                <img src={Mask} />
                            </div>
                        </div>

                        <div className='main-cases'>
                            <div className='cases-image'>
                                <img src={Mask1} />
                            </div>
                            <div className='cases-content'>
                                <p className='fintech1'> Fintech</p>
                                <p className='cases-heading'> Work name here</p>
                                <p className='cases-dis'> Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

                                <button className='case-button1'>View case study</button>

                            </div>

                        </div>

                        <div className='main-cases'>
                            <div className='cases-content'>
                                <p className='fintech2'> Fintech</p>
                                <p className='cases-heading'> Work name here</p>
                                <p className='cases-dis'> Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

                                <button className='case-button2'>View case study</button>

                            </div>
                            <div className='cases-image'>
                                <img src={Mask2} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>

                <br />
                <br />
                <br />
                <br />

                <div className='testimonials-wraper'>

                    <div className='testimonials-topic-heading'>
                        <div className='testimonials-hero'>

                            <p className='testimonials-topic-title'>
                                Case Studies</p>
                            <p className='testimonials-topic-dis'>Solving user & business problems since last 15+ years.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Fintech</p>
                        </div>

                    </div>


                    <div className='testimonials-main-conatainer'>

                        <div className='testimonials-cards'>
                            <div className='testimonials-flex'>
                                <p className='testimonials-dis'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                                <div className='image-section'>
                                    <img src={Client} />
                                    <p className='client'>Client Name</p>
                                </div>
                            </div>
                        </div>
                        <div className='testimonials-cards'>
                            <div className='testimonials-flex'>
                                <p className='testimonials-dis'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                                <div className='image-section'>
                                    <img src={Client} />
                                    <p className='client'>Client Name</p>
                                </div>
                            </div>
                        </div>
                        <div className='testimonials-cards'>
                            <div className='testimonials-flex'>
                                <p className='testimonials-dis'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                                <div className='image-section'>
                                    <img src={Client} />
                                    <p className='client'>Client Name</p>
                                </div>
                            </div>
                        </div>
                        <div className='testimonials-cards'>
                            <div className='testimonials-flex'>
                                <p className='testimonials-dis'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                                <div className='image-section'>
                                    <img src={Client} />
                                    <p className='client'>Client Name</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                </div>



            </section>


       <section>
        <div className='recent-wraper'>
             <div className='recent-main'>
 <div className='testimonials-topic-heading'>
                            <div className='testimonials-hero'>

                                <p className='case-topic-title'>
                                    Recent Work</p>
                                <p className='testimonials-topic-dis'>Solving user & business problems since last 15+ years.
                                    Solving user & business problems since last 15+ years. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                            
                    </div>

                    <div className='recent-container'>

                         <div className='recent-cards'>
                             <div className='recent-inner-section'>

                                  <img src={Maskgroup}/>

                                     <div className='cases -content'>
                                                            <p className='cases-heading'> Work name here</p>
                                    <p className='cases-dis'> Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                        
                                <button className='case-button'>View case study</button>
                                    
                            </div>
                             </div>
                         </div>

                          <div className='recent-cards'>
                             <div className='recent-inner-section'>

                                  <img src={Maskgroup1}/>

                                     <div className='cases -content'>
                                                            <p className='cases-heading'> Work name here</p>
                                    <p className='cases-dis'> Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                        
                                <button className='case-button'>View case study</button>
                                    
                            </div>
                             </div>
                         </div>
                    </div>
                
             </div>
        </div>
       </section>










        </div>
    )
}

export default Portfolio
