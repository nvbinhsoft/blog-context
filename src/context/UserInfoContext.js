import {createContext} from "react";

const UserInfoContext = createContext({
    username: 'guest',
    isAdmin: false
})

export default UserInfoContext;