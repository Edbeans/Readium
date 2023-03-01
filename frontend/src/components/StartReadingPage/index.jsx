import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import StartReadingFormPage from './StartReadingFormModal';
import './StartReadingForm.css';

function StartReadingFormModal(props) {
    // const [showModal, setShowModal] = useState(false);
    const setShowSignUpModal = props.setShowSignUpModal;
    const setShowLoginModal = props.setShowLoginModal;
    const showSignUpModal = props.showSignUpModal; 

    return (
        <>
            <button 
            className='start-reading-button'
            onClick={() => setShowSignUpModal(true)}>
            Start reading
            </button>
            {showSignUpModal && (
                <Modal onClose={() => setShowSignUpModal(false)}>
                <StartReadingFormPage 
                    setShowSignUpModal={setShowSignUpModal} 
                    setShowLoginModal={setShowLoginModal}
                    showSignUpModal={showSignUpModal} 
                />
                </Modal>
            )}
        </>
    );
}

export default StartReadingFormModal;