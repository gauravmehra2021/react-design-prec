import React from 'react'
import "./Designer.css"
import right from '../../../public/images/right.png'
import Group1 from '../../../public/images/Group1.png'
import Group2 from '../../../public/images/Group2.png'
import Group6 from '../../../public/images/Group6.png'
import coarse from '../../../public/images/coarse.png'

import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";

const Designer = () => {
    return (
        <div className='main'>
            <div className='container'>

                <header>
                    <div className='header-wraper'>

                        <p className='logo'>
                            SaulDesign
                        </p>
                        <ul className='nav-element'>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>About Me</a></li>
                            <li><a href='#'>Contact</a></li>
                        </ul>
                    </div>
                </header>


                <section>
                    <div className='banner-wraper'>
                        <div className='content-part'>
                            <div className='content-inner'>

                                <img src={right} />
                                <div>

                                    <p>CREATIVE UI <span>DESIGNER</span> </p>

                                    <div className='button-wrapper'>
                                        <button className='hire'>
                                            Hire me
                                        </button>

                                        <button className='download'>
                                            Download CV
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='image-part'>
                            <div className='image-inner'>
                                <div className='group2'>

                                    <img src={Group2} />
                                </div>
                            </div>
                        </div>

                    </div>

                </section>


                <section className='about'>
                    <div className='about-wraper'>

                        <div className='about-content-main'>
                            <div className='about-content'>

                                <p className='about-heading'>About <span>Me</span> </p>
                                <p className='about-dis'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                    Curabitur tempus urna at turpis condimentum lobortis.... Read more</p>
                            </div>

                        </div>
                        <div className='about-Image-main'>
                            <div className='about-Image'>
                                <img src={Group6} />

                            </div>

                        </div>
                    </div>

                </section>


                <section className='product'>

                    <div className='product-wraper'>


                        <div className='product-content'>
                            <p className='product-heading'>My recent <span> works</span> </p>


                            <div className='product-button-wrapper'>
                                <button className='All'>
                                    All
                                </button>

                                <button className='ui'>
                                    UI
                                </button>
                                <button className='ui'>
                                    UX
                                </button>
                                <button className='ui'>
                                    Web Design
                                </button>
                            </div>

                            <div className='card-container'>
                                <div className='card'>

                                    <img src={coarse} />
                                </div>
                                <div className='card'>
                                    <img src={coarse} />
                                </div>
                                <div className='card'>
                                    <img src={coarse} />
                                </div>

                            </div>
                        </div>

                    </div>

                </section>


                <section className='contact'>
                    <div className='contact-wraper'>
                        <div className='contact-texts'>

                            <p className='contact-heading'> Got a project <span>in mind?</span> </p>

                            <div className='contact-images'>
                                <img src={right} />
                                <img src={Group1} />
                            </div>
                        </div>

                        <div className='contact-form'>
                            <div className='contact-items'>

                                <div className='main-form'>
                                    <div className='form-lables'>
                                        <label href="name"> Name</label>
                                        <input type='text' placeholder='name' id='name' className='name' />
                                    </div>

                                    <div className='form-lables'>


                                        <label href="email"> Email</label>
                                        <input type='text' placeholder='email' id='email' className='email' />
                                    </div>

                                    <div className='form-lables'>

                                        <label href="message"> Message</label>
                                        <input type='area' placeholder='Message' id='message' className='message' />
                                    </div>
                                </div>
                                <button className='Send-Message'>
                                    Send Message
                                </button>
                            </div>

                        </div>
                    </div>
                </section>


                <footer>

                    <div className='footer-wraper'>
                        <div className='footer-content'>
                            <div className='footer-navs'>
                                <div className='icon-flex'>
                                    <CiSearch color='white' size={25} />
                                    <a href='#'>Home</a>
                                </div>

                                <div className='icon-flex'>
                                    <CgProfile color='white' size={25}/>
                                    <a href='#'>About Me</a>
                                </div>
                                <div className='icon-flex'>
                                    <FaRegHeart color='white' size={25} />
                                    <a href='#'>Contact</a>
                                </div>

                            </div>

                            <div className='footer-icons'>
<div className='icon-back'>
                                    <FaRegHeart color='white' />
                                </div>
                                <div className='icon-back'>
                                    <CgProfile color='white' />
                                </div>
                                <div className='icon-back' >
                                    <FaRegHeart color='white' />
                                </div>
                            </div>


                          

                        </div>


                    </div>
                          <div className='footer-text'>
                            <p>

                                Terms of Service - Privacy Policy
                            </p>
                            </div>
                </footer>



            </div>
        </div>
    )
}

export default Designer
