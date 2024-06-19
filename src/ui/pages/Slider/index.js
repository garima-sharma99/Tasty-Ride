import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/features/cartSlices';
import { Link } from 'react-router-dom';

const Slider = () => {
    const dispatch = useDispatch();

    // Add to Cart
    const sendToCart = (id) => {
        dispatch(addToCart(id));
        console.log('menu', id)
    }
    return (
        <>
        <div className='d-flex justify-content-end mt-3 me-5 '>
            <Link to='/menu'>
            <button className='bg-danger text-warning fw-bold fs-5 p-1 border border-0 rounded-pill'>View All</button>
            </Link>
        </div>
            <div id="carouselExampleControls" className="carousel slide mt-5 mb-5 " data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className='container-fluid d-flex'>

                            <div className="card " style={{ width: "21rem" }}>
                                <img style={{ height: "20rem" }} src="https://static.vecteezy.com/system/resources/previews/032/161/179/non_2x/delicious-burger-no-background-png.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4 className="card-title text-danger fw-bold text-center">Burger</h4>
                                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, doloribus!</p>
                                    <p className='text-center fw-bold text-danger'>Rs.89</p>
                                    <div className='d-flex justify-content-end '>
                                        <button className="btn btn-danger text-light fw-bolder" onClick={sendToCart}>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card " style={{ width: "21rem" }}>
                                <img style={{ height: "20rem" }} src="https://www.freeiconspng.com/thumbs/pizza-png/pizza-png-31.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-danger fw-bold text-center">Pizza</h5>
                                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, doloribus!</p>
                                    <p className='text-danger fw-bold text-center'>Rs.299</p>
                                    <div className='d-flex justify-content-end '>
                                        <button className="btn btn-danger text-light fw-bolder" onClick={sendToCart}>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card " style={{ width: "21rem" }}>
                                <img style={{ height: "20rem" }} src="https://static.vecteezy.com/system/resources/previews/021/344/437/original/pasta-isolated-on-a-transparent-background-png.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-danger fw-bold text-center">Pasta</h5>
                                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, doloribus!</p>
                                    <p className='text-danger fw-bold text-center'>Rs.150</p>
                                    <div className='d-flex justify-content-end '>
                                        <button className="btn btn-danger text-light fw-bolder" onClick={sendToCart}>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card " style={{ width: "21rem" }}>
                                <img style={{ height: "20rem" }} src="https://pngimg.com/d/sandwich_PNG65.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-danger fw-bold text-center">Sandwich</h5>
                                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, doloribus!</p>
                                    <p className='text-danger fw-bold text-center'>Rs.69</p>
                                    <div className='d-flex justify-content-start '>
                                        <button className="btn btn-danger text-light fw-bolder" onClick={sendToCart}>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        {/* <img src="..." className="d-block w-100" alt="..."> */}
                        <div className='container-fluid d-flex'>
                            <div className="card " style={{ width: "21rem" }}>
                                <img style={{ height: "20rem" }} src="https://pngimg.com/d/fries_PNG97884.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-danger fw-bold text-center">Fries</h5>
                                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, doloribus!</p>
                                    <p className='text-danger fw-bold text-center'>Rs.79</p>
                                    <div className='d-flex justify-content-end '>
                                        <button className="btn btn-danger text-light fw-bolder" onClick={sendToCart}>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card " style={{ width: "21rem" }}>
                                <img style={{ height: "20rem" }} src="https://www.kindpng.com/picc/m/3-36293_soft-drink-png-soft-drinks-in-glass-transparent.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-danger fw-bold text-center">Beverages</h5>
                                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, doloribus!</p>
                                    <p className='text-danger fw-bold text-center'>Rs.59</p>
                                    <div className='d-flex justify-content-end '>
                                        <button className="btn btn-danger text-light fw-bolder" onClick={sendToCart}>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card " style={{ width: "21rem" }}>
                                <img style={{ height: "20rem" }} src="https://i.pinimg.com/1200x/cf/c6/aa/cfc6aadbecd613f70e5a3f4dcdf89ffb.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-danger fw-bold text-center">Desserts</h5>
                                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, doloribus!</p>
                                    <p className='text-danger fw-bold text-center'>Rs.120</p>
                                    <div className='d-flex justify-content-end '>
                                        <button className="btn btn-danger text-light fw-bolder" onClick={sendToCart}>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card " style={{ width: "21rem" }}>
                                <img style={{ height: "20rem" }} src="https://freepngimg.com/save/159778-sweet-bar-candy-chocolate-free-download-png-hd/1000x664" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-danger fw-bold text-center">Sweets</h5>
                                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, doloribus!</p>
                                    <p className='text-danger fw-bold text-center'>Rs.49</p>
                                    <div className='d-flex justify-content-start '>
                                        <button className="btn btn-danger text-light fw-bolder" onClick={sendToCart}>Add to cart</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='container-fluid d-flex'>
                            <div className="card " style={{ width: "21rem" }}>
                                <img style={{ height: "20rem" }} src="https://pngimg.com/d/sandwich_PNG36.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-danger fw-bold text-center">Hot Dog</h5>
                                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, doloribus!</p>
                                    <p className='text-danger fw-bold text-center'>Rs.39</p>
                                    <div className='d-flex justify-content-end '>
                                        <button className="btn btn-danger text-light fw-bolder" onClick={sendToCart}>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card " style={{ width: "21rem" }}>
                                <img style={{ height: "20rem" }} src="https://www.pngall.com/wp-content/uploads/14/Happy-Meal-PNG.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-danger fw-bold text-center">Happy Meals</h5>
                                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, doloribus!</p>
                                    <p className='text-danger fw-bold text-center'>Rs.299</p>
                                    <div className='d-flex justify-content-end '>
                                        <button className="btn btn-danger text-light fw-bolder" onClick={sendToCart}>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card " style={{ width: "21rem" }}>
                                <img style={{ height: "20rem" }} src="https://www.pngkey.com/png/detail/70-709043_chicken-nuggets-chicken-nugget.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-danger fw-bold text-center">Nuggets</h5>
                                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, doloribus!</p>
                                    <p className='text-danger fw-bold text-center'>Rs.69</p>
                                    <div className='d-flex justify-content-end '>
                                        <button className="btn btn-danger text-light fw-bolder" onClick={sendToCart}>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card " style={{ width: "21rem" }}>
                                <img style={{ height: "20rem" }} src="https://www.kindpng.com/picc/m/138-1384990_indian-veg-thali-png-transparent-png.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-danger fw-bold text-center">Veg Thali</h5>
                                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, doloribus!</p>
                                    <p className='text-danger fw-bold text-center'>Rs.99</p>
                                    <div className='d-flex justify-content-start '>
                                        <button className="btn btn-danger text-light fw-bolder" onClick={sendToCart}>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <img src="..." className="d-block w-100" alt="..."> */}
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bg-danger" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon bg-danger" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Slider