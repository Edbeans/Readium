import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getResponses, fetchResponses } from "../../../../store/responses";
import { createResponse } from "../../../../store/responses";
import ResponseIndexItem from "./ResponseIndexItem";
import profilepic from '../../../../assets/default-profile-icon.png'
import './ResponseForm.css'; 

export default function ResponseForm({story}) {
    const dispatch = useDispatch(); 
    const sessionUser = useSelector(state => state.session.user); 
    
    let responses = useSelector(getResponses);
    let storyResponses = responses.filter(response => response.storyId === story.id);
    
    const [body, setBody] = useState("");

    useEffect(() => {
        dispatch(fetchResponses())
    }, [dispatch])

    const handleSubmit = async(e) => {
        e.preventDefault(); 
        if(body.length > 0) {
            const responseData = {
                story_id: story.id,
                author_id: sessionUser.id,
                body: body
            }
            dispatch(createResponse(responseData)); 
            setBody('');
        }
    }
    if (!responses) {
        return null;
    } else {
        return (
                <div className="response-modal">
                    
                    {/* RESPONSE HEADER  */}
                    <div className="rpm-container">
                        <h2 className="response-modal-header">Responses</h2>
                    </div>
    
                    {/* RESPONSE BOX  */}
                    <div className='rp-container' data-aos='fade-down' data-aos-duration='1000'>
                        <div className="response-box">
                            <div className='rb-username'>
                                <img className='profile-pic rb-username-pfp' src={profilepic} alt='pfp'/>
                                <h3>{sessionUser.fullname}</h3>
                            </div>
    
                            <form className='response-text-form' onSubmit={handleSubmit}>
                                <textarea
                                    className='response-text-box'
                                    type='text'
                                    value={body}
                                    placeholder="What are your thoughts?"
                                    onChange={(e) => setBody(e.target.value)}
                                />
                                <div className='resp-btn-div'>
                                    <button className='respond-btn' type='submit'>Respond</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="resp-border-line"></div>
    
                    {/* RESPONSES  */}
                    <div>
                        {storyResponses.map((response) => <ResponseIndexItem key={response.id} response={response}/>)}
                    </div>
    
                </div>
        )
    }
}