import csrfFetch from './csrf';

const RECEIVE_USERS = 'RECEIVE_USERS';
const RECEIVE_USER = 'RECEIVE_USER';

const receiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users
    }
}

const receiveUser = (payload) => {
    return {
        type: RECEIVE_USER,
        payload 
    }
}

export const getUser = (userId) => (state) => {
    return state.users ? state.users[userId] : null; 
}

export const getUsers = (state) => {
    return state.users ? Object.values(state.users) : []; 
}

export const fetchUsers = () => async(dispatch) => {
    const res = await csrfFetch('/api/users'); 

    if (res.ok) {
        const usersData = await res.json(); 
        dispatch(receiveUsers(usersData)); 
    }
}

export const fetchUser = (userId) => async(dispatch) => {
    const res = await csrfFetch(`/api/users/${userId}`); 

    if (res.ok) {
        const userData = await res.json();
        dispatch(receiveUser(userData)); 
    }
}

export const createUser = (user) => async(dispatch) => {
    const res = await csrfFetch('/api/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    });

    if (res.ok) {
        const newUser = await res.json();
        dispatch(receiveUser(newUser));
    }
}

export const updateUser = (user) => async(dispatch) => {
    const res = await csrfFetch(`/api/users/${user.id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user) 
    });

    if (res.ok) {
        const updatedUser = await res.json();
        dispatch(receiveUser(updatedUser)); 
    }
}

const usersReducer = (oldState = {}, action) => {
    let newState = {...oldState}; 

    switch(action.type) {
        case RECEIVE_USERS:
            return action.users; 
        case RECEIVE_USER:
            return {...newState, [action.payload.user.id]: action.payload.user }
        default: 
            return oldState; 
    }
}

export default usersReducer; 

