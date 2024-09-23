import Comment from "./Comment.jsx";
import UserInfoContext from "../context/UserInfoContext.js";
import {useContext} from "react";

export default function Post() {
    const {isAdmin} = useContext(UserInfoContext)

    return (

        <div>
            {isAdmin && <button>Delete</button>}
            <h1>Post</h1>
            <p>Welcome to my post!</p>
            <Comment></Comment>
        </div>
    )
}