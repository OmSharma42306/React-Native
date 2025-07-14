import { Text,TextInput,View,TouchableOpacity } from "react-native"
import { styles } from "../../styles/styles"
import { useState } from "react"
export default function Counter(){
    const [count , setCount] = useState(0);

    return (
        
        <View style={styles.container}>
            <Text style={styles.heading}>Counter with Reset</Text>
            <TouchableOpacity style={styles.button} onPress={()=>setCount(count+1)}>
                <Text style={styles.buttonText}>Tap me</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>setCount(0)}>
                <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
            {count ? <Text style={styles.text}> you've tapped {count} times.</Text> : ""}
            {count > 10 ? <Text style={styles.text}>Ohh! 🥳</Text> : ""}

        </View>
    )
}