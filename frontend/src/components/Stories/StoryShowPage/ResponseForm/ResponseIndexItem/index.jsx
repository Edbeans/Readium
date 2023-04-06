import React, { useState, useEffect } from "react";
import "./ResponseIndexItem.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteResponse } from "../../../../../store/responses";
import { timeConversion } from "../../../../../modules/helperFunctions";
import profilepic from '../../../../../assets/default-profile-icon.png';

export default function ResponseIndexItem({response}) {
    const dispatch = useDispatch(); 
    const sessionUser = useSelector(state => state.session.user);

    const handleEdit = () => {
        
    }

    const handleDelete = () => {
        dispatch(deleteResponse(response.id));
    }

    let editAndDeleteOption;
    if (sessionUser) {
        if (sessionUser.id === response.authorId) {
            editAndDeleteOption = 
            <div className='red-option'>
                <p className='red-option-e' onClick={handleEdit}>Edit</p>
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

                {/* RESPONSE BODY TEXT  */}
                <p className='rii-body-response'>{response.body}</p>
            </div>
        </>
    )
}