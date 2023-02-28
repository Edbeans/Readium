import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupFormPage from './SignupFormModal';
import './SignupForm.css';

function SignupFormModal(props) {
    // const [showSignUpModal, setShowSignUpModal] = useState(false);
    const setShowSignUpModal = props.setShowSignUpModal;
    const setShowLoginModal = props.setShowLoginModal;
    const showSignUpModal = props.showSignUpModal; 
    return (
        <>
            <button 
            className='signup-link-button'
            onClick={() => setShowSignUpModal(true)}>
            Get started
            </button>
            {showSignUpModal && (
                <Modal onClose={() => setShowSignUpModal(false)}>
                <SignupFormPage 
                    setShowSignUpModal={setShowSignUpModal} 
                    setShowLoginModal={setShowLoginModal}
                    showSignUpModal={showSignUpModal} 
                />
                </Modal>
            )}
        </>
    );
}

export default SignupFormModal;