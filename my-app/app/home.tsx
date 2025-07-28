import { router } from 'expo-router';
import { Text, View } from "react-native";
import Toast from "react-native-toast-message";

export default function Home(){
    router.push('/login')
    return( 
    <View>
        
        <Text>hi</Text>
    </View>
    )
}