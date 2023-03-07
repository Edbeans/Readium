import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getStory, fetchStory } from "../../../store/stories";
import { useDispatch, useSelector } from "react-redux";
import "./StoryShowPage.css";

function StoryShowPage() {
    const dispatch = useDispatch();
    const { storyId } = useParams();
    const story = useSelector(getStory(storyId));
    // const sessionUser = useSelector(state => state.session.user);
    
    useEffect(() => {
        dispatch(fetchStory(storyId));
    }, [dispatch, storyId]);

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

export default StoryShowPage; 