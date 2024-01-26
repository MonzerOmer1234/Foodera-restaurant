import React from 'react'
import './Foods.css'
import Pizza from './../../assets/imgs/pizza.jpg'
import Burger from './../../assets/imgs/burger.jpg'
import Sweet from './../../assets/imgs/sweet.jpg'

const Foods = () => {
  return (
    <div id='foods'>
     <section className="mt-5 d-flex justify-content-center align-items-start">
     <div className="container">
        <div className="text-center explore-foods">
            
        <h2>Explore Our Foods</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
        </div>
        </div>
        </section>
        <div className="container">
        <div className="row mt-3">
        
            <div className="col-lg-4 d-flex flex-column justify-content-center align-items-start">
                <div className=' food-div'>
                <img src={Pizza} alt="pizza" className='img-fluid rounded-1' />
                <div >
                <h5>Rainbow Vegetable Sandwich</h5>
                <p className='time'>Time: 15 - 20 Minutes | Serves: 1</p> 
                <span className='food-note fw-bold mb-3 d-block'><span>$10.50</span> <del>$11.70</del></span>
                </div>
                </div>
                
                <button className='my-3'>Order Now</button>

            </div>
            <div className="col-lg-4 d-flex flex-column justify-content-center align-items-start">
                <div className=' food-div'>
                <img src={Burger} alt="pizza" className='img-fluid rounded-1' />
                <div >
                <h5>Vegetarian Burger</h5>
                <p className='time'>Time: 30 - 45 Minutes | Serves: 1</p> 
                <span className='food-note fw-bold mb-3 d-block'><span>$9.20</span> <del>$10.50</del></span>
                </div>
                </div>
                
                <button className='my-3'>Order Now</button>

            </div>
            <div className="col-lg-4 d-flex flex-column justify-content-center align-items-start">
                <div className=' food-div'>
                <img src={Sweet} alt="pizza" className='img-fluid rounded-1' />
                <div >
                <h5>Raspberry Stuffed French Toast</h5>
                <p className='time'>Time: 10 - 15 Minutes | Serves: 1</p> 
                <span className='food-note fw-bold mb-3 d-block'><span>$12.50</span> <del>$13.20</del></span>
                </div>
                </div>
                
                <button className='my-3'>Order Now</button>

            </div>
        </div>
        </div>
        </div>
  
  
  )
}

export default Foods