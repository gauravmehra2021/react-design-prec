import React from 'react'
import './CenterDiv.css'
import gym from '../../../public/images/gym.png'
import { FaWhatsapp } from "react-icons/fa";
const CenterDiv = () => {
    return (
        <div className='main'>
            <div className='center'>
                <div className='nav'>
                    <p>
                        treine.me
                    </p>
                    <ul>
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#' >About</a>
                        </li>
                        <li>
                            <a href='#'>Trainee</a>
                        </li>
                    </ul>

                </div>

                <div className='content'>
                    <div>
                        <h1>WORKOUTS MADE
                            <strong className='exclusive'> EXCLUSIVE </strong> FOR YOU!</h1>
                        <p>

                            We create   <strong > exclusive and unique workouts  </strong> for you.
                            Invest in your body and
                            <strong > get much more performance  </strong>
                            and quality of life.
                        </p>
                        <button>
                            <div className='btn-start'>

                                <span> <FaWhatsapp size={20} /> </span>
                                <span>Start now </span>
                            </div>

                        </button>

                    </div>
                    <div>
                        <img src={gym} />
                    </div>
                </div>

                <div className='footer'>
                    <p>send us a message <strong >  @treine.me  </strong></p>
                </div>



            </div>
        </div>
    )
}

export default CenterDiv
