import {createContext, useContext} from 'react';

export const UserContext = createContext({
    username: "username",
    isLoggedIn: false,
    setIsLoggedIn: () => {},
    setUsername: () => {},
    resetUserDetails: () => {},
    userEvents: [],
    addEvent: ()=>{},
    removeEvent: ()=>{},
})

export const useUserContext = () => {
    return useContext(UserContext);
}

export const UserProvider = UserContext.Provider;