import React,{useState} from "react";
import { View,TextInput,Button,Text,TouchableOpacity,StyleSheet} from "react-native"
import {styles} from "../../styles/styles"
export default function Greeting(){
    const [name , setName] = useState(""); 
    const [click,setClick] = useState(false);
    
    return (
        <View style={styles.container}>
            <Text style={styles.heading}> Greeting App</Text>
            <TextInput style={styles.input} placeholder="Enter Your Name" onChangeText={text=>setName(text)}></TextInput>
            <TouchableOpacity style={styles.button} onPress={()=>setClick(true)}>
                <Text style={styles.buttonText}>Say Hello!</Text>
            </TouchableOpacity>
            {!name ?<Text>Please Enter Name</Text> :""}
            {click && name ?<Text style={styles.text}>Hello! {name}</Text>:""}
             
        </View>    
    )
};
