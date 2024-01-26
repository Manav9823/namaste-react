import { createContext } from "react";

const UserContext = createContext({
    "loggedInAs" : "DefaultUser",
    "showSearchBar": false
})
export default UserContext