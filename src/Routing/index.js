import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../ui/pages/HomePage'
import Menu from '../ui/pages/Menu'
import SignUp from '../ui/pages/SignUp Form'
import Cart from '../ui/pages/Cart'
import Login from '../ui/pages/Login'

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/signin' element={<SignUp />} />
                <Route path='/home' element={<HomePage />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </>
    )
}

export default Routing