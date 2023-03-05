// TODO make story show page for each individual story
// use fetchStory with storyId etc etc. 
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getStory, fetchStory } from "../../../store/stories";
import { useDispatch, useSelector } from "react-redux";
import "./StoryShowPage.css";
import NavBar from "../../NavBar";

function StoryShowPage() {
    const dispatch = useDispatch();
    const { storyId } = useParams();
    const story = useSelector(getStory(storyId));
    
    useEffect(() => {
        dispatch(fetchStory(storyId));
    }, [dispatch, storyId]);

    return (
        <>
            <h1>{story.title}</h1>
            <p>{story.body}</p>
        </>
    )


}

export default StoryShowPage; 