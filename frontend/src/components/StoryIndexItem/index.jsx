import React from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

function StoryIndexItem ({story}) {
    // const dispatch = useDispatch();
    console.log(story);
    return (
        <>
            <Link to={`/stories/${story.id}`}>{story.title}</Link>
        </>
    )
}

export default StoryIndexItem;