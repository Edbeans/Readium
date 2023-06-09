import csrfFetch from "./csrf";

const RECEIVE_STORIES = 'RECEIVE_STORIES';
const RECEIVE_STORY = 'RECEIVE_STORY';
const REMOVE_STORY = 'REMOVE_STORY'; 

const receiveStories = (stories) => {
    return {
        type: RECEIVE_STORIES,
        stories
    }
}
            
const receiveStory = (payload) => {
    return {
        type: RECEIVE_STORY,
        payload
    }
}      
              
const removeStory = (storyId) => {
    return {
        type: REMOVE_STORY,
        storyId 
    }
}

export const getStory = (storyId) => (state) => {
    return state.stories ? state.stories[storyId] : null;
}

export const getStories = (state) => {
    return state.stories ? Object.values(state.stories) : []; 
}

export const fetchStories = () => async (dispatch) => {
    const res = await csrfFetch('/api/stories'); 

    if (res.ok) {
        const storiesData = await res.json();
        dispatch(receiveStories(storiesData));
    }
}

export const fetchStory = (storyId) => async (dispatch) => {
    const res = await csrfFetch(`/api/stories/${storyId}`);

    if (res.ok) {
        const storyData = await res.json();
        dispatch(receiveStory(storyData));
    }
}

export const createStory = (story) => async (dispatch) => {
    const res = await csrfFetch('/api/stories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(story)
    });

    if (res.ok) {
        const newStory = await res.json();
        dispatch(receiveStory(newStory)); 
    }
}

export const updateStory = (story) => async (dispatch) => {
    const res = await csrfFetch(`/api/stories/${story.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(story)
    });

    if (res.ok) {
        const updatedStory = await res.json();
        dispatch(receiveStory(updatedStory)); 
    }
}

export const deleteStory = (storyId) => async (dispatch) => {
    const res = await csrfFetch(`/api/stories/${storyId}`, {
        method: 'DELETE'
    });

    if (res.ok) {
        dispatch(removeStory(storyId));
    }
}

const storiesReducer = (oldState = {}, action) => {
    let newState = {...oldState}
    
    switch (action.type) {
        case RECEIVE_STORIES:
            return action.stories;
        case RECEIVE_STORY:
            // const story = action.story;
            // newState[story.id] = story;
            return { ...newState, [action.payload.story.id]: action.payload.story }
            // return newState; 
        case REMOVE_STORY:
            const storyId = action.storyId;
            delete newState[storyId];
            return newState; 
        default: 
            return oldState; 
    }
}

export default storiesReducer;