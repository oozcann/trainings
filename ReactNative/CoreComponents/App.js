import { ScrollView,View,Text,StyleSheet,StatusBar, TextInput,Switch, Button, Alert,Image,KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import { use, useState } from 'react';

export default function App() {
  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <Text>Onur</Text>
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
  }
});