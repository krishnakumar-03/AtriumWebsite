import React from 'react';
import { Card } from 'react-bootstrap';
import First from '../AROHA/Aroha23pic/1.jpg';
import Second from '../AROHA/Aroha23pic/2.jpg';
import Third from '../AROHA/Aroha23pic/3.jpg';
import Fourth from '../AROHA/Aroha23pic/4.jpg';
import Fifth from '../AROHA/Aroha23pic/5.jpg';
import Sixth from '../AROHA/Aroha23pic/6.jpg';

const aroha = [
  {
    id: 1,
    img: [First],
    title: 'Title',
    description: 'Description'
  },
  {
    id: 2,
    img: [Second],
    title: 'Title',
    description: 'Description'
  },
  {
    id: 3,
    img: [Third],
    title: 'Title',
    description: 'Description'
  },
  {
    id: 4,
    img: [Fourth],
    title: 'Title',
    description: 'Description'
  },
  {
      id: 5,
      img: [Fifth],
      title: 'Title',
      description: 'Description'
    },
  {
      id: 6,
      img: [Sixth],
      title: 'Title',
      description: 'Description'
    },
];


function Aroha23() {
  return (
    <div>
        <div className="container">
            <h2 className='text-danger bold'>AROHA ' 23</h2>
            <div className='descr'>
                <div className='content'>An intitiative by Core of 2022 - 2023.</div>
                <div className='doings'>AROHA, initiated by Atrium's core team from 2022 to 2023, endeavors to teach English in government schools through interactive games, fostering engaging learning experiences. It primarily focuses on enhancing children's listening, speaking, and reading skills.</div>            
            </div>
            <div className='container py-5'>
            <div className='row g-4'>
                {aroha.map((aroha23) => (
                    <div key={aroha23.id} className='col-lg-4'>
                        <Card className='text-white shadow scale-hover-effect'>
                            <Card.Img src={aroha23.img} />
                            <div className='overlay'>
                            <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                <Card.Title className='text3 fs-1'>{aroha23.title}</Card.Title>
                                <Card.Text className='text4 text-center'>{aroha23.description}</Card.Text>
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

export default Aroha23;