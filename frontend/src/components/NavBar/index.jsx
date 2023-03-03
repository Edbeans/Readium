import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from '../UserShowPage/ProfileButton';
import LoginFormModal from '../LoginFormPage'; 
import SignupFormModal from '../SignupFormPage';
import './NavBar.css';
import logo from '../../assets/hp-icon.png';

function NavBar() {
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
    </>
  );
}

export default NavBar;