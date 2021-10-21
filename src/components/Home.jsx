import React from 'react'
import Products from './Products'

const Home = () => {
    return (
        <div className="hero">
            <div className="text-white border-0 card bg-dark">
                <img src="/assets/bg.jpg" className="card-img" alt="Background" height="550px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="contaienr">
                        <h5 className="mb-0 card-title display-3 fw-bolder">NEW SESSON ARRIVALS</h5> 
                        <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                    </div>

                </div>
            </div>
            <Products />
        </div>
    )
}

export default Home
