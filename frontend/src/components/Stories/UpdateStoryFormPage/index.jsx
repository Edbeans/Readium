import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getStory, updateStory, fetchStory } from "../../../store/stories";
import './UpdateStoryFormPage.css';

function UpdateStoryFormPage() {
    const { storyId } = useParams();
    const story = useSelector(getStory(storyId)); 
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const [title, setTitle] = useState(story.title);
    const [body, setBody] = useState(story.body); 

    useEffect(() => {
        dispatch(fetchStory(storyId));
    }, [dispatch, storyId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const storyData = {...story, title, body}
        dispatch(updateStory(storyData)).then(history.push("/@profile")); 
    }

    if (sessionUser) {
        return (
            <>
                <div className='create-story'>
                    <form className='story-box' onSubmit={handleSubmit}>
                        <div className='title-box'>
                            <input 
                                className='create-title'
                                type='text'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder='Title'
                            />
                        </div>
                        <div className='body-box'>
                            <textarea
                                className='create-body'
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                                placeholder='Tell your story...'
                            />
                        </div>
                        <button className='publish-btn' type='submit'>Update</button>
                    </form>
                </div>
            </>
        )
    }
    
}

export default UpdateStoryFormPage; 
