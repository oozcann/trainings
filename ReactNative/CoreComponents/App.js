import { ScrollView,View,Text,StyleSheet,StatusBar, TextInput,Switch, Button, Alert } from 'react-native';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import { use, useState } from 'react';

export default function App() {
    
  const [name, setName] = useState("");
  const [isDarkMode,setIsDarkMode] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            
            <View style={styles.container}>
                <View style={styles.form}>
                    <Text style={styles.label}>Username</Text>
                    <TextInput style={styles.input} value={username} onChangeText={() => setUsername} placeholder='Username'></TextInput>
                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.input} value={password} onChangeText={() => setPassword} secureTextEntry placeholder='Enter password'></TextInput>
                    <Button title='Login' onPress={() => {}}></Button>
                </View>
            </View>
            
            {/*
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
            */}
        </SafeAreaView>
    </SafeAreaProvider>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
  },
  form: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});
{/*
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
*/}