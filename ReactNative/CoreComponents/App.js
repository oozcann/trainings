import { ScrollView,View,Text,StyleSheet,StatusBar, TextInput,Switch } from 'react-native';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function App() {
    
  const [name, setName] = useState("");
  const [isDarkMode,setIsDarkMode] = useState(false);
    
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
            <TextInput style={[styles.input,{height: 100}]} multiline/>
            <View style={styles.switchContainer}>
                <Text style={styles.text}>Dark Mode</Text>
                <Switch 
                    value={isDarkMode}
                    onValueChange={() => setIsDarkMode((previousState) => !previousState)}
                    trackColor={{false: "red", true: "darkblue"}}
                    thumbColor="yellow"
                />
            </View>
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
        borderWidth: 1
    },
    text: {
        fontSize: 30,
        padding: 10
    },  
    switchContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10
    }
})  