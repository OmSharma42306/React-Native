import { View, Text,Button } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "../../styles/styles"

export default function Profile(){
    const router = useRouter();
    
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Profile Tab</Text>
            <Button title="View Details" onPress={()=>router.push('/profile/Detail?name=Om')}></Button>

        </View>

    )
}
