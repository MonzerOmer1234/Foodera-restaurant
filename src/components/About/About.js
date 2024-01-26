import React from 'react'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import foodOffer from './../../assets/imgs/food-offer.png'

const About = () => {
  return (
   <div id='about'>
    <div className="container">
    <section className='mt-5'>
        <div className="row">
            <div className="col-lg-6">
                <h2>We make everything by hand with the best possible ingredients.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <ul className="offer list-unstyled ">
                 <li><FontAwesomeIcon icon={faCheck} className=' position-relative ' />Etiam sed dolor ac diam volutpat.</li>
                 <li><FontAwesomeIcon icon={faCheck} className=' position-relative '/>Erat volutpat aliquet imperdiet.</li>
                 <li><FontAwesomeIcon icon={faCheck} className=' position-relative '/>purus a odio finibus bibendum.</li>
                </ul>

            </div>
            <div className="col-lg-6">
              <img src={foodOffer} alt="" className='img-fluid' />
            </div>
        </div>
    </section>

    </div>
    <section className="story mt-5 d-flex justify-content-center align-items-center">
        <div className="text-center">
            <h2 className='mb-3'>When a man's stomach is full it makes no difference whether he is rich or poor.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
        </div>
    </section>
   </div>
  )
}

export default About