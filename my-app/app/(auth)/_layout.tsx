import { Stack,Redirect } from 'expo-router';
import { useAuth } from '@/context/AuthContext';

export default function AuthLayout() {
  const {user } = useAuth()

  if(user){
    return <Redirect href={"/(tabs)"}></Redirect>
  }
  return (
    // <Stack screenOptions={{ headerShown: true, title: "Login Page" }}>
    <Stack>
      <Stack.Screen name="login" options={{title:'Login'}}></Stack.Screen>
      <Stack.Screen name='register' options={{title:'Register'}}></Stack.Screen>
    </Stack>

    
  );
}
