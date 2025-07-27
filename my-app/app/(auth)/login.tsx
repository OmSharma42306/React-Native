import { View,Text,TextInput,TouchableOpacity,Button } from "react-native";
import { styles } from "@/styles/styles";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";


export default function Login(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loginMessage,setLoginMessage ] = useState('');
    const { login } = useAuth();
    console.log("LOGIN MESSAGE : ",loginMessage)

    const handleLogin = async () =>{
        const token = 'dummy-token';
        // @ts-ignore
        await login(token)
    }
    return (

        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Enter Email" onChangeText={(text)=>setEmail(text)}></TextInput>
            <TextInput style={styles.input} placeholder="Enter Password" onChangeText={(text)=>setPassword(text)}></TextInput>
            <Button title="Login" onPress={handleLogin}></Button>
            {loginMessage ? <Text style={styles.text}>Om Sharma </Text> : ""}
        </View>
    )
}