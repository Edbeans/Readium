import React, { useState, useEffect } from "react";
import "./ResponseIndexItem.css";
import { useDispatch } from "react-redux";
import { timeConversion } from "../../../../../modules/helperFunctions";
import profilepic from '../../../../../assets/default-profile-icon.png'
export default function ResponseIndexItem({response}) {
    const dispatch = useDispatch();

    return (
        <>
            {/* USER INFO OF THEIR RESPONSE  */}
            <div className='rii-whole-cont'>
                <div className='rii-container'>
                    <img className='profile-pic rb-username-pfp' src={profilepic} alt='pfp'/>
                    <div className='rii-user-info'>
                        <p className='rii-author'>{response.author}</p>
                        <p className='rii-time-wrote'>{timeConversion(response.createdAt)}</p>
                    </div>
                </div>

                {/* RESPONSE BODY TEXT  */}
                <p className='rii-body-response'>{response.body}</p>
            </div>
        </>
    )
}