import React from 'react';
import "./UserStoryIndexItem.css";
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteStory } from '../../../store/stories';

function UserStoryIndexItem ({story}) {
    const dispatch = useDispatch();
    const history = useHistory(); 

    const removeStory = (e) => {
        e.preventDefault();
        dispatch(deleteStory(story.id)).then(history.push("/@profile"));
    }

    return (
        <>
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
                    <Link to={`/stories/${story.id}/update`}>Update</Link>
                    <button onClick={removeStory}>Delete</button>
                </div>
            </div>
        </>
    )
}

export default UserStoryIndexItem;