import * as constants from "../../../Utils/Constants/constants";
import * as authService from '../../../Services/authService';
import { AuthContext } from '../../../Contexts/AuthContext/AuthContext';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const activeUserInitializer = {
    userId: '',
    name: '',
    email: ''
};

function ActiveUserProvider({ children }) {
    const [activeUser, setActiveUser] = useState(localStorage.activeUser ? JSON.parse(localStorage.activeUser) : activeUserInitializer);
    const navigator = useNavigate();

    async function logOutActiveUser() {
        const logOutConfirmation = await authService.logOut();
        if (logOutConfirmation === constants.STATUS_OK) {
            localStorage.removeItem("activeUser");
            localStorage.removeItem("inspectedPet");
            setActiveUser(activeUserInitializer);
            navigator('/');
        }
    }

    function updateActiveUser(updatedUser) {
        localStorage.activeUser = JSON.stringify(updatedUser);
        setActiveUser(updatedUser);
    }

    return (
        <AuthContext.Provider value={{ activeUser, updateActiveUser, logOutActiveUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default ActiveUserProvider;