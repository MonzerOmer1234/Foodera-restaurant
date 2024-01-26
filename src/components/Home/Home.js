import React from 'react'
import Header from './Header'
import './Home.css';
import food from '../../assets/imgs/food.png'

const Home = () => {
  return (
    <>
        <Header/>
        <section className="numbers h-auto text-center text-md-start ">
          <div className="container">
            <div className="row">
              <div className="col-md-3 mb-3">
                <h2 className=' fs-1 fw-bold'>1287+</h2>
                <h6 className=' text-uppercase fw-bold '>Savings</h6>
              </div>
              <div className="col-md-3 mb-3">
                <h2 className=' fs-1 fw-bold '>5786+</h2>
                <h6 className=' text-uppercase fw-bold '>Photos</h6>
              </div>
              <div className="col-md-3 mb-3">
                <h2 className=' fs-1 fw-bold '>1440+</h2>
                <h6 className=' text-uppercase fw-bold '>Rockets</h6>
              </div>
              <div className="col-md-3 mb-3">
                <h2 className=' fs-1 fw-bold '>7110+</h2>
                <h6 className=' text-uppercase fw-bold '>Globes</h6>
                
              </div>
            </div>
            </div>
           </section>
           <section className="pride mt-5">
              <div className="container">
                <div className="row justify-content-center align-items-center">
                  <div className="col-md-6  ">
                    <img src={food} alt="" className=' img-fluid  rounded-1'  />
                  </div>
                  <div className="col-md-6">
                   <h2 className='mt-3'>We pride ourselves on making real food from the best ingredients.</h2>
                   <p className='  lorem mb-1'>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
                   </p>
                   <button className='learn-more'>Learn More</button>
                  </div>
                </div>
              </div>
            </section>
          
           
    </>
  )
}

export default Home