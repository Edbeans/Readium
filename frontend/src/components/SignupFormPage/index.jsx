import React from 'react';
import { Modal } from '../../context/Modal';
import SignupFormPage from './SignupFormModal';
import './SignupForm.css';

function SignupFormModal(props) {
    const setShowSignUpModal = props.setShowSignUpModal;
    const setShowLoginModal = props.setShowLoginModal;
    const showSignUpModal = props.showSignUpModal; 
    
    const handleModals = () => {
        setShowSignUpModal(true)
        setShowLoginModal(false)
    }
    
    return (
        <>
            <button 
            className='signup-link-button'
            onClick={handleModals}>
            Get started
            </button>
            {showSignUpModal && (
                <Modal onClose={() => setShowSignUpModal(false)}>
                <SignupFormPage 
                    setShowLoginModal={setShowLoginModal}
                    setShowSignUpModal={setShowSignUpModal} 
                    showSignUpModal={showSignUpModal} 
                />
                </Modal>
            )}
        </>
    );
}

export default SignupFormModal;