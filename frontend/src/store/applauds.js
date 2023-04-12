import csrfFetch from "./csrf";

const RECEIVE_APPLAUDS = 'RECEIVE_APPLAUDS';
const RECEIVE_APPLAUD = 'RECEIVE_APPLAUD'; 
const REMOVE_APPLAUD ='REMOVE_APPLAUD'; 

const receiveApplaud = (payload) => {
    return {
        type: RECEIVE_APPLAUD,
        payload 
    }
}

const receiveApplauds = (applauds) => {
    return {
        type: RECEIVE_APPLAUDS,
        applauds 
    }
}


const removeApplaud = (applaudId) => {
    return {
        type: REMOVE_APPLAUD,
        applaudId 
    }
}

export const getApplaud = (applaudId) => (state) => {
    return state.applauds ? state.applauds[applaudId] : null; 
}

export const getApplauds = (state) => {
    return state.applauds ? Object.values(state.applauds) : []; 
}

export const fetchApplauds = () => async (dispatch) => {
    const res = await csrfFetch('/api/applauds'); 

    if (res.ok) {
        const applaudsData = await res.json();
        dispatch(receiveApplauds(applaudsData)); 
    }    
}

export const fetchApplaud = (applaudId) => async (dispatch) => {
    const res = await csrfFetch(`/api/applauds/${applaudId}`);

    if (res.ok) {
        const applaudData = await res.json();
        dispatch(receiveApplaud(applaudData)); 
    }
}

export const createApplaud = (applaud) => async (dispatch) => {
    const res = await csrfFetch('/api/applauds', {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(applaud) 
    });

    if (res.ok) {
        const newApplaud = await res.json();
        dispatch(receiveApplaud(newApplaud));
    }
}

export const deleteApplaud = (applaudId) => async (dispatch) => {
    const res = await csrfFetch(`/api/applauds/${applaudId}`,{
        method: 'DELETE'
    });

    if (res.ok) {
        dispatch(removeApplaud(applaudId)); 
    }
}

const applaudsReducer = (oldState = {}, action) => {
    const newState = {...oldState}

    switch (action.type) {
        case RECEIVE_APPLAUDS:
            return action.applauds;
        case RECEIVE_APPLAUD:
            return { ...newState, [action.payload.applaud.id]: action.payload.applaud }
        case REMOVE_APPLAUD:
            const applaudId = action.applaudId; 
            delete newState[applaudId];
            return newState;
        default:
            return oldState;
    }
}

export default applaudsReducer; 