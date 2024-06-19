import React, { useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Scroll from '../../../customComponent/Scroll Button'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [signupData, setSignupData] = useState({ username: '', email: '', phone: '', password: '', cnfPassword: '', terms: false });

    const [pwdVisible, setPwdVisible] = useState(false);
    const [cnfPwdVisible, setCnfPwdVisible] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();



    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const pwdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm

    const handleInputChange = (e) => {
        let { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            value = checked;
        };

        setSignupData(prevState => {
            const newState = { ...prevState, [name]: value };
            
            let err = {};
      
            if (name === 'username' && value.length < 2) {
              err.username = 'Invalid Name';
            }
      
            if (name === 'email' && !emailRegex.test(value)) {
              err.email = 'Invalid Email';
            }
      
            if (name === 'phone' && value.length < 10) {
              err.phone = 'Invalid Phone Number';
            }
      
            if (name === 'password') {
              if (!pwdRegex.test(value)) {
                err.password = 'Invalid Password';
              } else if (newState.cnfPassword && newState.cnfPassword !== value) {
                err.cnfPassword = 'Passwords do not match';
              }
            }
      
            if (name === 'cnfPassword' && newState.password !== value) {
              err.cnfPassword = 'Passwords do not match';
            }
      
            if (name === 'terms' && !value) {
              err.terms = 'Accept terms & conditions';
            }
      
            setErrors(err);
            return newState;
          });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        let err = {};

        if (signupData.username.length === 0) {
            err.username = 'Name must be required';
          }
          if (signupData.email.length === 0) {
            err.email = 'Email must be required';
          }
          if (signupData.phone.length === 0) {
            err.phone = 'Phone must be required';
          }
          if (signupData.password.length === 0) {
            err.password = 'Password must be required';
          }
        //   if (signupData.password !== signupData.cnfPassword) {
        //     err.cnfPassword = 'Passwords do not match';
        //   }
          if (!signupData.terms) {
            err.terms = 'Accept terms & conditions';
          }
      
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
            <Navbar />

            <div className="container-fluid mb-5">
                <p className='text-secondary mx-5 mt-5 fw-normal'>Sign Up with your email and phone.</p>
                <div className="wrapper d-flex w-100">
                    <div className='border-0 w-25 mx-5 mt-5'>

                        <div className="mb-3">
                            <label htmlFor="Username">Enter Username</label>
                            <input type="text" className='form-control' name='username' id="username" placeholder='Enter Username' onChange={handleInputChange} value={signupData.username} />
                            {errors.username ? <p className='text-danger'>{errors.username}</p> : null}

                        </div>

                        <div className="mb-3">
                            <label htmlFor="Email" >Email address</label>
                            <input type="email" className="form-control" id="email" name='email' placeholder='Enter your email address' onChange={handleInputChange} value={signupData.email} />
                            {errors.email ? <p className='text-danger'>{errors.email}</p> : null}

                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>

                            <label htmlFor="Phone" className='mt-2'>Phone Number</label>
                            <input type="number" className="form-control" id="phone" name='phone' placeholder='Enter your phone number' onChange={handleInputChange} value={signupData.phone} />
                            {errors.phone ? <p className='text-danger'>{errors.phone}</p> : null}

                        </div>
                        <div className="mb-3">
                            <label htmlFor="Password">Password</label>
                            <input type={pwdVisible ? 'text' : 'password'} className="form-control" id="password" name='password' placeholder='Enter Password' onChange={handleInputChange} value={signupData.password} />
                            <i className={pwdVisible ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'} onClick={() => setPwdVisible(!pwdVisible)} />
                            {errors.password ? <p className='text-danger'>{errors.password}</p> : null}

                        </div>
                        <div className="mb-3">
                            <label htmlFor="cnfPassword">Confirm your Password</label>
                            <input type={cnfPwdVisible ? 'text' : 'password'} className="form-control" id="cnfPassword" name='cnfPassword' placeholder='Confirm your Password' />
                            <i className={cnfPwdVisible ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'} onClick={() => setCnfPwdVisible(!cnfPwdVisible)} />
                            {errors.cnfPassword ? <p className='text-danger'>{errors.cnfPassword}</p> : null}

                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="terms" name='terms' onChange={handleInputChange} checked={signupData.terms} />

                            <label className="form-check-label" htmlFor="terms">Accept terms & conditions</label>
                            {errors.terms ? <p className='text-danger'>{errors.terms}</p> : null}
                        </div>
                        <button type="submit" className="btn btn-danger text-warning fw-bolder mx-5 mt-3 fs-5" onClick={handleSubmit}>Submit</button>

                    </div>
                    <div className="login-img d-flex">
                        <img className='img-fluid sign-img' src="https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1000&format=pjpg&exif=0&iptc=0" alt="" />
                    </div>
                    <div>

                    </div>
                </div>
            </div>

            <Footer />
            <Scroll />

        </>
    )
}

export default SignUp