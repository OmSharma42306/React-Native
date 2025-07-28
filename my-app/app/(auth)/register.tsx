import API from "@/lib/axios"
import { styles } from "@/styles/styles"
import { router } from "expo-router"
import { useState } from "react"
import { Button, Text, TextInput, View } from "react-native"
import Toast from "react-native-toast-message"
export default function Register(){

    const [ name ,setName] = useState("")
    const [ email , setEmail ] = useState("")
    const [ password,setPassword ] = useState("")
    const [isRegister,setIsRegister] = useState(false);

    const handleRegister = async () =>{
        try{

        
        const response = await API.post('/register',{name,email,password});
        const msg = response.data.msg;
        if(msg){
            setIsRegister(true)
        }
        
        Toast.show({
            type : "success",
            text1 : "Registration Successful!",
            text2 : response.data.msg
        });
        
        setTimeout(() => {
                router.push('/login')
            }, 2000) 
        }catch(error:any){
            Toast.show({
                type : "error",
                text1 : "Error !",
                text2 : error
            })
        }
        
    }
    return (
    <View style={styles.container}>
        <Text style={styles.heading}>Enter Name</Text>
        <TextInput style={styles.input} placeholder="Name" onChangeText={(text)=>setName(text)} />
        <Text style={styles.heading} >Enter Email</Text>
        <TextInput style={styles.input} placeholder="Email" onChangeText={(text)=>setEmail(text)} />
        <Text style={styles.heading}>Enter Password</Text>
        <TextInput style={styles.input} placeholder="Password" onChangeText={(text)=>setPassword(text)} />
        
        <Button title="Register" onPress={handleRegister}></Button>
            
            
           
            

        
    </View>
    )
}