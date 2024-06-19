import React, { useState } from 'react'
import { foodMenu } from '../../../api/MenuData'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Scroll from '../../../customComponent/Scroll Button'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/features/cartSlices'
import toast from 'react-hot-toast'


const Menu = () => {
    const dispatch = useDispatch();


    // Add to Cart
    const sendToCart = (id) => {
        dispatch(addToCart(id));
        toast.success('Item added to cart')
    }
    return (
        <>
            <div className='container-fluid bg-danger'>
                <a className='text-decoration-none' href="#"> <h5 className='text-light fw-bold d-flex justify-content-center align-items-center py-2 pointer'>Free Delivery for all orders over Rs.350. Order your food now!</h5></a>
            </div>
            <Navbar />
            <div className='container-fluid d-flex mb-5'>
                <div className="row">
                    {
                        foodMenu.map((index, id) => (
                            <div className="col-md-3" key={id}>
                                <div className="card mt-3" style={{ width: "18rem" }}>
                                    <img style={{ height: "20rem" }} src={index?.image} className="card-img-top pt-3 px-2" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title text-danger fw-bold text-center">{index?.name}</h5>
                                        <p>{index?.description}</p>
                                        <p className='text-warning fw-bolder'>{index?.price}</p>

                                        <button className="btn btn-danger text-light fw-bolder" onClick={() => sendToCart(index)} >Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        ))

                    }
                </div>
            </div>

            <Footer />
            <Scroll />

        </>
    )
}

export default Menu