import React, { useState, useEffect } from "react";
import "./ResponseIndexItem.css";
import { useDispatch } from "react-redux";
import { timeConversion } from "../../../../../modules/helperFunctions";

export default function ResponseIndexItem({response}) {
    const dispatch = useDispatch();

    return (
        <>
            <p>{response.author}</p>
            <p>{response.body}</p>
        </>
    )
}