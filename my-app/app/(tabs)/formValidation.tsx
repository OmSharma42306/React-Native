import { View , Text , TextInput, TouchableOpacity } from "react-native";
import { styles } from "../../styles/styles";
import { useState } from "react";

export default function Form(){
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [errorMessage,setErrorMessage] = useState('');
    const [submit , setSubmit] = useState(false);

    function handleSubmit(){
        if(!name && !email && !password){
                setErrorMessage("Invalid Inputs!");      
                return;      
        }
        if(password.length < 6){
            setErrorMessage("Password Minimum 8 Characters.")
            return;
        }
        setSubmit(true);

    }
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Form Validation</Text>

            {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
            
            <Text style={styles.text}> Name </Text>
            <TextInput style={styles.input} placeholder="Enter Name" onChangeText={(text)=>setName(text)}></TextInput>

            <Text style={styles.text}> Email</Text>
            <TextInput style={styles.input} onChangeText={(text)=>setEmail(text)} placeholder="Enter Email"></TextInput>

            <Text style={styles.text}>Password</Text>
            <TextInput style={styles.input} onChangeText={(text)=>setPassword(text)} placeholder="Enter Password" ></TextInput>

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        {submit ? <Text>Your Data Submitted Successfully!</Text> : ""}
        </View>
    )
}