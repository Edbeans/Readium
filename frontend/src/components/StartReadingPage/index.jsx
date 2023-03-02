import React from 'react';
import './StartReadingForm.css';

function StartReadingFormModal(props) {
    const setShowSignUpModal = props.setShowSignUpModal;

    return (
        <>
            <button 
            className='start-reading-button'
            onClick={() => setShowSignUpModal(true)}>
            Start reading
            </button>
        </>
    );
}

export default StartReadingFormModal;