import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupFormPage from './SignupFormModal';
import './SignupForm.css';

function SignupFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button 
            className='signup-link-button'
            onClick={() => setShowModal(true)}>
            Get started
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                <SignupFormPage />
                </Modal>
            )}
        </>
    );
}

export default SignupFormModal;