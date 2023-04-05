import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStories, fetchStories } from '../../store/stories'; 
import StoryIndexItem from '../Stories/StoryIndexItem';
import NonTrendingIndexItem from './NonTrendingIndexItem';
import trendicon from '../../assets/trendicon.png';
import joinedhands from '../../assets/joinedhands.png';
import { Link } from 'react-router-dom';
import './LandingPage.css'; 

function LandingPage() {
    const dispatch = useDispatch();
    const stories = useSelector(getStories); 
    const trendingStories = stories.slice(0, 6); 
    const nonTrendingStories = stories.slice(6);

    useEffect(() => {
        dispatch(fetchStories());
    }, [dispatch])
    
        
        return (
            <>
            <div className='banner'>
                <div className='banner-container'>
                    <div className='banner-img-container'>
                        <img className='banner-img' src={joinedhands} alt='joined-hands'/>
                    </div>

                    <div className='banner-header-container'>
                        <div className='banner-header-section1'>
                            <div className='banner-header-right'>
                                <div className='banner-header-right1'>
                                    <div className='banner-header-quote'>
                                        <h2 className='bh-quote' data-aos='fade-right' data-aos-duration='2000'>Stay curious.</h2>
                                    </div>

                                    <div className='banner-description'>
                                        <span className='bd-span'>
                                            <h3 className='bd-quote' data-aos='fade-left' data-aos-duration='2000'>
                                                Discover stories, thinking, and expertise from writers on any topic.
                                            </h3>
                                        </span>
                                    </div>
                                    
                                    <div className='banner-start-reading-container'>
                                        <span>
                                            <button className='bsr-btn' data-aos='fade-in' data-aos-duration='2000'>
                                                <Link className='bsr-btn-link' to='/stories/1'>Start reading</Link>
                                            </button>
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </div>
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
                    </div>
                </div>
            </div>




            <div className='ee y gy gz ha'>
                <div className='al am'>
                    <div className='an ao ap aq ar as at ad'>
                        <div className='l m n o p q'>
                            <section className='pw-homefeed r s t u'>
                                <div className='y'>
                                    <div className='jr js y'>
                                        {/* NonTrendingIndexItem will be a separate component to organize the divs  */}
                                        {/* start from div className ad cw  */}
                                        {nonTrendingStories.map(story => <NonTrendingIndexItem key={story.id} story={story} />)}
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage; 