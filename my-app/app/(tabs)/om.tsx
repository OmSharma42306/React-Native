import React,{useState} from "react";
import { View,Text,TextInput,TouchableOpacity,StyleSheet } from 'react-native';

export default function Om(){
    const [name,setName] = useState("");
    const [count,setCount] = useState(0);
    return (
        <>
        <View style={styles.container}>
            <Text style={styles.heading}> Om Sharma</Text>
            <TextInput placeholder="Enter a Value" value={name} onChangeText={text=>setName(text)} style={styles.input}></TextInput>
            <Text style={styles.text}>{name}</Text>
            
            <TouchableOpacity style={styles.button} onPress={()=>setCount(count+1)}>
                <Text style={styles.text}>Touch Me</Text>
            </TouchableOpacity >

            <Text style={styles.text}>Your Count Clicked Times : {count}</Text>
        </View>        
        </>
    )
};



const styles = StyleSheet.create({
  container: {
    flex: 1, // fills the entire screen
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#0a84ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  counter: {
    fontSize: 16,
    marginTop: 10,
  },
});