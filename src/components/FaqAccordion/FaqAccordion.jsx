import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>What is REC Atrium ?</Accordion.Header>
                    <Accordion.Body>
                    	Atrium is a literacy club that primarily focuses on promoting English literacy across various formats, including drama, "just a minute" sessions, writing skills, and communication skills.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>How can I participate in the events conducted by Atrium Club ?</Accordion.Header>
                    <Accordion.Body>
                    	Please join the WhatsApp groups corresponding to your respective years and attend the events announced in the groups. Also, make sure to follow our Instagram page and reach out via email or direct message for any inquiries.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>Why should I join Atrium Club ?</Accordion.Header>
                    <Accordion.Body>
                    	Atrium is a club dedicated to improving literacy skills while fostering social interaction through its diverse range of events. It provides a welcoming platform for showcasing your skills in unique ways.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>When will the Atrium Meets take place ?</Accordion.Header>
                    <Accordion.Body>
                    	Atrium meets can occur in both online and offline formats. When held offline, they typically take place on working days from 3 pm to 5 pm.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='4'>
                    <Accordion.Header>What is War Of Words ?</Accordion.Header>
                    <Accordion.Body>
                        War of Words is the renowned annual literary event organized by Atrium Club. It's a full-day event packed with a diverse range of engaging and entertaining literary activities, making it a highlight on the collegiate calendar.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;