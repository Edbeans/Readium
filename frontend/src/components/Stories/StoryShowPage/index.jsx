import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getStory, fetchStory } from "../../../store/stories";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../../../context/Modal";
import ResponseForm from "./ResponseForm";
import "./StoryShowPage.css";

function StoryShowPage() {
    const dispatch = useDispatch();
    const { storyId } = useParams();
    const story = useSelector(getStory(storyId));
    const sessionUser = useSelector(state => state.session.user);
    
    // const [applauds, setApplauds] = useState(0);
    // const [isClicked, setIsClicked] = useState(false); 

    useEffect(() => {
        dispatch(fetchStory(storyId));
    }, [dispatch, storyId]);

    // const addApplaud = (e) => {
    //     e.preventDefault();
    //     setApplauds(story.applauds + 1); 
    //     setIsClicked(!isClicked); 
    // }
    // console.log("STORYYYYYY", story); 
    // let rawdate = story.createdAt; 
    // console.log("DATE!!!!!!", rawdate); 
    // const options = {month: 'long', day: 'numeric'};
    // let date = rawdate.toLocaleDateString("en-US", options); 
    // let date = rawDate.toLocaleDateString("en-US", options);

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
                                        <h1 className='story-date'>{story.createdAt}</h1>        
                                    </div>
    
                                    
                                    <div className='story-title-container'>
                                        <h1 className='story-title'>{story.title}</h1>
                                    </div>
    
                                    <div className='story-body-container'>
                                        <p className='story-body'>{story.body}</p>
                                    </div>
    
                                    
                                    {sessionUser && (
                                        <div>
                                            <button onClick={openResponseModal}>Response</button>
                                        </div>
                                    )}

                                    {responseModal && (
                                        <Modal onClose={() => setResponseModal(false)}>
                                            <ResponseForm 
                                                story={story}
                                            />
                                        </Modal>
                                    )}
    
                                    {/* add an applauds button  */}
                                    {/* {sessionUser && (
                                        <div className='user-interaction-container'>
                                            <button onClick={addApplaud}>Applaud</button>
                                        </div>
                                    )}
                                    <div>
                                        <span>{applauds}</span>
                                    </div> */}
                                </div>
                            </main>
                            {/* USER BIO AND INFORMATION  */}
                            <div className='sp-left-container'>
                                <div className='author-bio-container'>
                                    <div className='author-bio-inside-container'>
                                        <div className='author-bio-content'>
                                            <div className='abc-1'>
                                                <div className='abc-2'>
                                                    <h2 className='profile-name'>{story.author}</h2>
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