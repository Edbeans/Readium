import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import StartReadingFormPage from './StartReadingFormModal';
import './StartReadingForm.css';

function StartReadingFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button 
            className='start-reading-button'
            onClick={() => setShowModal(true)}>
            Start reading
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                <StartReadingFormPage />
                </Modal>
            )}
        </>
    );
}

export default StartReadingFormModal;