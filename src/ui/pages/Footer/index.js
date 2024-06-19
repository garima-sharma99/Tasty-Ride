import React from 'react'

const Footer = () => {
    return (
        <>
            <div>
                <div className="container-fluid bg-dark">
                    <div className='container d-flex'>
                        <div className='text_heading text-light'>
                            <h1 className='fw-bold text-wrap text-start mt-5'>Delicious Burger & French Fry</h1>
                            <p className='fw-bold mt-4 text-center me-5 mt-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, unde.</p>
                        </div>
                        <div>
                            <img src="https://img.freepik.com/free-photo/grilled-burger-french-fries-food-generative-ai_188544-8516.jpg" alt=''/>
                        </div>
                    </div>
                </div>
                <div className='container-fluid d-flex justify-content-between footer-logo'>
                    <div className='bg-danger border rounded-circle mt-2'>
                        <h2 className='text-warning fw-bolder p-3'>TasTy RiDe</h2>
                    </div>
                    <div className='d-flex footer-copy'>
                        <p className='text-danger fw-bold me-5 mt-2'>
                            &#169; ALL RIGHTS RESERVED
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer