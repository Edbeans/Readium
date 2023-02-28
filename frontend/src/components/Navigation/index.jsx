import './Navigation.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal'; 
import SignupFormModal from '../SignupFormPage';
import logo from '../../assets/hp-icon.png';
import StartReadingFormModal from '../StartReadingPage';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
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
            <LoginFormModal />
            <SignupFormModal />
          </div>
      </div>

      <div className='body-below-header'>
        <h1 className='bbh-heading'>Stay curious.</h1>
        <h3 className='bbh-description'>
          Discover stories, thinking, and expterise from writers on any topic.
        </h3>
        <div className='start-reading'>
          <StartReadingFormModal />
        </div>
      </div>

      <div className='trending-stories-container'>
        
      </div>
    </>
  );
}

export default Navigation;