import React from 'react';
import './About.css';
import Faculty from '../../utils/images/AlameluMam.jpeg';
import { Card } from 'react-bootstrap';
import Person1 from '../../utils/images/Adhi.png';
import Person2 from '../../utils/images/krishna.jpg';
import Person3 from '../../utils/images/monish.jpeg';
import Person4 from '../../utils/images/nikilesh.jpeg';
import Person5 from '../../utils/images/hiranmayee.jpeg';
import Person6 from '../../utils/images/vighnesh.jpg';
import Person7 from '../../utils/images/shwetha.jpeg';
import Person8 from '../../utils/images/harunicshini.jpeg';
import Person9 from '../../utils/images/shreya.jpeg';
import Person10 from '../../utils/images/supraja.jpeg';
import Dev from '../../components/Dev/Dev';


const persons = [
    {
        id: 1,
        img: [Person1], 
        title: 'Adhithyan Aravind',
        description: 'President'
    },
    {
        id: 2,
        img: [Person2],
        title: 'Krishnakumar R',
        description: 'Vice President'
    },
    {
        id: 3,
        img: [Person3],
        title: 'Mohneesh',
        description: 'Secretary'
    },
    {
        id: 4,
        img: [Person4],
        title: 'Nikhilesh',
        description: 'HR'
    },
    {
        id: 5,
        img: [Person5],
        title: 'Hiranmayee',
        description: 'PRO'
    },
    {
        id: 6,
        img: [Person6],
        title: 'Vighnesh Narayanan',
        description: 'Event Manager'
    },
    {
        id: 7,
        img: [Person7],
        title: 'Swetha D',
        description: 'Designer'
    },
];
const edboard = [
    {
        id: 8,
        img: [Person8],
        title: 'Harunicshini',
        description: 'Editor In Chief'
    },
    {
        id: 9,
        img: [Person9],
        title: 'Shereya P V',
        description: 'Editor & PRO'
    },
    {
        id: 10,
        img: [Person10],
        title: 'Suprajaa A',
        description: 'Editor'
    },
];

function About() {
  return (
    <div className='about-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>About Us</h1>
                <p className='text-center w-75 mb-5'>As proactive members of REC Atrium, we orchestrate dynamic meetings and nurture the well-being of our club and community.</p>
            </div>
        </header>

        <div className='container my-5'>
        <h2 className='mb-4 mb-lg-5'>Our Faculty Coordinator</h2>
            <div className="row">
                <div className='col-lg-12 d-flex justify-content-center'>
                    <img src={Faculty} className='image1' alt="" />
                </div>
                <div className='faculty fs-1 text-danger'>Mrs.G.Alamelu Krishnan</div><div>Faculty Coordinator,REC Atrium</div>
            </div>
        </div>
        <div className='bg-body-tertiary py-5'>
        <div className="container">
                <h2 className='text-center mb-5'>Atrium Core Members (2023-2024)</h2>
                <div className='row g-4'>
                    {persons.map((person) => (
                        <div key={person.id} className='col-md-4'>
                            <Card className='text-white shadow scale-hover-effect'>
                            <Card.Img src={person.img} />
                            <div  className='overlay'>
                               <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                    <Card.Title className=' text1 fs-1 text-danger'>{person.title}</Card.Title>
                                    <Card.Text className='text2 text-center'>{person.description}</Card.Text>
                                </Card.ImgOverlay>
                            </div>
                        </Card>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
        <div className='bg-body-tertiary py-5'>
        <div className="container">
                <h2 className='text-center mb-5'>Edboard Core Members (2023-2024)</h2>
                <div className='row g-4'>
                    {edboard.map((person) => (
                        <div key={person.id} className='col-md-4'>
                            <Card className='text-white shadow scale-hover-effect'>
                            <Card.Img src={person.img} />
                            <div  className='overlay'>
                               <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                    <Card.Title className=' text1 fs-1 text-danger'>{person.title}</Card.Title>
                                    <Card.Text className='text2 text-center'>{person.description}</Card.Text>
                                </Card.ImgOverlay>
                            </div>
                        </Card>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
        <hr/>
        <Dev/>
    </div>
  )
}

export default About;
