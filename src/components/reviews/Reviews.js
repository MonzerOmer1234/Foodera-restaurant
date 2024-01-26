

import React from 'react'
import './Reviews.css'
import Carousel from 'react-bootstrap/Carousel';
import ReviewOne from './../../assets/imgs/review-1.jpg'



function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark" className='testi'>
      <Carousel.Item className='testi-item d-flex mt-3'>
      <img
          className="d-block"
          src={ReviewOne}
          alt="First Review"
          style={{width : '100px' , height : '100px' , borderRadius : '50%' , margin : 'auto' , position : 'relative' , top : '-70px' }}
        />
        <Carousel.Caption>
          <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."</p>
          <h5 className=' fst-italic '>Simab Dave - Web Designer</h5>
        </Carousel.Caption>
      </Carousel.Item>
   
    </Carousel>
  );
}
const Reviews = () => {
  return (
    <div id='reviews' className='mt-5'>
      <div className="container">
        <div className='d-flex flex-column justify-content-start align-items-center' style={{height : '700px'}}>
        <h2 className=' text-center text-white mt-5 mb-5'>Testimonials</h2>
        <DarkVariantExample/>
        
        
        </div>
      </div>
    </div>
  )
}

export default Reviews