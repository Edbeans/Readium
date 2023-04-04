import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginFormModal from '../LoginFormPage'; 
import SignupFormModal from '../SignupFormPage';
import UserNavBar from './UserNavBar/UserNavBar';
import logo from '../../assets/hp-icon.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './NavBar.css';

function NavBar() {
  const sessionUser = useSelector(state => state.session.user);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  let sessionLinks;
  if (!sessionUser) {
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
  
  if (!sessionUser) {
    return (
        <>
          <div className='nav'>
            <div className='nav-flex-container'>
              <div className='nav-flex-container1'>
                <div className='nav-flex-container2'>                 
                  <div className='home-link-left'>
                    <NavLink 
                      className='readium-logo'exact to="/">
                      <span><img className='logo-link' src={logo} alt='logo' /></span>
                      Readium
                    </NavLink>
                  </div>
                  <div className='flex-space-between'></div>
                  <div className='home-link-right'>
                    <span className='hlr'>
                      <div className='hlr-div'>
                        <a className='personal-link' href='https://github.com/Edbeans' target='_blank'><GitHubIcon/></a>
                      </div>
                    </span>
                    <span className='hlr'>
                      <div className='hlr-div'>
                        <a className='personal-link' href='https://www.linkedin.com/in/ying-edward/' target='_blank'><LinkedInIcon/></a>
                      </div>
                    </span>
                    <span className='hlr'>
                      <div className='hlr-div'>
                        {sessionLinks}
                      </div>
                    </span>
                  </div>
                </div>

              </div>

            </div>
            
          </div>
        </>
        

      );
  } else {
    return (
      <>
        <UserNavBar user={sessionUser}/>
      </>
    )
  } 
}

export default NavBar;