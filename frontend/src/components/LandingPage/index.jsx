import './LandingPage.css';
import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal'; 
import SignupFormModal from '../SignupFormPage';
import logo from '../../assets/hp-icon.png';
import StartReadingFormModal from '../StartReadingPage';

function LandingPage() {
  const sessionUser = useSelector(state => state.session.user);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal 
          setShowSignUpModal={setShowSignUpModal} 
          setShowLoginModal={setShowLoginModal}
          showLoginModal={showLoginModal} 
          />
        <SignupFormModal 
          setShowSignUpModal={setShowSignUpModal} 
          setShowLoginModal={setShowLoginModal}
          showSignUpModal={showSignUpModal} 
        />
      </>
    );
  }

  return (
    <>
      <div className='header'>
          <div className='home-links'>
            <NavLink 
              className='readium-logo'exact to="/">
              <span><img className='logo-link' src={logo} alt='logo' /></span>
              Readium
            </NavLink>
          </div>
          <div className='nav-link-right'>
            {sessionLinks}
          </div>
      </div>

      <div className='body-below-header'>
        <h1 className='bbh-heading'>Stay curious.</h1>
        <h3 className='bbh-description'>
          Discover stories, thinking, and expterise from writers on any topic.
        </h3>
        <div className='start-reading'>
          <StartReadingFormModal 
            setShowSignUpModal={setShowSignUpModal} 
            setShowLoginModal={setShowLoginModal}
            showSignUpModal={showSignUpModal}
          />
        </div>
      </div>

      <div className='trending-stories-container'>

      </div>
    </>
  );
}

export default LandingPage;