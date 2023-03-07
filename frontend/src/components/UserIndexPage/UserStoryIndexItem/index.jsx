import React from 'react';
import "./UserStoryIndexItem.css";
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

function UserStoryIndexItem ({story}) {
    // const dispatch = useDispatch();
    return (
        <>
            {/* <Link to={`/stories/${story.id}`}>{story.title}</Link> */}
            
            <div className='user-story-container'>
                <h1 className='user-story-date'>{story.createdAt}</h1>        

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
                    <h1 className='u-d-dropdown'>Delete and Update</h1>
                </div>
            </div>
        </>
    )
}

export default UserStoryIndexItem;