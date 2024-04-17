import React from 'react';
import './Dev.css';
import { Card } from 'react-bootstrap';
import Devimg from '../../utils/images/developer.jpg';

const persons = [
    {
        id: 1,
        img: Devimg, 
        title: 'Krishnakumar R',
        description: 'Web Developer / Tech Lead (Core 2023-2024)'
    },
];

function Dev() {
  return (
    <div>
    <div className="dev-page container">
        <div className='row g-4'>
        <h2 className='text-center mb-5'>Web Developer</h2>
            <div className='col-lg-4'>
            {persons.map((person) => (
                        <div key={person.id} className='col'>
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
</div>
  )
}

export default Dev;