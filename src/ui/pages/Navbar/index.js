import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();
    const { carts } = useSelector((state) => state.allCart)
    
    return (
        <>
            <div className='border-bottom border-2 '>

                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <Link to='/' className='text-decoration-none'>
                            <div className='nav-logo bg-danger border rounded-circle'>
                                <h2 className='text-warning fw-bolder p-3'>TasTy RiDe</h2>
                            </div>
                        </Link>
                        <ul className="navbar-nav d-flex flex-row me-5">
                            <li className="nav-item mx-4">
                                <Link className={location.pathname === '/home' ? 'nav-link active fs-3' : 'nav-link fs-4'} aria-current="page" to="/home"><i className="fa-solid fa-house"></i></Link>
                            </li>
                            
                            <li className="nav-item mx-4">
                                <Link className={location.pathname === '/menu' ? 'nav-link active fs-3' : 'nav-link fs-4'} to="/menu"><i className="fa-solid fa-utensils"></i></Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link className={location.pathname === '/cart' ? 'nav-link active fs-3' : 'nav-link fs-4'} to="/cart">
                                    <div id='ex4'><span className='p1 fa-stack has-badge' data-count={carts.length}><i className="fa-solid fa-cart-shopping"></i></span></div></Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link className={location.pathname === '/signin' ? 'nav-link active fs-3' : 'nav-link fs-4'} to="/signin"><i className="fa-solid fa-user"></i></Link>
                            </li>
                            

                        </ul>
                    </div>
                    {/* </div> */}
                </nav>
            </div>

        </>
    )
}

export default Navbar