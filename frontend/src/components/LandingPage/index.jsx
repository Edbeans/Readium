import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStories, fetchStories } from '../../store/stories'; 
import StartReadingFormModal from '../StartReadingPage';
import StoryIndexItem from '../Stories/StoryIndexItem';
import trendicon from '../../assets/trendicon.png';
import joinedhands from '../../assets/joinedhands.png';
// import { Link } from 'react-router-dom';
import './LandingPage.css'; 

function LandingPage() {
    const dispatch = useDispatch();
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const stories = useSelector(getStories); 
    
    const trendingStories = stories.slice(0, 6); // gives me the first six stories 
    const nonTrendingStories = stories.slice(6);

    useEffect(() => {
        dispatch(fetchStories());
    }, [dispatch])
    
        
        return (
            <>
            <div className='body-below-header'>
                <div className='bbh-container'>
                    <div className='left-bbh'>
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

                    <div className='right-bbh'>
                        <img className='joined-hands-img' src={joinedhands} alt='joined-hands'/>
                    </div>
                </div>
            </div>

            <div className='ts-container'>
                <div>

                    <div className='ts-header-container'>
                        <img className='ti' src={trendicon} alt='trendicon'/>
                        <h2 className='th'>Trending on Readium</h2>
                    </div>

                    {/* trending stories */}
                    <div className='ts-content-container'>
                        <div className='ts-grid'>
                            {trendingStories.map(story => 
                                <div className='ts-grid-container'>
                                        <div className='ts-story'>
                                            <StoryIndexItem key={story.id} story={story} />
                                        </div>
                                </div>)}
                        </div>
                        {/* <StoryIndexItem story={trendingStories[0]} /> */}
                    </div>

                </div>
            </div>

            {/* <div className='third-section-container'>
                {nonTrendingStories.map(story => <StoryIndexItem key={story.id} story={story} />)}
            </div> */}

        </>
    )
}

export default LandingPage; 