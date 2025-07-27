import { View ,Text} from "react-native"
import { router } from 'expo-router'
export default function Home(){
    router.push('/login')
    return <View>
        <Text>hi</Text>
    </View>
}