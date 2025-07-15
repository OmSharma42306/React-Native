import React, { createContext,useContext,useState,ReactNode} from "react";

type AuthContextType = {
    isLoggedIn : boolean;
    user : null | {name : string};
    login : (user : {name : string}) => void;
    logout : () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider = ({children} :{children : ReactNode})=>{
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [user,setUser] = useState<null | {name : string}>(null);

    const login = (userData : {name : string}) =>{
        setUser(userData);
        setIsLoggedIn(true);
    };

    const logout = () =>{
        setUser(null);
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={{isLoggedIn,user,login,logout}}>
            {children}

        </AuthContext.Provider>
    )
};

export const useAuth = () =>{
    const ctx = useContext(AuthContext);
    if(!ctx) throw new Error('useAuth must be used within AuthProvider');
    return ctx;
}