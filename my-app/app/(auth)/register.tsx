import { View,TextInput,Text,Button } from "react-native"
import { styles } from "@/styles/styles" 
import { useAuth } from "@/context/AuthContext"
import { useState } from "react"
export default function Register(){

    const [ name ,setName] = useState("")
    const [ email , setEmail ] = useState("")
    const [ password,setPassword ] = useState("")
    const { login } = useAuth();
    const handleRegister = async () =>{
        // send email,password,name to backend api's 
        // get back token and set token 
        const fakeToken = "dadsad";
        // @ts-ignore
        await login(fakeToken)

    }
    return <View style={styles.container}>
    
        <Text style={styles.heading}>Enter Name</Text>
        <TextInput style={styles.input} placeholder="Name" onChangeText={(text)=>setName(text)} />
        <Text style={styles.heading} >Enter Email</Text>
        <TextInput style={styles.input} placeholder="Email" onChangeText={(text)=>setEmail(text)} />
        <Text style={styles.heading}>Enter Password</Text>
        <TextInput style={styles.input} placeholder="Password" onChangeText={(text)=>setPassword(text)} />
        
        <Button title="Register" onPress={handleRegister}></Button>
        
    </View>
}