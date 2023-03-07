import React from 'react';
import { Link } from 'react-router-dom';
import "./StoryIndexItem.css";
// import { useDispatch } from 'react-redux';

function StoryIndexItem ({story}) {
    // const dispatch = useDispatch();
    return (
        <>
            <Link className='story-link' to={`/stories/${story.id}`}>{story.title}</Link>
        </>
    )
}

export default StoryIndexItem;