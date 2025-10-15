import { ScrollView,View,Text,StyleSheet,StatusBar, TextInput } from 'react-native';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function App() {
    
  const [name, setName] = useState("Onur");  
    
  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            
            <TextInput style={styles.input} value={name} onChangeText={setName}></TextInput>
            
        </SafeAreaView>
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "f5f5f5",
        flex: 1,
        paddingTop: StatusBar.currentHeight
    },
    input: {
        height: 40,
        marginTop: 10,
        padding: 10,
        borderWidth: 1
    }
})  