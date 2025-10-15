import { ScrollView,View,Text,StyleSheet,StatusBar, TextInput } from 'react-native';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function App() {
    
  const [name, setName] = useState("");  
    
  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            
            <TextInput 
                style={styles.input} 
                value={name} 
                onChangeText={setName}
                placeholder='Adınız'
                // secureTextEntry bu key yazılanı maskeler/gizler
                keyboardType='numeric' // sayıların olduğu klavyeyi açar.
                autoCorrect={false}
                autoCapitalize="none"
                ></TextInput>
            <Text style={{fontSize: 30,marginTop:20}}>Name is {name}</Text>
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