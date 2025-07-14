import { View, Text,TextInput} from "react-native"
import { styles } from "../../styles/styles"
import { useState } from "react"

export default function EmojiDetector(){
    const [text,setText] = useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Emoji Detector!</Text>

            <TextInput style={styles.input} placeholder="Enter Emotion" onChangeText={(text)=>setText(text)}></TextInput>

            {text === "happy" ?( <Text> 😊 </Text>) : text === "sad" ? <Text> 😊 </Text> : text === "angry" ? <Text>😡</Text> : " " }

        </View>
    )
}