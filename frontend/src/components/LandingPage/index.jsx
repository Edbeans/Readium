import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStories, fetchStories } from '../../store/stories'; 
import StartReadingFormModal from '../StartReadingPage';
import StoryIndexItem from '../StoryIndexItem';
import './LandingPage.css'; 

function LandingPage() {
    const dispatch = useDispatch();
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const stories = useSelector(getStories);

    useEffect(() => {
        dispatch(fetchStories());
    }, [dispatch])

    console.log(stories, "stories");
    return (
        <>
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
                <h2><span></span>Trending on medium</h2>
                <ul>{stories.map(story => <StoryIndexItem key={story.id} story={story} />)}</ul>
            </div>
        </>
    )
}

export default LandingPage; 