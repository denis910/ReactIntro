import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    return(
        <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider};