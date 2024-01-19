import { createContext } from "react";

const UserContext = createContext({
    "loggedInAs" : "DefaultUser"
})
export default UserContext