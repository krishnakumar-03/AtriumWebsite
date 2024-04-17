import React from 'react';
import './Events.css';
import { Card } from 'react-bootstrap';
import FirstMeet from '../../utils/images/FirstMeet.jpg';
import WOW24 from '../../utils/images/WoW.png';
import SecondMeet from '../../utils/images/SecondMeet.jpg';

const events = [
    {
        id: 3,
        img: [SecondMeet],
        title: 'Alter Ego',
        description: 'Our Second Meet!'
    },
    {
        id: 2,
        img: [WOW24],
        title: "War of Words'24",
        description: 'The Grand Inter-collegiate Literary Fest by Core 2023-24!'
    },
    {
        id: 1,
        img: [FirstMeet],
        title: 'CineSync',
        description: 'Our First Meet!'
    },
];

function Events() {
  return (
    <div className='events-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Our Events</h1>
                {/* <p className='text-center w-75 mb-5'>Immerse yourself in the magic of language, connect with fellow book enthusiasts, and embark on a journey of literary discovery. Join us as we celebrate the power of storytelling and the boundless creativity of the written word. Unleash your imagination and let the adventure begin!</p> */}
                <p className='text-center w-75 mb-5'>During each meet, minds are inspired with the anticipation of new worlds whereas hearts are ignited with literary fervour. Through passionate discussions we unravel the mysteries cleverly hidden between the lines. We rejuvenate stories through theatrical performances and set parchments ablaze with our words.</p>
            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
                {events.map((event) => (
                    <div key={event.id} className='col-lg-4'>
                        <Card className='text-white shadow scale-hover-effect'>
                            <Card.Img src={event.img} />
                            <div className='overlay'>
                            <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                <Card.Title className='text3 fs-1'>{event.title}</Card.Title>
                                <Card.Text className='text4 text-center'>{event.description}</Card.Text>
                            </Card.ImgOverlay>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

    </div>
  )
}

export default Events;