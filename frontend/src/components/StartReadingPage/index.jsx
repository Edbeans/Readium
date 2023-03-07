import React from 'react';
import './StartReadingForm.css';

function StartReadingFormModal(props) {
    const setShowLoginModal = props.setShowSignUpModal;

    return (
        <>
            <button 
            className='start-reading-button'
            onClick={() => setShowLoginModal(true)}>
            Start reading
            </button>
        </>
    );
}

export default StartReadingFormModal;