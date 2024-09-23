import {useContext} from "react";
import UserInfoContext from "../context/UserInfoContext.js";

export default function Comment() {
    const userInfo = useContext(UserInfoContext)
    return (
        <div>
            <h2>Comments</h2>
            <p>Logged in as {userInfo.username}</p>
            {userInfo.isAdmin && <button>Edit comment</button>}
        </div>
    )
}