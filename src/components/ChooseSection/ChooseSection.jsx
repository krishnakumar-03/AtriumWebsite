import React from 'react';
import { Card } from 'react-bootstrap';

function ChooseSection() {
  return (
    <div>
        <div className="container">
            <h2 className='text-center mb-5'>Why choose REC Atrium ?</h2>
            <div className='row g-4'>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center border-0 h-100'> 
                        <div className='mt-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#dc3545" class="bi bi-trophy-fill" viewBox="0 0 24 24">
                            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 16h2v2h-2v-2zm0-4h2v3h-2v-3zm0-4h2v2h-2v-2zm4 8h2v2h-2v-2zm0-4h2v3h-2v-3zm0-4h2v2h-2v-2z"/>
                            </svg>
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center text-capitalize mb-3'>
                            Language Proficiency Enhancement
                            </Card.Title>
                            <Card.Text className='text-center'>
                            Joining an English literary club provides an immersive environment for improving language proficiency. Engaging in discussions, debates, and literary analysis hones your vocabulary, grammar, and comprehension skills. Regular interaction with fellow members offers opportunities to practice speaking, listening, reading, and writing in English, leading to significant linguistic growth.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center border-0 h-100'>
                        <div className='mt-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#dc3545" class="bi bi-geo-alt-fill" viewBox="0 0 24 24">
                            <path d="M12 21c-3.14 0-6.03-1.6-7.7-4.25l1.45-1.45c.88 1.46 2.42 2.44 4.25 2.44s3.37-.98 4.25-2.44l1.45 1.45C18.03 19.4 15.14 21 12 21zm0-16c2.83 0 5.27 1.64 6.44 4h-2.02c-1.05-1.76-2.89-3-5.42-3-2.53 0-4.37 1.24-5.42 3H5.56c1.17-2.36 3.61-4 6.44-4zm-3 12h2v-2h-2v2zm0-4h2v-3h-2v3zm0-4h2v-2h-2v2zm4 8h2v-2h-2v2zm0-4h2v-3h-2v3zm0-4h2v-2h-2v2z"/>
                            </svg>
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center text-capitalize mb-3'>
                                Intellectual Stimulation
                            </Card.Title>
                            <Card.Text className='text-center'>
                            Immerse yourself in thought-provoking discussions about diverse literary works, stimulating your intellect and encouraging deep analysis. Explore complex themes, symbolism, and character development, honing your critical thinking skills as you dissect narratives and uncover layers of meaning. By actively participating in literary debates and sharing insights, you'll expand your perspective and develop a sharper analytical mind.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center border-0 h-100'>
                        <div className='mt-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#dc3545" class="bi bi-geo-alt-fill" viewBox="0 0 24 24">
                            <path d="M13 11h6v10h-6zM5 11h2v13h14V11h2v15H5z"/>
                            <path d="M11 2v3H8l4 4 4-4h-3V2h-4zm-4 9v10h12V11h3v13H5V11h2zm4 0h6v10h-6V11z" opacity=".3"/>
                            </svg>
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center text-capitalize mb-3'>
                                Personal Growth
                            </Card.Title>
                            <Card.Text className='text-center'>
                            Embrace a supportive community that nurtures your creative expression and encourages experimentation with language and storytelling. Receive valuable feedback from peers and mentors, helping you refine your writing style and develop confidence in your abilities. As you engage with fellow members and explore new literary genres and forms, you'll cultivate a deeper appreciation for the power of words and storytelling, and inspiring a lifelong love for literature.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChooseSection;