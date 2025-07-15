import { View , Text} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { styles } from '../../styles/styles'
export default function Detail(){
    const { name } = useLocalSearchParams();
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome, {name}</Text>
            
        </View>
    )
}