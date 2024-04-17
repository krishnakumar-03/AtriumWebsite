import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import AboutAtrium from '../../components/AboutAtrium/AboutAtrium';
import UpcomingEventPoster from '../../utils/images/upcoming-event-poster.png';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import LegacyAtrium from '../../components/AboutAtrium/LegacyAtrium';
import Logo from '../../utils/images/logo.png';

function Home() {
  return (
    <div className='home-page'>
        <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
            <div className='container d-flex flex-column align-items-center'>
                        <img src={Logo} alt="Logo" className="logo"></img>
                <h5>An English Literary Club of Rajalakshmi Engineering College</h5><br></br>
                <div className='d-flex flex-column flex-sm-row align-items-center'>
                    <Link to="/events">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Our Events</button>
                    </Link>
                    <Link to="/about">
                        <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                    </Link>
                </div>
            </div>
        </header>

        <div className="about py-5">
            <ChooseSection />
        </div>

        <div className=" py-5">
            <AboutAtrium />
        </div>
        <div className=" py-5">
            <LegacyAtrium />
        </div>

        <div className='upevent py-5'>
            <div className="container">
                <div className='row d-flex align-items-center justify-content-around'>
                    <div className='col-lg-5'>
                        <h1 className='text-capitalize'>Our Upcoming Events</h1>
                        <h3>Event Name:</h3><h4>-Event Name-</h4><br></br>
                        <h3>Event Venue:</h3><h4>-Event Venue-</h4><br></br>
                        <h3>Event Time:</h3><h4>-Event Time-</h4><br></br>
                        <a href="#">
                            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Registration Link</button>
                        </a>
                    </div>
                    <div className='col-lg-5 mt-5 mt-lg-0'>
                        <img src={UpcomingEventPoster} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className="faq py-5">
            <FaqAccordion />
        </div>

    </div>
  )
}

export default Home;
