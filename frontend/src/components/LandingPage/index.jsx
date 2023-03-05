import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStories, fetchStories } from '../../store/stories'; 
import StartReadingFormModal from '../StartReadingPage';
import StoryIndexItem from '../Stories/StoryIndexItem';
// import { Link } from 'react-router-dom';
import './LandingPage.css'; 

function LandingPage() {
    const dispatch = useDispatch();
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const stories = useSelector(getStories); // [1, 2,, 3, 4 ,.. 10] 
    
    const trendingStories = stories.slice(0, 6); // gives me the first six stories 
    // for (let i = 0; i < 6; i++) {
    //     trendingStories.push(stories[i])
    // }
    useEffect(() => {
        dispatch(fetchStories());
    }, [dispatch])
    
        
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
                    {/* <Link to='/signup'>Start reading</Link> */}
                </div>
            </div>

            <div className='trending-stories-container'>
                <h2>Trending on medium</h2>
                <div>{trendingStories.map(story => <p><StoryIndexItem key={story.id} story={story} /></p>)}</div>
            </div>
        </>
    )
}

export default LandingPage; 