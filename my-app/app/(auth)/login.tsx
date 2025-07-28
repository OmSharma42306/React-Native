import { View,Text,TextInput,TouchableOpacity,Button } from "react-native";
import { styles } from "@/styles/styles";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { router } from "expo-router";
import API from "@/lib/axios"
import * as SecureStore from 'expo-secure-store'
import Toast from "react-native-toast-message";

export default function Login(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loginMessage,setLoginMessage ] = useState('');
    const { login } = useAuth();
    console.log("LOGIN MESSAGE : ",loginMessage)
    
    const handleLogin = async () =>{
        try{
        
            const response : any = await API.post('/login',{email,password});
        
            console.log(response);
            const token  = response.data.token;
            const userId = response.data.userId;
            console.log("token : ",token)
            console.log("userid : ",userId)
            const data = {userId : userId,token:token}
            Toast.show({
            type : "success",
            text1 : "Login Successful!",
        })
        // await login({user:{userId : userId,token : token}})
        // await saveTokenToLocalStorage(user.userId,user.token);
            await login(data)
            
        setTimeout(() => {
                        router.push('/om')
                    }, 1000) 
                
        }catch(error:any){
                    Toast.show({
                        type : "error",
                        text1 : "Error !",
                        text2 : error
                    })
        
    }}
    
    return (

        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Enter Email" onChangeText={(text)=>setEmail(text)}></TextInput>
            <TextInput style={styles.input} placeholder="Enter Password" onChangeText={(text)=>setPassword(text)}></TextInput>
            <Button title="Login" onPress={handleLogin}></Button>
            
        </View>
    )
}