import React, { useState } from 'react';
import login from '../assets/login.jpg';
import { Form, Button, InputGroup } from 'react-bootstrap';
import './LoginPage.css';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function LoginPage() {
const navigate = useNavigate()
  const [userInputs, setUserInputs] = useState({ email: "", password: "" })
  // console.log(userInputs);
const handleLogin = (e)=>{

  e.preventDefault()

  const emailRegex = /\b[A-Za-z0-9._%+-]+@gmail\.com\b/;
  const minLength = 8;

  if (userInputs.email && userInputs.password) {
      if (!emailRegex.test(userInputs.email)) {
          toast.warning("Please enter a valid Gmail address.");
          return;
      }

      if (userInputs.password.length < minLength) {
          toast.warning("Password must be at least 8 characters long.");
          return;

      }
      // sessionStorage.setItem('userEmail', userInputs.email);
      setTimeout(() => {
          navigate('/dashboard')
      }, 3000)
      setUserInputs({ email: '', password: '' });

  }
  else {
      toast.warning("Please fill form")
  }
}






  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page m-5">
      <div className="container m-5 ">
        <div className="row">
          <div className="col-lg-6">
            <img src={login} className="login-image" alt="Login" />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <div className="login-form">
              <h4 className="login-title">
              <i class="fa-solid fa-building me-2"></i>
                SignifyUI
              </h4>
              <h2 className="login-subtitle">Welcome Back</h2>
              <p className="login-text">Enter your email and password to access your account</p>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email"  value={userInputs.email} onChange={e => setUserInputs({ ...userInputs, email: e.target.value })} required />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <InputGroup>
                  <Form.Control   type={showPassword ? "text" : "password"} placeholder="Password"  value={userInputs.password} onChange={e => setUserInputs({ ...userInputs,password : e.target.value })}   required />
                  <Button variant="outline-secondary" onClick={togglePasswordVisibility}>
                                            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                                        </Button>
                                        </InputGroup>
                </Form.Group>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <Form.Check type="checkbox" label="Remember Me" />
                  </div>
                  <div>
                    <a href="/forgotpassword" className="forgot-password-link">Forgot Password?</a>
                  </div>
                </div>
                <Button variant="success" type="submit" className="login-button" onClick={handleLogin}>
                  LOGIN
                </Button>
              <div className='d-flex justify-content-center '>
            
              <GoogleLogin
                                
                                onSuccess={credentialResponse => {
                                    const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
                                    console.log(credentialResponseDecoded);
                                    sessionStorage.setItem("userName", credentialResponseDecoded.name);
                                    setTimeout(() => {
                                        navigate('/dashboard')
                                    }, 3000)
                                    toast.success("Login Succesfully")
                                }}
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                            />
              </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </div>
  );
}



export default LoginPage;
