
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext); // 커스텀 훅

export const AuthProvider = ({ children }) => { // 'children' prop은 AuthProvider로 감싸는 다른 component를 AuthProvider의 하위요소로 포함되게 함

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {
        setIsLoggedIn(true);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    };


    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children} 
        </AuthContext.Provider>
    );
};
