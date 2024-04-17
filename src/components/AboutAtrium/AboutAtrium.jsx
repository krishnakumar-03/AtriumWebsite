import React from 'react';
import { Card } from 'react-bootstrap';
import './AboutAtrium.css';

function AboutAtrium() {
  return (
    <div className='tots1'>
        <div className="what container"><br/>
        <h2 className='text-center mb-5'>What is REC Atrium ?</h2>
            <div className='about'>
                    <Card className='d-flex align-items-center border-0 h-100'> 
                        <Card.Body className='about1'>
                          
                            <Card.Text className='text-center'>
                            REC Atrium is the English literature club of Rajalakshmi Engineering College. It is a haven for bibliophiles and wordsmiths to explore and relish the marvels of literature. In REC Atrium, we weave the tapestry of words with the threads of imagination and shared experiences while fostering a deeper appreciation for the elegance and complexity of the English language.
                            </Card.Text>
                        </Card.Body>
                    </Card>
            </div>
          </div>            
        </div>
  )
}

export default AboutAtrium;