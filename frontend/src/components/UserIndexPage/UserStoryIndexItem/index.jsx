import React, { useState, useEffect }from 'react';
import "./UserStoryIndexItem.css";
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteStory } from '../../../store/stories';
import { timeConversion } from '../../../modules/helperFunctions';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AOS from 'aos';
import 'aos/dist/aos.css';

function UserStoryIndexItem ({story}) {
    const dispatch = useDispatch();
    const history = useHistory(); 
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

    const removeStory = (e) => {
        e.preventDefault();
        dispatch(deleteStory(story.id)).then(history.push("/@profile"));
    }

    return (
        <>
            <div className='user-story-container' data-aos='fade-right' data-aos-duration='2000'>

                <h1 className='user-story-date'>{timeConversion(story.createdAt)}</h1>        

                <div className='user-story-title-container'>
                    <Link className='user-story-title' to={`/stories/${story.id}`}>
                        {story.title}
                    </Link>
                </div>

                <div className='user-story-body-container'>
                    <Link className='user-story-body' to={`/stories/${story.id}`}>
                        {story.body}
                    </Link>
                </div>

                <div className='u-and-d-container'>
                    <div className='ud-dropdown-icon'>
                        <MoreHorizIcon className='more-horiz' onClick={openMenu}/>
                    </div>
                    {showMenu && (
                        <div className='ud-dropdown'>
                            <ul className='ud-content'>
                                <div className='ud-section'>
                                    <li className='ud-list'>
                                        <Link className='edit-story-btn' to={`/stories/${story.id}/update`}>Edit story</Link>
                                    </li>
                                </div>
                                <div className='ud-section delete-section'>
                                    <li className='ud-list'>
                                        <button className='delete-btn' onClick={removeStory}>Delete story</button>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    )}
                </div>

            </div>
        </>
    )
}

export default UserStoryIndexItem;