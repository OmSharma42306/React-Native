import { View,TextInput,Text,TouchableOpacity } from "react-native";
import { styles } from "../../styles/styles"
import { useState } from "react";
export default function ToDo(){
    const [todos,setTodos] = useState<any>([]);
    const [todo,setTodo] = useState<any>();
    function addTodo(){
        setTodos([...todos,todo]);
        setTodo("");
    }

    function handleDeleteTodo(deleteTodo:any){
        const updatedTodos = todos.filter((todo:any)=> todo !== deleteTodo);
        setTodos(updatedTodos);
    }
    return(
         <View style={styles.container}>
        <TextInput placeholder="Enter Todo" onChangeText={(text)=>{setTodo(text)}} style={styles.input}></TextInput>
        <TouchableOpacity style={styles.button} onPress={addTodo}>
            <Text style={styles.buttonText}>Add Todo</Text>
        </TouchableOpacity>
        
        <Text style={styles.heading}> All Todos!</Text>
        {todos && todos.length > 0 ? 
        <>
            {todos.map((todo:any)=>{
                return <>
                <Text style={styles.text}>{todo}</Text>
                <TouchableOpacity  onPress={()=>handleDeleteTodo(todo)}>
                <Text>❌</Text>
            </TouchableOpacity>
                </>
            })}
        </>
        : ""}
        
    </View>)
}