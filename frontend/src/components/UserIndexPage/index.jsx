import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStories, fetchStories } from "../../store/stories";

function UserIndexPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    
    useEffect(() => {
        dispatch(fetchStories());
    }, [dispatch]);
    
    let allStories = useSelector(getStories); 

    let userStories = allStories.filter(story => story.authorId === sessionUser.id) // [{}]

    return (
        <>
        </>
    )
}

export default UserIndexPage;