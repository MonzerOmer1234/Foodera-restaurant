import React from 'react'
import './Header.css'


const Header = () => {
  return (
    <header id='home' className='w-100 text-start' >
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2 className=' fw-bold '>Good food choices are good investments.</h2>
                    <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus animi tenetur voluptas beatae totam hic accusantium modi laboriosam. Voluptatum, ullam amet sed consectetur vitae neque totam quam libero! Labore, inventore.</p>
                    <button className='fw-bold text-uppercase'>Order Now</button>
                    <button className='fw-bold text-uppercase bg-white text-black'>Learn More</button>
                    </div>
                    <div className="col-md-6">
                      
                      </div>

            </div>
        </div>
    </header>
  )
}

export default Header