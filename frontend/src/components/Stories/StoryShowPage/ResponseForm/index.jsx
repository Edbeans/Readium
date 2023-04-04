import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createResponse } from "../../../../store/responses";

export default function ResponseForm({story}) {
    const dispatch = useDispatch(); 

    const [body, setBody] = useState("");
    // const [showError, setShowError] = useState(false); 
    const sessionUser = useSelector(state => state.session.user); 

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
            <div className="response-box">
                <form onSubmit={handleSubmit}>
                    
                </form>
            </div>
        </div>
    )
}