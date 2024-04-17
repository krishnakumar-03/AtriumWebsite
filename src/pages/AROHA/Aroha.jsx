import React from 'react';
import './Aroha.css';
import Aroha23 from '../../pages/AROHA/Aroha23';
import Aroha24 from '../../pages/AROHA/Aroha24';


function Aroha() {
  return (
    <div className='aroha-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Aroha</h1>
                <p className='text-center w-75 mb-5'>AROHA is a social initiative led by Atrium aimed at teaching English in government schools through interactive games, ensuring engaging and effective learning experiences for the children.</p>
            </div>
        </header>
        {/* <hr></hr>
        <Aroha24/> */}
        <hr></hr>
        <Aroha23/>

    </div>
  )
}

export default Aroha;