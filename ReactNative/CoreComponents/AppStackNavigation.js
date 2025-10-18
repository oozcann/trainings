import { View,Text,TextInput,Pressable } from 'react-native';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{
            headerStyle: { backgroundColor: "#6a51ae" },
                    headerTitleStyle: { fontWeight: "bold" },
                    headerTintColor: "#fff",
                    contentStyle: { backgroundColor: "#e8e4f3" },
                    headerRight: () => (
                    <Pressable onPress={() => alert("Menu button pressed!")}>
                        <Text style={{ color: "#fff", fontSize: 16 }}>Menu</Text>
                    </Pressable>
                    )
        }}>
            <Stack.Screen name='Home' component={HomeScreen}
                options={{
                    title: "Welcome Home"
                }}
            />
            <Stack.Screen name='About' component={AboutScreen}
            options={({ route }) => ({
                title: route.params.name,
            })}
            />
        </Stack.Navigator>
    </NavigationContainer>
    
  );
}