import csrfFetch from './csrf';

// export const SET_RESPONSE = 'response/SET_RESPONSE';
// export const SET_RESPONSES = 'response/SET_RESPONSE';
// export const REMOVE_RESPONSE = 'response/REMOVE_RESPONSE';
const RECEIVE_RESPONSES = 'RECEIVE_RESPONSES';
const RECEIVE_RESPONSE = 'RECEIVE_RESPONSE';
const REMOVE_RESPONSE = 'REMOVE_RESPONSE'; 


const receiveResponse = (payload) => {
    return {
        type: RECEIVE_RESPONSE,
        payload 
    }
}

const receiveResponses = (responses) => {
    return {
        type: RECEIVE_RESPONSES,
        responses
    }
}

const removeResponse = (responseId) => {
    return {
        type: REMOVE_RESPONSE,
        responseId 
    }
}

export const getResponse = (responseId) => (state) => {
    return state.responses ? state.responses[responseId] : null 
}

export const getResponses = (state) => {
    return state.responses ? Object.values(state.responses) : [] 
}

export const fetchResponses = () => async(dispatch) => {
    const res = await csrfFetch('/api/responses')

    if (res.ok) {
        const responses = await res.json(); 
        dispatch(receiveResponses(responses)); 
    }
}

export const fetchResponse = (responseId) => async(dispatch) => {
    const res = await csrfFetch(`/api/responses/${responseId}`);

    if (res.ok) {
        const response = await res.json();
        dispatch(receiveResponse(response)); 
    }
}

// CREATE, UPDATE, DELETE FUNCTIONS

export const createResponse = (response) => async(dispatch) => {
    const res = await csrfFetch('/api/responses', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(response)
    });

    if (res.ok) {
        const newResponse = await res.json(); 
        dispatch(receiveResponse(newResponse)); 
    }
}

export const updateResponse = (response) => async(dispatch) => {
    const res = await csrfFetch(`/api/responses/${response.id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(response) 
    });

    if (res.ok) {
        const updatedResponse = await res.json();
        dispatch(receiveResponse(updatedResponse)); 
    }
}

export const deleteResponse = (responseId) => async(dispatch) => {
    const res = await csrfFetch(`/api/responses/${responseId}`, {
        method: "DELETE",
    });

    if (res.ok) {
        dispatch(removeResponse(responseId)); 
    }
}

const responsesReducer = (oldState = {}, action) => {
    const newState = {...oldState}

    switch (action.type) {
        case RECEIVE_RESPONSES:
            return action.responses;
        case RECEIVE_RESPONSE: 
            // const response = action.payload.response;
            // newState[response.id] = response;
            // return newState;
            return {...newState, [action.payload.response.id]: action.payload.response}
        case REMOVE_RESPONSE:
            const responseId = action.responseId;
            delete newState[responseId];
            return newState;
        default:
            return oldState; 
    }
}

export default responsesReducer;