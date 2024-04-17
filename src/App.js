import './App.css';
import React, { useState, useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import Aroha from './pages/AROHA/Aroha';
import About from './pages/About/About';
import Logo from './utils/images/logo.png';


function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div>
      <Navbar expand="lg" className={`fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand d-flex align-items-center'>
              <span className='mx-2 text-light lh-1 fw-semibold'>
                <img src={Logo} className='Logo'></img>
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-light' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
              <Nav.Link href='/' className='text-uppercase'>Home</Nav.Link>
              <Nav.Link href='/events' className='text-uppercase'>Our Events</Nav.Link>
              <Nav.Link href='/Aroha' className='text-uppercase'>AROHA</Nav.Link>
              <Nav.Link href='/about' className='text-uppercase'>About us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/Aroha' element={<Aroha />} />
        <Route path='/about' element={<About />} />
      </Routes>
<hr></hr>
      <footer className='foot'>
        <div className='container my-5'>
          <div className='row d-flex justify-content-between align-items-center'>
            <div className='col-md-4'>
              <button type='button' className='btn btn-outline-danger btn-lg mb-5 mb-md-4'>Get In Touch</button>
              <ul className='footer-social-icons list-unstyled d-flex justify-content-between'>
              <Link to="https://www.instagram.com/recatrium/">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#dc3545" class="bi bi-instagram" viewBox="0 0 24 24">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                    </svg>
                  </li>
                </Link>
                <Link to="https://www.facebook.com/atrium.admin.3/">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#dc3545" class="bi bi-facebook" viewBox="0 0 24 24">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                    </svg>
                  </li>
                </Link>
                <Link to="mailto:atrium@rajalakshmi.edu.in">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#dc3545" class="bi bi-email" viewBox="0 0 40 40">
                    <path d="M16.6,18.8C16.4,18.9,16.2,19,16,19s-0.4-0.1-0.6-0.2L2,9.9V23c0,2.8,2.2,5,5,5h18c2.8,0,5-2.2,5-5V9.9L16.6,18.8z"/>
                    <path d="M16,16.8l13.8-9.2C29.2,5.5,27.3,4,25,4H7C4.7,4,2.8,5.5,2.2,7.6L16,16.8z"/>
                    </svg>
                  </li>
                </Link>
              </ul>
            </div>
            <div className='col-md-7 col-lg-6'>
              <div className='d-row d-md-flex justify-content-between align-items-center'>
                <div className='col-12 col-md-6 col-lg-5 mb-5 mt-4 my-md-0'>
                  <ul className='footer-navigation list-unstyled mb-0'>
                    <Link to="/" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>Home</li>
                    </Link><br></br>
                    <Link to="/courses" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>Our Events</li>
                    </Link><br></br>
                    <Link to="/aroha" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>Aroha</li>
                    </Link><br></br>
                    <Link to="/about" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>About us</li>
                    </Link><br></br>
                  </ul>
                </div>
                <div className='address col-12 col-md-6 col-lg-7'>
                  <ul className='list-unstyled mb-0'>
                    <li>
                      <p>Rajalakshmi Engineering College, Thandalam</p>
                    </li>
                    <li>
                      <p>President Contact Number - +91 99529 89679</p>
                    </li>
                    {/* <li>
                      <p>Vice President Contact Number - +91 97899 96433</p>
                    </li> */}
                    <li>
                      <p>Email - atrium@rajalakshmi.edu.in</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        </footer>
        <div className='devcontainer'>© Developed by Krishnakumar R (Core 2023-2024)</div>
    </div>
  );
}

export default App;
