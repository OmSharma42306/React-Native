import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useContext, useState } from "react";

type AuthContextType = {
    isLoggedIn : boolean;
    user : null | {name : string};
    login : (user : {userId : string,token : string}) => void;
    logout : () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider = ({children} :{children : ReactNode})=>{
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [user,setUser] = useState<null | {name : string} | any>(null);

    const login = async (user : {token : string,userId : string}) =>{
        setUser(user);
        setIsLoggedIn(true);
        console.log("userID",user.userId)
        console.log("Token",user.token)
        await saveTokenToLocalStorage(user.userId,user.token);
        

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

async function saveTokenToLocalStorage(key:string,value:string){
    // await SecureStore.setItemAsync (key,value);
     await AsyncStorage.setItem('token', value);
    // await SecureStore.setItem(key,value)
}