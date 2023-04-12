import React from 'react'; 
// import { useSelector } from 'react-redux';
// import { getStory } from '../../../store/stories';
import { Link } from 'react-router-dom';
import profilepic from '../../../assets/default-profile-icon.png'
import "./MoreUserStoryIndexItem.css";

export default function MoreUserStoryIndexItem({story}) {
    // console.log("STORY", story); 
    // const { storyId } = useParams(); 
    // const story = useSelector(getStory(storyId)); 
    return (
        <div className='more-story-container'>
            {/* <img className='profile-pic rb-username-pfp' src={profilepic} alt='pfp'/> */}
            <Link className='more-story-link' to={`/stories/${story.id}`}>{story.title}</Link>
        </div>
        
    )
}