import React from 'react';
import { Card } from 'react-bootstrap';

function LegacyAtrium() {
  return (
    <div className='leg'>
            <div className='container'>
              <h2 className='text-center mb-5'>Legacy of REC Atrium</h2>
            <div className='legacy'>
                    <Card className='d-flex align-items-center border-0 h-100'> 
                        <Card.Body>
                            <Card.Text className='text-center'>
                            Since its founding in 2014, every meet and every event conducted by REC Atrium is an unprecedented odyssey into the realms of contemporary and classic tales. With consistent support from the Management of REC and active participation by our club members, today we stand tall with over 400+ members.
                            </Card.Text>
                        </Card.Body>
                    </Card>
              </div>
            
            </div>
            
        </div>
  )
}

export default LegacyAtrium;