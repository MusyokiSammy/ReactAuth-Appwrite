import React, {useContext, useState, useEffect, createContext} from 'react'

const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [loading, setIsLoading] = useState(true)
    const [user, setUser] = useState(null)

    useEffect(() => {
            setTimeout(()=>setIsLoading(false), 1000);
        }, [])

    const loginUser = (userInfo) => {

    }
    const logoutUser = () => {

    }

    const registerUser = (userInfo) => {
        // send request to server for registration and store token in local storage or cookie
    }

    const checkUserStatus = () => {

    }

    const contextData = {
        user,
        loginUser,
        logoutUser,
        registerUser,
        checkUserStatus
    }

    return (    
    <AuthContext.Provider value={contextData}>
        {
            loading ? <p>Loading...</p> : children
        }
    </AuthContext.Provider>
    )
}

export const useAuth = () => {return useContext(AuthContext)}

export default AuthContext
