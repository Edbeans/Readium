import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStories, fetchStories } from "../../store/stories";
import UserStoryIndexItem from "./UserStoryIndexItem";
import './UserIndexPage.css';

function UserIndexPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    
    useEffect(() => {
        dispatch(fetchStories());
    }, [dispatch]);
    
    let allStories = useSelector(getStories); 

    let userStories = allStories.filter(story => story.authorId === sessionUser.id) // [{}]
    let chronoUserStories = userStories.slice().reverse();
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
                                    <h1 className='user-name'>{sessionUser.fullname}</h1>       
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
                                                <h2 className='profile-name'>{sessionUser.fullname}</h2>
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

export default UserIndexPage;