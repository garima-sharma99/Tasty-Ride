import React from 'react'
import Navbar from '../Navbar'
import Slider from '../Slider'
import Footer from '../Footer'
import Scroll from '../../../customComponent/Scroll Button'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <>
            <div className='container-fluid bg-danger'>
                <Link to='/menu' className='text-decoration-none' href="#"> <h5 className='text-light fw-bold d-flex justify-content-center align-items-center py-2 pointer'>Free Delivery for all orders over Rs.350. Order your food now!</h5></Link>
            </div>
            <Navbar />

            <div className="d-flex justify-content-evenly border-bottom border-3 border-danger p-5 bg-warning">
                <div className="w-75">
                    <div className='d-flex justify-content-center text-center '>

                        <h1 className='text-danger fw-bolder text-uppercase text-wrap w-75 mt-5 mb-5 border border-danger border-4 rounded-pill fs-2 p-2'>Hot, Fresh, and Crispy—Fast Delivery!</h1>
                    </div>
                    <div className='d-flex justify-content-center'>
                      <Link to='/menu'>  <button className='front-button bg-danger text-warning fw-bold p-2 px-3 border-0 rounded-3 fs-4'>Order Now</button> </Link>
                    </div>
                </div>
                <div className="w-100">
                    <img className='img-fluid border rounded-circle' style={{width:'1000px', height:'550px'}} src="https://media.istockphoto.com/id/997678310/photo/whats-better-than-pizza-with-friends.jpg?s=612x612&w=0&k=20&c=dqp-e2hDjTU8UrA8V8XV8bFwshZhnIdjnz_L4_o_hbk=" alt=''/>
                </div>
            </div>

            <Slider />
            <Footer />

            <Scroll/>
        </>
    )
}

export default HomePage