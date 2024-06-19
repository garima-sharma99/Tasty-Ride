import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {

    const [userInfo, setUserInfo] = useState({ userName: '', password: '' });
    const [errors, setErrors] = useState({});
    const [pwdVisible, setPwdVisible] = useState(false);
    const navigate = useNavigate();



    const handleInputChange = (e) => {

        let { name, value } = e.target
        setUserInfo({ ...userInfo, [name]: value });

        let err = { ...errors };
        if (name === 'userName') {

            if (value.length < 2) {
                err.userName = 'Invalid Username';
            } else {
                delete err.userName;
            };
        };
        if (name === 'password') {

            if (value.length <= 5) {
                err.password = 'Required Strong Password';
            } else {
                delete err.password;
            };
        };

        setErrors(err);
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        let err = { ...errors }


        if (userInfo.userName.length === 0) {
            err.userName = 'Name must be required';
        };

        if (userInfo.password.length === 0) {
            err.password = 'Password must be required';
        };

        setErrors(err);
        if (Object.keys(err).length === 0) {
            navigate('/home')
        };
    };



    return (
        <>
            <div className='container-fluid bg-danger'>
                <Link className='text-decoration-none' to='/menu'> <h5 className='text-light fw-bold d-flex justify-content-center align-items-center py-2 pointer'>Free Delivery for all orders over Rs.350. Order your food now!</h5></Link>
            </div>


            <div className="container-fluid mb-5">

                <div className="wrapper d-flex w-100">
                    <div className='border-0 w-25 mx-5 mt-5'>

                        <div className="mb-3">
                            <label htmlFor="Username">Enter Username</label>
                            <input type="text" className='form-control' name='userName' id="userName" placeholder='Enter Username' onChange={handleInputChange} value={userInfo.userName} />
                            {errors.userName ? <p className='text-danger'>{errors.userName}</p> : null}

                        </div>
                        <div className="mb-3">
                            <label htmlFor="Password">Password</label>
                            <input type={pwdVisible ? 'text' : 'password'} className="form-control" id="password" name='password' placeholder='Enter Password' onChange={handleInputChange} value={userInfo.password} />
                            <i className={pwdVisible ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'} onClick={() => setPwdVisible(!pwdVisible)} />
                            {errors.password ? <p className='text-danger'>{errors.password}</p> : null}

                        </div>

                        <button type="submit" className="btn btn-danger text-warning fw-bolder mx-5 mt-3 fs-5" onClick={handleSubmit}>Submit</button>
                        <div className='mt-3'>
                            <p>Didn't Sign Up? <Link to='/signin'>Sign In</Link></p>
                        </div>

                    </div>

                    <div className="login-img d-flex">
                        <img className='img-fluid sign-img' src="https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1000&format=pjpg&exif=0&iptc=0" alt="" />
                    </div>
                    <div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Login