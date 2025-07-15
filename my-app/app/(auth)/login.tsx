import { View,Text,TextInput,TouchableOpacity,Button } from "react-native";
import { styles } from "@/styles/styles";
import { useState } from "react";


export default function Login(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loginMessage,setLoginMessage ] = useState('');
    console.log("LOGIN MESSAGE : ",loginMessage)

    return (

        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Enter Email" onChangeText={(text)=>setEmail(text)}></TextInput>
            <TextInput style={styles.input} placeholder="Enter Password" onChangeText={(text)=>setPassword(text)}></TextInput>
            <Button title="Login" onPress={()=>setLoginMessage('Login Successful!')}></Button>
            {loginMessage ? <Text style={styles.text}>Om Sharma </Text> : ""}
        </View>
    )
}