import React, { useState, useEffect } from "react";
import "./ResponseIndexItem.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteResponse, updateResponse } from "../../../../../store/responses";
import { timeConversion } from "../../../../../modules/helperFunctions";
import profilepic from '../../../../../assets/default-profile-icon.png';

export default function ResponseIndexItem({response}) {
    const dispatch = useDispatch(); 
    const sessionUser = useSelector(state => state.session.user);
    
    const [responseContent, setResponseContent] = useState(response?.body);
    const [editResponse, setEditResponse] = useState(false); 


    const handleEdit = (e) => {
        e.preventDefault(); 
        const responseData = {...response, body: responseContent};
        setEditResponse(false);
        dispatch(updateResponse(responseData)); 

    }
    
    const handleCloseEdit = (e) => {
        if (e.keyCode === 27) {
            setEditResponse(false);
            setResponseContent(response.body);
        }
    }

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteResponse(response.id));
    }

    let editAndDeleteOption;
    if (sessionUser) {
        if (sessionUser.id === response.authorId) {
            editAndDeleteOption = 
            <div className='red-option'>
                <p className='red-option-e' onClick={() => setEditResponse(true)}>Edit</p>
                <p className='red-option-d' onClick={handleDelete}>Delete</p>
            </div>
        }
    }

    return (
        <>
            {/* USER INFO OF THEIR RESPONSE  */}
            <div className='rii-whole-cont'>
                <div className='rii-container'>
                    <div className='rii-container-within'>
                        <img className='profile-pic rb-username-pfp' src={profilepic} alt='pfp'/>
                        <div className='rii-user-info'>
                            <p className='rii-author'>{response.author}</p>
                            <p className='rii-time-wrote'>{timeConversion(response.createdAt)}</p>
                        </div>
                    </div>
                    {editAndDeleteOption}
                </div>

                {editResponse ? (
                    <div className='edit-box'>
                        <form className='response-text-form' onSubmit={handleEdit}>
                            <textarea
                                className='response-text-box'
                                type='text'
                                value={responseContent}
                                placeholder="What are your thoughts?"
                                autoFocus
                                onKeyDown={handleCloseEdit}
                                onChange={(e) => setResponseContent(e.target.value)}
                            />
                            <div className='resp-btn-div'>
                                <span 
                                    className='resp-cncl-btn'
                                    onClick={() => {
                                        setEditResponse(false);
                                        setResponseContent(response.body);
                                    }}
                                >
                                    Cancel
                                </span>
                                <button className='save-btn' type='submit'>Save</button>
                            </div>
                        </form>
                    </div>
                ) : (
                <p className='rii-body-response'>{response.body}</p>
                )}
            </div>
        </>
    )
}