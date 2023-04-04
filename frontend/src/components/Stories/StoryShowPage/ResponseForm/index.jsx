import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getResponses, fetchResponses } from "../../../../store/responses";
import { createResponse } from "../../../../store/responses";
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
        }
    }

    return (
            <div className="response-modal">
                
                <div className="rpm-container">
                    <h2 className="response-modal-header">Responses</h2>
                </div>

                <div className="response-box">
                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        />
                    </form>
                </div>

                <div>
                    {storyResponses.map((response) => <p>{response.body}</p>)}
                </div>

            </div>
    )
}