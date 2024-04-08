import React, { useEffect, useState } from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { googleLogout } from '@react-oauth/google';

import './DashboardPage.css';

function DashboardPage() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  const handleSignOut = () => {
    googleLogout();
    sessionStorage.removeItem("userName");
    setUserName('');
    toast.info("Signout Successfully");
    navigate('/');
  }

  useEffect(() => {
    if (sessionStorage.getItem("userName")) {
      const storedUserName = sessionStorage.getItem('userName');
      setUserName(storedUserName);
    }
  }, []);

  return (
    <>
      <Navbar className="dashboard-navbar">
        <Container>
          <Navbar.Brand href="#home">
          <i class="fa-solid fa-building me-2 navbar-icon "></i> 
            SignifyUI
          </Navbar.Brand>
          <Button onClick={handleSignOut} variant="outline-light">
            Sign Out <i class="fa-solid fa-right-from-bracket me-2 sign-out-icon "></i>
          </Button>
        </Container>
      </Navbar>
      <div className="dashboard-content">
        <Container>
          <h1 className="welcome-text">Welcome, {userName}</h1>
         <p>

Welcome to <span className='fw-bolder'>SignifyUI</span>, your go-to destination for modern and intuitive user interfaces. At SignifyUI, we are committed to providing cutting-edge design solutions that enhance user experience and drive engagement. Whether you're a developer, designer, or business owner, our platform offers a wide range of tools, resources, and inspiration to help you create stunning web applications and websites. From sleek dashboards to responsive layouts, SignifyUI empowers you to bring your ideas to life with ease. Join our community today and elevate your projects to the next level with SignifyUI.</p>
        </Container>
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </>
  );
}

export default DashboardPage;
