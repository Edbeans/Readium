import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStory } from "../../../store/stories";
import './StoryFormPage.css';


function StoryFormPage() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch(); 
    const history = useHistory(); 
    const story = { title: "", body: "", author_id: sessionUser.id }
    const [title, setTitle] = useState(story.title);
    const [body, setBody] = useState(story.body); 

            
    const handleSubmit = (e) => {         
        e.preventDefault();
        const storyData = {...story, title, body}
        dispatch(createStory(storyData)).then(history.push("/@profile")); 
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
                        <button className='publish-btn' type='submit'>Publish</button>
                    </form>
                </div>
            </>
        )
    } 
}

export default StoryFormPage;