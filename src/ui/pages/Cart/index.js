import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import './cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, clearCart, decrementCart, removeFromCart } from '../../../redux/features/cartSlices'
import toast from 'react-hot-toast'

const Cart = () => {
    const { carts } = useSelector((state) => state.allCart);
    const dispatch = useDispatch();

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQty, setTotalQty] = useState(0);

// Count Total Price
    const totalAmount = () => {
        let total = 0;
        carts.map((e, id) => {
            total = e.price * e.qty + total
        });
        setTotalPrice(total);
    };

    // Count Total Cart Items
    const totalCartItems = () => {
        let total = 0;
        carts.map((e, id) => {
            total =  e.qty + total
        });
        setTotalQty(total);
    };

    useEffect(() => {
        totalAmount();
    }, [totalAmount]);

    useEffect(() => {
        totalCartItems();
    }, [totalCartItems])

    return (
        <>
            <div className='container-fluid bg-danger'>
                <Link to='/menu' className='text-decoration-none' href="#"> <h5 className='text-light fw-bold d-flex justify-content-center align-items-center py-2 pointer'>Free Delivery for all orders over Rs.350. Order your food now!</h5></Link>
            </div>
            <Navbar />
            <div className='row justify-content-center m-0'>
                <div className='col-md-8 mt-5 mb-5 cardsdetails'>
                    <div className='card'>
                        <div className='card-header bg-dark p-3'>
                            <div className='card-header-flex'>
                                <h5 className='text-white m-0'>Cart Calculation{carts.length > 0 ? `(${carts.length})` : ''}</h5>
                                {
                                    carts.length > 0 ? <button className='btn btn-danger mt-0 btn-sm' onClick={() => {dispatch(clearCart()); toast.success('Your Cart is Empty')}}><i class="fa-solid fa-trash"></i></button> : ''
                                }
                            </div>
                        </div>
                        <div className='card-body p-0'>
                            {carts.length === 0 ?
                                (<table className='table cart-table mb=0'>
                                    <tbody>
                                        <tr>
                                            <td colSpan={6}>
                                                <div className='cart-empty'>
                                                    <i class="fa-solid fa-trash"></i>
                                                    <p>Your Cart is Empty</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>) : (
                                    <table className='table cart-table mb-0 table-responsive-sm'>
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Qty</th>
                                                <th>Action</th>
                                                <th className='text-right'><span id='amount' className='amount'></span>Total Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                carts.map((data, index) => {
                                                    return (
                                                        <>
                                                            <tr key={index}>
                                                                <td className='product-img'><img src={data.image} alt="" /></td>
                                                                <td className='product-name'><p>{data.name}</p></td>
                                                                <td className='align-items-center'>${data.price}</td>
                                                                <td><div className='prdct-qty-container'>
                                                                    <button className='prdct-qty-btn' type='button' onClick={data.qty <= 1 ? () => {dispatch(removeFromCart(data.id)); toast.success('Item removed from the cart')} : () => dispatch(decrementCart(data))}><i class="fa-solid fa-minus"></i></button>
                                                                    <input className='qty-input-box' type="text" value={data.qty} disabled /><button className='prdct-qty-btn' type='button' onClick={() => dispatch(addToCart(data))}><i class="fa-solid fa-plus"></i></button></div></td>

                                                                <td className='ps-3'><button className='bg-warning border border-0 p-1' onClick={() =>{ dispatch(removeFromCart(data.id)); toast.success('Item Removed from the Cart')}}><i class="fa-solid fa-trash-can"></i></button></td>
                                                                <td className='text-center'>${data.qty * data.price}</td>
                                                            </tr>
                                                        </>
                                                    )
                                                })
                                            }
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>&nbsp;</th>
                                                <th colSpan={3}>&nbsp;</th>
                                                <th>Items in Cart <span className='ml-2 mr-2'>:</span> <span className='text-danger'>{totalQty}</span></th>
                                                <th className='text-right'>Total Price <span className='ml-2 mr-2'>:</span> <span className='text-danger'>{totalPrice.toFixed(2)}</span></th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                )}
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Cart