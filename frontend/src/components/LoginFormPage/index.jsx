import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import './LoginForm.css';

function LoginFormModal(props) {
    const setShowLoginModal = props.setShowLoginModal; 
    const setShowSignUpModal = props.setShowSignUpModal; 
    const showLoginModal = props.showLoginModal;

    return (
        <>
            <button className='login-link-button'
            onClick={() => setShowLoginModal(true)}>
            Sign In
            </button>
            {showLoginModal && (
                <Modal onClose={() => setShowLoginModal(false)}>
                <LoginForm 
                    setShowSignUpModal={setShowSignUpModal} 
                    setShowLoginModal={setShowLoginModal}
                    showLoginModal={showLoginModal}
                />
                </Modal>
            )}
        </>
    );
}

export default LoginFormModal;