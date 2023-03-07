import React from 'react';
import "./UserStoryIndexItem.css";
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

function UserStoryIndexItem ({story}) {
    // const dispatch = useDispatch();
    return (
        <>
            {/* <Link to={`/stories/${story.id}`}>{story.title}</Link> */}
            <div className='author-header-container'>
                <h1 className='author-name'>{story.author}</h1>
            </div>

            <div className='story-title-container'>
                <h1 className='story-title'>{story.title}</h1>
            </div>

            <div className='story-body-container'>
                <p className='story-body'>{story.body}</p>
            </div>
                <h1 className='story-date'>{story.createdAt}</h1>        
        </>
    )
}

export default UserStoryIndexItem;