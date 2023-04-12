import { useState } from "react";
import { useDispatch } from "react-redux";
import './EditUserModal.css'
import { updateUser } from "../../../store/users";

export default function EditUserModal({sessionUser}) {
    const dispatch = useDispatch(); 

    const [fullname, setFullName] = useState(sessionUser.fullname);
    const [bio, setBio] = useState(sessionUser.bio); 

    // const sessionUser = useSelector(state => state.session.user); 

    const handleSubmit = async(e) => {
        e.preventDefault(); 
        const userData = {
            ...sessionUser,
            fullname: sessionUser.fullname,
            bio: sessionUser.bio
        }
        dispatch(updateUser(userData));
    }

    return (
        <>
            {/* <form onSubmit={handleSubmit}>
                <input 
                    value={fullname}
                    onChange={(e) => setFullName(e.target.value)} 
                />
                <br/>
                <input
                    value={bio}
                    onChange={(e) => setBio(e.target.value)} 
                />
                <button type='submit'>Edit details</button>
            </form> */}
            <div className='ep'>
                Feature is currently a work in progress! 
                <br/>
                Thank you for your patience.
            </div>
        </>
    )
}