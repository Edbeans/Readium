import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { fetchUser } from "../../store/users";
import { getStories, fetchStories } from "../../store/stories";
import UserStoryIndexItem from "./UserStoryIndexItem";
import MoreUserStoryIndexItem from "./MoreUserStoryIndexItem";
import profilepic from '../../assets/default-profile-icon.png'
import EditUserModal from "./EditUserModal";
import { Modal } from "../../context/Modal";
import './UserIndexPage.css';
import AOS from "aos";
import 'aos/dist/aos.css';

function UserIndexPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    
    useEffect(() => {
        dispatch(fetchStories());
    }, [dispatch]);

    let allStories = useSelector(getStories); 
    let notUserStories = allStories.filter(story => story.authorId !== sessionUser.id);
    let notUserStoriesSliced = notUserStories.slice(0, 4); 
    let userStories = allStories.filter(story => story.authorId === sessionUser.id); 
    let chronoUserStories = userStories.slice().reverse();

    const [editModal, setEditModal] = useState(false); 

    const handleEditClick = () => {
        setEditModal(true);
    };
    
    return (
        <>
            <div className='sp'>

                <div className='sp-main'>
                    {/* MAIN CONTENT OF SHOW PAGE */}
                    <div className='sp-main-container'>
                        {/* USER STORIES      */}
                        <main className='main-class'>
                            <div className='sp-right-container'>
                                <div className='user-header-container'>
                                    <h1 className='user-name' data-aos='fade-left' data-aos-duration='2000'>{sessionUser.fullname}</h1>       
                                </div>
                                
                                {chronoUserStories.map(story =>
                                    <UserStoryIndexItem key={story.id} story={story}/>
                                )}

                            </div>
                        </main>
                        {/* USER BIO AND INFORMATION  */}
                        <div className='sp-left-container'>
                            <div className='author-bio-container'>
                                <div className='author-bio-inside-container'>
                                    <div className='author-bio-content'>
                                        <div className='abc-1'>
                                            <div className='abc-2'>
                                                <img className='user-index-pic' src={profilepic} alt='pfp'/>
                                                <h2 className='user-profile-name'>{sessionUser.fullname}</h2>
                                                {/* <h2 className='user-profile-name'>{user.fullname}</h2> */}
                                                <p className='user-bio'>{sessionUser.bio}</p>
                                                {/* <p className='user-bio'>{user.bio}</p> */}
                                                {sessionUser && (
                                                    <div className='uepn-container'>
                                                        <h2 className='uepn-text' onClick={handleEditClick}>Edit Profile</h2>
                                                    </div>
                                                )}


                                            </div>

                                            {/* Add more stories from Medium here  */}
                                            <h3 className='more-header'>More from Readium</h3>
                                            <div className='more-sep'></div>

                                            {notUserStoriesSliced.map(story => 
                                                <MoreUserStoryIndexItem key={story.id} story={story}/>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {editModal && (
                    <Modal onClose={() => setEditModal(false)}>
                    <EditUserModal
                        sessionUser = {sessionUser}
                    />
                </Modal>
                )}

            </div>

        </>
    )
}

export default UserIndexPage;