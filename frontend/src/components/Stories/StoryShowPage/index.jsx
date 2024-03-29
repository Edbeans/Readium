import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getStory, fetchStory } from "../../../store/stories";
import profilepic from '../../../assets/default-profile-icon.png'
// import { createApplaud } from "../../../store/applauds";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../../../context/Modal";
import ResponseForm from "./ResponseForm";
import { timeConversion } from "../../../modules/helperFunctions";
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SignLanguageIcon from '@mui/icons-material/SignLanguage';
import "./StoryShowPage.css";

function StoryShowPage() {
    const dispatch = useDispatch();
    const { storyId } = useParams();
    const story = useSelector(getStory(storyId));
    console.log("STORY", story);
    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(fetchStory(storyId));
    }, [dispatch, storyId]);

    // const handleApplaud = (e) => {
    //     e.preventDefault();
    //     const applaudData = {
    //         story_id: story.id,
    //         applauder_id: sessionUser.id
    //     }
    //     dispatch(createApplaud(applaudData));
    // }

    const [applause, setApplause] = useState(0); 

    useEffect(() => {
        setApplause(JSON.parse(window.sessionStorage.getItem("applause")));
    }, []);

    useEffect(() => {
        window.sessionStorage.setItem("applause", applause); 
    }, [applause]);

    const incrementApplause = (e) => {
        e.preventDefault();
        setApplause(applause + 1); 
    }

    const [responseModal, setResponseModal] = useState(false);

    const openResponseModal = (e) => {
        e.preventDefault(); 
        setResponseModal(true); 
    }

    if (!story) {
        return null;
    } else {
        return (
            <>
                <div className='sp'>
    
                    <div className='sp-main'>
                        {/* MAIN CONTENT OF SHOW PAGE */}
                        <div className='sp-main-container'>
                            {/* USER STORIES      */}
                            <main className='main-class'>
                                <div className='sp-right-container'>
                                    <div className='author-header-container'>
                                        <h1 className='author-name'>{story.author}</h1>
                                        <h1 className='story-date'>{timeConversion(story.createdAt)}</h1>        
                                    </div>
    
                                    
                                    <div className='story-title-container'>
                                        <h1 className='story-title' data-aos='fade-left' data-aos-duration='1500'>{story.title}</h1>
                                    </div>
    
                                    <div className='story-body-container'>
                                        <p className='story-body' data-aos='fade-right' data-aos-duration='1500'>{story.body}</p>
                                    </div>
    
                                    
                                    {sessionUser && (
                                        <>
                                            <div className='spr-and-spa'>
                                                
                                                <div className='spr-container' onClick={openResponseModal}>
                                                    <ModeCommentOutlinedIcon className='r-btn'/>
                                                    {/* <div className='rlength'>{story.responses.length}</div> */}
                                                    <div className='rlength'>Respond</div>
                                                </div>

                                                <div className='spr-container' onClick={incrementApplause}>
                                                    {/* <ModeCommentOutlinedIcon className='r-btn'/> */}
                                                    <SignLanguageIcon className='r-btn'/>
                                                    <div className='rlength'>{applause}</div>
                                                </div>

                                            </div>                
                                        </>
                                    )}

                                    {responseModal && (
                                        <Modal onClose={() => setResponseModal(false)}>
                                            <ResponseForm 
                                                story={story}
                                            />
                                        </Modal>
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
                                                    <h2 className='user-profile-name'>{story.author}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                </div>
            </>
        )
    }


}

export default StoryShowPage; 