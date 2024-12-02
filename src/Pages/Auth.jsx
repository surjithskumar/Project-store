import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Auth({ register }) {

    const isRegisterForm = register ? true : false

    return (
        <>

            <div className="d-flex justify-content-center align-otems-center">
                <div className="w-75 container">
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bolder' }}><i class='fa-solid fa-arrow-left me-2' ></i>Back to Home</Link>
                    <div className="card shadow p-5 bg-primary">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/133864422/original/c9a1a1b77074e9b2d1b60943e0549eb24287b7f1/solve-your-every-problem-of-you-web.jpg" alt="" width={'100%'} className='rounded-start' />
                            </div>
                            <div className="col-lg-6">
                                <div className="d-flex align-items-center flex-column">
                                    <h3 className="display-4 fw-bold text-light mt-3"><i className="fa-solid fa-list-check me-2"></i>Project-Fair</h3>
                                    <h5 className='text-light fw-bolder text-center'>
                                        {
                                            isRegisterForm ? 'Sign-Up to your Account' : 'Sign-In to your Account'
                                        }
                                    </h5>
                                    <Form className="text-light w-100">
                                        {
                                            isRegisterForm &&
                                            <Form.Group className="mb-3" controlId="ControlInputName">
                                                <Form.Control type="text" placeholder="Enter your name" />
                                            </Form.Group>
                                        }
                                        <Form.Group className="mb-3" controlId="ControlInputEmail">
                                                <Form.Control type="email" placeholder="Enter your email" />
                                            </Form.Group>
                                        <Form.Group className="mb-3" controlId="ControlInputpswd">
                                                <Form.Control type="email" placeholder="Enter your Password" />
                                            </Form.Group>
                                            {
                                                isRegisterForm ? <div>
                                                    <button className='btn btn-warning text-light'>Register</button>
                                                    <p>Already have an account ? Click here to <Link to={'/login'} style={{textDecoration:'none',color:'black'}}>Login</Link></p>
                                                </div> : <div>
                                                    <button className='btn btn-success'>Login</button>
                                                    <p>New User ? Click here to <Link to={'/register'} style={{textDecoration:'none',color:'black'}}>Register</Link></p>
                                                </div>
                                            }
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Auth