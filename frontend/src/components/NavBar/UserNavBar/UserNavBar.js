import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../../store/session';
import { NavLink, useHistory } from "react-router-dom";
import logo from '../../../assets/hp-icon.png';
import profilepic from '../../../assets/default-profile-icon.png'
import DropDownIcon from '@mui/icons-material/ExpandMoreSharp';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import "./UserNavBar.css";

function UserNavBar({ user }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout()).then(history.push("/"));
  };

  return (
    <>
      <div className='user-nav-bar'>

            <div className='home-links'>
              <div className='hl-left'>
                <NavLink 
                  className='user-logo'exact to="/">
                  <span><img className='logo-link user-logo-link' src={logo} alt='logo' /></span>
                </NavLink>
              </div>
            </div>

            <div className='user-nav-right-container'>
              <div className='user-nav-right'>
                <div className='write-link'>
                  <NavLink className='write' to='/stories'>
                    <i className="far fa-edit write-icon"></i>
                    Write
                  </NavLink>
                </div>

                <div className='notif-bell-container'>
                  <NotificationsActiveOutlinedIcon className='notif-bell-icon'/>
                </div>
              
                <div className='user-dropdown'>
                  <div className='profile-box' onClick={openMenu}>
                    <img className='profile-pic' src={profilepic} alt='pfp'/>
                    <DropDownIcon className='expand-icon' width="12px" height="12px"/>
                  </div>
                  {showMenu && (
                    <div className='profile-dropdown'>
                      <ul className='dropdown-content'> 
                        <div className='dropdown-section'>
                          <li className='dropdown-list'>
                              <NavLink className='profile-link' to='/@profile'>Profile</NavLink>
                          </li>
                          <li className='dropdown-list'>
                            <a className='profile-person-link' href='https://github.com/Edbeans' target='_blank' rel='noreferrer'>
                              Github
                            </a>
                          </li>
                          <li className='dropdown-list'>
                          <a className='profile-person-link' href='https://www.linkedin.com/in/ying-edward/' target='_blank' rel='noreferrer'>
                            LinkedIn
                          </a>
                          </li>
                        </div>

                        <div className='dropdown-section dropdown-last-section'>
                          <li className='dropdown-list' onClick={logout} >Sign out</li>
                          <li className='dropdown-list'>{user.email}</li>
                        </div>

                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            

      </div>
    </>
  );
}

export default UserNavBar;